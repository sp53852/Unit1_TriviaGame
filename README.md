# Unit 1 project: Self Scoring Trivia
This project is a Trivia game quiz, game to combine programming skills of JavaScript with building out game user interface with HTML and CSS.
Game topic is a combination of wonders of the world and general knowledge. 
Tests user knowledge on the topic. End of the game it provides performance scroe. 
User can replay the game as many times as user wants.

## Technologies Used
- HTML
- CSS
- JavaScript Programming

## Requirements
## Technical Requirements

### Git Repo
GitHub Repository: https://github.com/sp53852/Unit1_TriviaGame
Included separate HTML / CSS / JavaScript files
- `index.html`: Created html structure for TRIVIA game. 
- `style.css`: Created style for html structure. 
- `script.js`: Used JavaScript for defining variables, DOM manipulation, defining and invoking functions. Used 'for' loop and 'if' statements.

### Deployment  
Deployed online, using Github Project Pages
- GitHub Page: https://sp53852.github.io/Unit1_TriviaGame/

## Instructions
Trivia Game topic is a combination of wonders of the world and general knowledge.
This is a 10 questions quiz game. 

- Once user launches the page, game should appear with main page (gameLabel, gameInstructions and play button).
- Once play button activates, game should start and display first question with multiple answers.
Note: Main page is static and should display until all the questions are answered.

- When user selects the answer:
    - System should remove the current question and display next question. 
    - System should increment question count (invisible to user).
    - System should increment answer count if it is corret (invisible to user).
- It should continue to happens until all 10 questions are completed.
    - System should display:
    - Message for next round of game.
    - Calculated result in % for the current game.
    - Try Again button
        - When user selects Try Again button should take user to the main page.