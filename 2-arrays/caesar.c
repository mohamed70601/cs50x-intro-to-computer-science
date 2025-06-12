#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char rotate(char c, int n);

int main(int argc, string argv[])
{
    // Make sure program was run with just one command-line argument
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    // Make sure every character in argv[1] is a digit
    for (int i = 0, length = strlen(argv[1]); i < length; i++)
    {
        if (isdigit(argv[1][i]) == 0)
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
    }

    // Convert argv[1] from a `string` to an `int`
    int k = atoi(argv[1]);

    // Prompt user for plaintext
    string plain_text = get_string("plaintext: ");

    // For each character in the plaintext:
    int length = strlen(plain_text);
    char cipher_text[length + 1];
    for (int i = 0; i < length; i++)
    {
        cipher_text[i] = rotate(plain_text[i], k);
    }

    cipher_text[length] = '\0';
    printf("ciphertext: %s\n", cipher_text);
    return 0;
}

char rotate(char c, int n)
{
    if (islower(c))
    {
        return (char) ('a' + (c - 'a' + n) % 26);
    }
    else if (isupper(c))
    {
        return (char) ('A' + (c - 'A' + n) % 26);
    }
    else
    {
        return c;
    }
}
