# Tic-Tac-Toe

### Abstract:
This app allows users to play a simple game of tic-tac-toe. Users take turns clicking on the tic-tac-toe board to place their emoji. Users are only allowed to place their emoji in open board positions. If a user attempts to place their emoji in a position that has already been taken, it will remain that user's turn until they successfully place their emoji in an open position. Users can win by placing 3 of their emojis in either a horizontal, vertical, or diagnal row. When a user wins, their score is updated to reflect how many games that player has won. In the event of a tie, the game is declared a draw and neither player's scores increase. After a player wins or the game is declared a draw, a new game starts after a brief pause. The player who didn’t begin the previous game will be the first player to go in the new game. The game displays whose turn it is and the score so users only have to focus on winning!

### Installation Instructions:
- Users should clone the repository to their local machine: git clone 
- Users should `cd` into the repository in their terminal: cd tic-tac-toe
- Users should open the index.html file: open index.html

### Preview of App:
![Loom_Message_-_14_November_2022__1__AdobeExpress (1)](https://user-images.githubusercontent.com/109977562/201789437-58a3e099-b277-4e4e-8a94-40b627a36976.gif)

### Context:
This project was assigned to Mod 1 students in Turing's Front-End Engineering bootcamp. Students were given a week to create a fully functioning tic-tac-toe game and add styling of their choosing using HTML, CSS, and Javascript.

### Contributors:
This project was created by Tristin Sorrells, find my github [here](https://github.com/Tristinsorrells1)

### Learning Goals:
- Solidify and demonstrate understanding of event delegation to handle similar event listeners
- Write DRY JavaScript
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

### Wins + Challenges:
##### Wins
- Compared to the group project, I have a much better understanding of keeping the data model fully seperate from the DOM
- I wrote really DRY CSS

##### Challenges
- I had a really difficult time starting this project. I was struggling to write a method that would check if a player had placed 3 emojis in a row. I initially was storing the player's moves and the winning moves in objects, but once I switched to storing that data in arrays I was able to figure out how to evaluate if a player had won
- It was really challenging for me to figure out the order in which I invoke my methods and functions. It seemed like everytime I changed the order to fix a bug, a new bug popped up
- I spent a lot of time researching and trying to implement local storage before I realized that I could reset the DOM and data model without refreshing the page

### Future Features
- I would like to add a confetti effect when a player has won. I also would like players to be able to choose their own emojis.
