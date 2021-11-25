#Etch-a-Sketch
https://j-boardman.github.io/sketcher/
- Made as a part of The Odin Project Fundamentals course.

To-Do:

4. (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse to change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes if the square completel black.

Completed:
    
1. Create a webpage with a 16x16 grid of square divs.
    1. Create the divs using JS.
    2. Create divs within a container div in HTML.

2. Set up a hover effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) tailer through your grid like a pen would.
    1. Hovering is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.

    2. There are multiple ways to change the color of the divs, including: 
        1. adding a new class to the div.
        2. changing the div's background color using JS.

3. Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated *in the same total space as before* (e.g. 960px wide) so that you've got a new sketch pad. TIP: Set a limit for the user input to a maximum of 100.
    1. Research button tags in HTML, and how you can make a JS function when one is clicked.
    2. Also check out prompts.
    3. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
