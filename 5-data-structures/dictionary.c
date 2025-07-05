// Implements a dictionary's functionality

#include <ctype.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
} node;

// TODO: Choose number of buckets in hash table
const unsigned int N = 26;
unsigned int counter = 0;

// Hash table
node *table[N];

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    int hashIdx = hash(word);

    // create cursor
    node *cursor = table[hashIdx];

    // loop through the linked list nodes
    while (cursor != NULL)
    {
        if (strcasecmp(cursor->word, word) == 0)
        {
            // match found
            return true;
        }
        else
        {
            cursor = cursor->next;
        }
    }
    // if no match was found
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO: Improve this hash function
    return toupper(word[0]) - 'A';
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // Open the dictionary file
    FILE *source = fopen(dictionary, "r");
    if (source == NULL)
    {
        return false;
    }

    // initiate hash table buckets to null
    for (int i = 0; i < N; i++)
    {
        table[i] = NULL;
    }

    // Read each word in the file
    char dictWord[LENGTH + 1];
    while (fscanf(source, "%s", dictWord) != EOF)
    {
        node *temp = malloc(sizeof(node));

        if (temp == NULL)
        {
            return false;
        }

        strcpy(temp->word, dictWord);

        // Add each word to the hash table
        int hashIdx = hash(dictWord);

        if (table[hashIdx] == NULL)
        {
            temp->next = NULL;
        }
        else
        {
            temp->next = table[hashIdx];
        }
        table[hashIdx] = temp;
        counter += 1;
    }

    // Close the dictionary file
    fclose(source);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    return counter;
}

void freenode(node *n);
// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    for (int i = 0; i < N; i++)
    {
        if (table[i] != NULL)
        {
            freenode(table[i]);
        }
    }
    return true;
}

void freenode(node *n)
{
    if (n->next != NULL)
    {
        freenode(n->next);
    }
    free(n);
}
