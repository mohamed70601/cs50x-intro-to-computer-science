#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int points[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(string word);

int main(void)
{

    // Prompt the user for the two words
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Compute the score for each word
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // Print the winner (or if its a tie)
    if (score1 > score2)
    {
        printf("Player 1 wins!");
    }
    else if (score2 > score1)
    {
        printf("Player 2 wins!");
    } else {
        printf("Tie!");
    }
}

// function to compute the score
int compute_score(string word)
{
    int length = strlen(word);
    int score = 0;

    for (int i = 0; i < length; i++)
    {
        char c = toupper(word[i]);

        if (c >= 'A' && c <= 'Z')
        {
            score += points[(c - 'A')];
        }
    }
    return score;
}
