#include <stdio.h>

int const size = 5;

int main (void)
{
    int numbers[size];
    numbers[0] = 1;

    for (int i=1; i <size; i++)
    {
        numbers[i] = numbers[i - 1] * 2;
    }

    for (int i=0; i < size; i++)
    {
        printf("%i\n", numbers[i]);
    }
}