import csv
import sys


def main():

    # TODO: Check for command-line usage

    if len(sys.argv) != 3:
        print("Usage: python dna.py data.csv sequence.txt")
        sys.exit(1)

    # TODO: Read database file into a variable

    with open(sys.argv[1], newline="") as file:
        reader = csv.DictReader(file)
        database = list(reader)
        str_sequences = reader.fieldnames[1:]

    # TODO: Read DNA sequence file into a variable

    with open(sys.argv[2], "r") as file:
        dna_sequence = file.read()

    # TODO: Find longest match of each STR in DNA sequence

    result = {}
    for str_sequence in str_sequences:
        result[str_sequence] = longest_match(dna_sequence, str_sequence)

    # TODO: Check database for matching profiles

    for person in database:
        # Innocent until proven guilty
        match = True
        for str_sequence in str_sequences:
            if int(person[str_sequence]) != result[str_sequence]:
                match = False
                break
        if match:
            # Ladies and gentlemen...we got him
            print(person["name"])
            return
    print("No match")


def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):

        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:

            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1

            # If there is no match in the substring
            else:
                break

        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in seqeuence, return longest run found
    return longest_run


main()
