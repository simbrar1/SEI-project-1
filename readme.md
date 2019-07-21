# SEI-PROJECT 1 - SNAKE, The Lion King Edition

## Goal
The goal was to create the game 'Snake' within a given time frame of 7 days using JavaScript.

## Controls
SNAKE movements:
← ↑ → ↓ keys

Technologies Used
* JavaScript (ES6)
* CSS + CSS Animation
* HTML + HTML Audio
* Google Fonts
* GitHub

## SNAKE - walk through
It opens with the home page where you are greeted with the instructions of the game.
<img src="./assets/shot1.png" />

Once you have read the instructions you can start to play.
<img src="./assets/shot2.png" />
Try to eat as much 'food' as possible to make the snake grow in length. Every food item you eat you gain a point, which is the main aim of the game.

<img src="./assets/shot8.png" />
If you crash into your own body or the sides of the grid it will be game over and the option to play again will appear.

## Approach
The first step of my approach was to produce a classic game in which I could put my own spin on it. I then came up with the idea to create Snake but with a theme of The Lion King. Firstly I created a basic grid of a width of 10 squares. This was required so that the snake has a basic outline of where the limits are. The next step was to make the snakes head move using the arrow keys. I found the best way to do this was to make a switch statement defining the direction with the arrow keys. 

Next was for the food to appear on the board and once the snake eats it, the food will then generate again at random with a different image. Next was for the snake to increase in size everytime it ate food. I used the method of unshift, which then increased the body of the snake.



## Challenges
I found the approach on how to make the snake longer every time it eats the food. This took a few trial and errors until I found the best way was to unshift.

## Wins
- styling and audio really help put my own spin on the game, as it is still Snake but with a twist.
- completing the game to a high standard within a specified timeframe

## Future Features
The first thing I would would work on would be to make the game responsive to mobile devices. The next feature would be to add in a high score system where the game remembers what the highest score achieved was.

Play my snake here: https://simbrar1.github.io/SEI-project-1/
