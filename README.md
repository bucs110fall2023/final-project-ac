[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12803268&assignment_repo_type=AssignmentRepo)
:warning: Everything between << >> needs to be replaced (remove << >> after replacing)

# Personality Quiz
## CS110 Final Project Sem. 1 2023

## Team Members

Chelsea Oliveira, Adriana Mavila

*** 


## Project Description

It is a quiz based on silly BuzzFeed quizzes. It's a personality quiz based on personal choices/interests and you must choose which option you prefer the most. The screen will change to the next with the help of an arrow key or a next button at the bottom of the screen when pressed, all the options will be functional, the user's choices are tallied and results will be given at the end.

***

## GUI Design

### Initial Design

![initial gui](assets/gui.jpg)

### Final Design

![final gui](assets/finalgui.jpg)

## Program Design

### Features

1. Next Arrow
2. Start Screen
3. Results Page
4. Animated Background
5. Loading Screen

### Classes
- class Question: represents singular quiz questions and contains attributes to form the texts for questions and answer choices.
- class Quiz: represents a set of questions and contains a method to add new questions and run the quiz.
-  run_quiz: a method that asks the player each question, takes the user's input, and adds up their total score.

## ATP
Test Case 1: Quiz Navigation
- Test Description: Verify that the user is able to move between quiz pages using the 'next' button.
- Test Steps:
    1. Open the homepage.
    2. Press 'Quiz page' to start the quiz.
    3. Press the 'next' button present on each of the fifteen quiz question pages.
- Expected Outcome: The user should be able to move between the fifteen quiz pages by pressing the 'next' button.

Test Case 2: Menu Navigation
- Test Description: Evaluate the navigation within the main menu of the quiz pages.
- Test Steps: 
    1. Open the homepage.
    2. Navigate the choices in the main menu ('Quiz page','Next','Return Home','Go to the Result's Page!'Restart!', and other answer choices)
    3. Confirm that every option is clickable and directs to the intended actions.
- Expected Outcome: The primary menu should enable players to explore various options and make selections.

Test Case 3: Quiz Use
- Test Description: Confirms that the quiz options are able to be selected and that images are present for all options.
- Test Steps:
    1. Select 'Quiz Page' link on the start page menu.
    2. Select one answer choice per question.
    3. Observe if there is one image present per option.
    4. Play through all fifteen questions until the end.
    5. Repeat steps until all answer choices have been selected at least once.
- Expected Outcome: All the answer choices should be selectable and there should be an image for every choice.

Test Case 4: Results Handling
- Test Description: Ensures that the program is keeping track of a user's choices and tallies them up to return one of five messages depending on their choices.
- Test Steps:
    1. Select 'Quiz Page' link on the start page menu.
    2. Play through the entire quiz, selecting one answer choice per question without skipping any.
    3. Select the 'Go to the Result's Page' link when finished.
    4. Wait through the loading screen for the results.
    5. Observe if the result screen has a title other than "RESULT".
- Expected Outcome: After finishing the quiz, the results screen displays an outcome starting with "Your Personality Is: " and NOT just "RESULT", which is just filler.

Test Case 5: Quiz Restart Condition
- Test Description: Ensure that the user is able to restart the quiz and return to the first question after receiving their result.
- Test Steps:
    1. Select 'Quiz Page' link on the start page menu.
    2. Play through the entire quiz, selecting one answer choice per question.
    3. Go to results page after last question.
    4. Click 'Restart!'
- Expected Outcome: After receiving the quiz results, the user should be able to restart the quiz and return to the first question by pressing the 'Restart!' button.

Test Case 6: Loading Screen
- Test Description: Verifies that the loading screen that appears at the end of the quiz functions properly.
- Test Steps:
    1.  Select 'Quiz Page' link on the start page menu.
    2. Play through the entire quiz, selecting one answer choice per question.
    3. Go to results page after last question.
    4. Observe if there is a loading screen that turns in a circle with the text "Loading..." above it.
- Expected Outcome: The loading screen turns for five seconds before releasing the quiz results. The centered text displaying "Loading..." is above it.