# Student Memory Game

This a memory matching game using teh REact JS library. To start, click a student, then keep clicking different students. Game loss occurs if a student is clicked twice.

Game is deployed to heroku: https://studentmatch-ucb.herokuapp.com/

## Summation
Each student card is rendered from a Json, using their most current github user picture.

Each time a student is clicked on for the first time, it increments that student's clicked count and reshuffles the board. If a student is clicked for the second time, a failstate occurs.

Score is tracked and incremented with each successful new student clicked. Once game fail state is entered, the score evaluates itself against bestscore, and if higher, a new best is set.
