# Data Munging Kata

This Kata has been duplicated with kind permission from [Dave Thomas](https://pragdave.me/) (@PragDave) over at http://codekata.com/kata/kata04-data-munging/

There are three parts to this Kata that work with real world data. Try hard not to read ahead — do each part in turn.


## Part One: Weather Data
In [weather.dat](weather.dat) you’ll find daily weather data for Morristown, NJ for June 2002. 
Download this text file, and write some code to:
* output the minimum, maximum and avg temperatures for each day (hint: first four columns)
* find the warmest day in the month
* find the coolest day in the month
* determine and output the day number (column one) with the smallest temperature difference (the maximum temperature is the second column, the minimum the third column)
* bonus: show a graph that plots the average temperature through the month

## Part Two: Soccer League Table
The file [football.dat](football.dat) contains the results from the English Premier League for 2001/2. The columns labeled ‘F’ and ‘A’ contain the total number of goals scored for and against each team in that season (so Arsenal scored 79 goals against opponents, and had 36 goals scored against them). Write a program to print the name of the team with the smallest difference in ‘for’ and ‘against’ goals.

## Part Three: DRY Fusion
Take the two programs written previously and factor out as much common code as possible, leaving you with two smaller programs and some kind of shared functionality.

## Kata Questions
* To what extent did the design decisions you made when writing the original programs make it easier or harder to factor out common code?

* Was the way you wrote the second program influenced by writing the first?

* Is factoring out as much common code as possible always a good thing? Did the readability of the programs suffer because of this requirement? How about the maintainability?
