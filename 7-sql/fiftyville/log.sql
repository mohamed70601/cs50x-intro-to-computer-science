-- Keep a log of any SQL queries you execute as you solve the mystery.

-- Get the discription of the crime
SELECT description
FROM crime_scene_reports
WHERE year = 2024
AND month = 7
AND day = 28
AND street = 'Humphrey Street';

-- Bakery was mentioned in the interviews so we narrow down the search
SELECT transcript
FROM interviews
WHERE year = 2024
AND month = 7
AND day = 28
AND transcript LIKE '%bakery%';

-- Find people who were at the bakery at the time of the crime by checking cars' license plates
SELECT people.name
FROM people
JOIN bakery_security_logs ON bakery_security_logs.license_plate = people.license_plate
WHERE bakery_security_logs.year = 2024
AND bakery_security_logs.month = 7
AND bakery_security_logs.day = 28
AND bakery_security_logs.hour = 10
AND bakery_security_logs.minute BETWEEN 15 AND 25;

-- List people who withdrew money from the Leggett Street ATM
SELECT people.name, atm_transactions.transaction_type
FROM people
JOIN bank_accounts ON bank_accounts.person_id = people.id
JOIN atm_transactions ON atm_transactions.account_number = bank_accounts.account_number
WHERE atm_transactions.year = 2024
AND atm_transactions.month = 7
AND atm_transactions.day = 28
AND atm_transactions.atm_location = 'Leggett Street'
AND atm_transactions.transaction_type = 'withdraw';

-- Find all calls on the crime day that lasted less than 60 seconds
SELECT caller, receiver
FROM phone_calls
WHERE year = 2024
AND month = 7
AND day = 28
AND duration < 60;

-- Find the earliest flights on the next day of the crime (29th)
SELECT id, hour, minute, origin_airport_id, destination_airport_id
FROM flights
WHERE year = 2024
AND month = 7
AND day = 29
ORDER BY hour ASC, minute ASC
LIMIT 1;

-- Find all passengers on flight id 36 and display their info and destination
SELECT flights.destination_airport_id, people.name, people.phone_number, people.license_plate
FROM people
JOIN passengers ON passengers.passport_number = people.passport_number
JOIN flights ON flights.id = passengers.flight_id
WHERE flights.id = 36;

-- List names of people who withdrew from the Leggett Street ATM on crime day and appeared in the bakery between 10 and 11 AM
SELECT DISTINCT people.name
FROM people
JOIN bank_accounts ON bank_accounts.person_id = people.id
JOIN atm_transactions ON atm_transactions.account_number = bank_accounts.account_number
JOIN bakery_security_logs ON bakery_security_logs.license_plate = people.license_plate
WHERE atm_transactions.year = 2024
AND atm_transactions.month = 7
AND atm_transactions.day = 28
AND atm_transactions.atm_location = 'Leggett Street'
AND bakery_security_logs.year = 2024
AND bakery_security_logs.month = 7
AND bakery_security_logs.day = 28
AND bakery_security_logs.hour = 10
ORDER BY bakery_security_logs.minute;

-- Find destination city of flight 36
SELECT city
FROM airports
JOIN flights ON flights.destination_airport_id = airports.id
WHERE flights.id = 36;