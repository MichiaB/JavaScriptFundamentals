# SBA JavaScript Fundamentals 

## Description
This is an assessment to gauge my understand of fundamental JavaScript concepts,
and my ability to apply these concepts in a practical manner. I have created a script
that gathers data, processes it, and then outputs a consistent result as described by a
specification. 

## Features

    the ID of the learner for which this data has been collected

    "id": number,

     the learner’s total, weighted average, in which assignments

     with more points_possible should be counted for more

     e.g. a learner with 50/100 on one assignment and 190/200 on another

     would have a weighted average score of 240/300 = 80%.

    "avg": number,

     each assignment should have a key with its ID,

     and the value associated with it should be the percentage that

     the learner scored on the assignment (submission.score / points_possible)

    <assignment_id>: number,

     if an assignment is not yet due, it should not be included in either

     the average or the keyed dictionary of scores

## Technologies Used
- JavaScript

## Author
Michia-Gaye Padilla