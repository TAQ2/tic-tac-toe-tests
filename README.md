# tic-tac-toe

## requirements

### page load

i expect to see a title
and a board
and a button
and a message

### start game

Given I load the page
When i click on the start button
and i click on a tile
Then I expect the tile to be labelled X

### player 2 can take a turn

Given player one takes a turn
When i click on an empty tile
Then i expect the tile to be labelled O

### game can be reset at any time

Given player one takes a turn
When i click on restart button
Then i expect the board to be empty

### game ends

Given a player wins the game
Then i expect to see a winning line
and clicking on an empty tile has no effect
