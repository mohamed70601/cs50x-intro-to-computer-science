#include <cs50.h>
#include <stdio.h>

void print_row(int spaces, int hashtags);

int main(void)
{
    int height;
    do
    {
        height = get_int("height: ");
    }
    while(height < 1 || height > 8);

    for(int i = 0; i < height; i++)
    {
        print_row(height, i+1);
    }
}

void print_row(int spaces, int hashtags)
{
    for (int j = 0; j < spaces - hashtags; j++)
    {
        printf(" ");
    }
    for (int i = 0; i < hashtags; i++)
    {
        printf("#");
    }
    printf("\n");
}
