#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // total cents that will also be updated after subtraction
    int cents;
    // counter for the coins needed
    int n = 0;
    // naming each quantity of cents accordignly
    int quarter = 25;
    int dime = 10;
    int nickel = 5;
    int penny = 1;

    // runs once and prompts the user for a positive int for the cents
    do
    {
        cents = get_int("Change owned: ");
    }
    while (cents < 0);

    // each while checks for the remaining and also increments the number of coins
    while (cents >= quarter)
    {
        cents -= quarter;
        n++;
    }
    while (cents >= dime)
    {
        cents -= dime;
        n++;
    }
    while (cents >= nickel)
    {
        cents -= nickel;
        n++;
    }
    while (cents >= penny)
    {
        cents -= penny;
        n++;
    }

    // prints the number of coins needed for the change
    printf("%i\n", n);
}
