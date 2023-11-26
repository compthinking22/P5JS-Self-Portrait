NARRATIVE

Imagine you are a tree.
As you move the mouse, your leaves change.
As you click the mouse, your leaves fall.
With each click of the mouse, more leaves fall --
Until the branches are bare.
Things seem as if they'll never change.
But it isn't over, is it?
With one more click of the mouse, the leaves are back,
and the cycle starts again.

  On the opening screen, I have the word "Abscission" along with it's botanical definition. Once 
the screen fades, the user is given directions on what to do-- keys "A", "S", and "D" change 
the colors of the sky, the mouse changes the colors of the leaves (healthy leaves to dark 
brown means weathering trees) and then clicks of the mouse to drop the leaves. This project is
a visual representation of Abscission. This project is also a visual representation of the 
dying/aging of the old self to bring upon the new self -- which usually (or hopefully) brings 
upon new/happy beginnings. This is my self portrait because I've gone through difficult things 
in my life and to overcome the emotions and pain that they've caused me, the "dying" of my old 
self happened -- routine changes, thought pattern changes, how I appreciate things, and many 
other things that are overall positive that make me who I am today. However, just like the 
visual representation, those old habits, thoughts, and feelings can come again and make it
feel as though that you want to escape or that things are over... But, if you push yourself one 
last time -- the click of a button -- beauty and happiness will come out of it again. 

  I really like how my project turned out, and although it's pretty simple to mess with, I'm glad 
that I was able to create something that holds a lot of meaning to me. I hope this description 
is understandable enough, and I hope that after reading it, it makes things seem just a bit
easier for you.

(On a side note, I also really like plants, the sky, and the clouds. They've helped me through 
my toughest times and even though some of them died, they still came back and showedtheir beauty.) 
--------------------------------------------------------------------------------------------------

  The idea I had for this project was something meditative – the original idea was to make clouds 
moving but I saw some scary examples and saw how difficult that was. I felt really defeated as
clouds were really important to me, but after a few days of thinking I got the idea to do trees. 
I was really happy about this idea as it is interactive (mouse movement to change colors of the 
tree leaves and mouse clicking to “drop”). Clearly, I was able to do that and more! I knew that
this new idea would be better and would actually work the way I wanted it to because of the 
examples I saw online. 

  Before the first Milestone, I created the background, the ground, and then the first layer of 
circles (my canvas started at 800x600). This was the easiest part. I then started positioning 
the circles (which took a while for me to figure out how to do). After this, I created the 
first color changing layer and then applied that to more arrays of circles – at this point, I 
started having issues having the colors change the way I wanted them too (it was a really 
stupid number in an equation that needed to be changed). I used chat gpt at this point to help 
me understand what was wrong and it made everything so much worse. I was struggling for 5 days 
until a teacher from work was like “it has to be something with the positioning/length of 
something” – low and behold, it was and I was so annoyed that I was that blinded for a week. 
I was incredibly mind blown. After this, I enlarged my canvas to be windowWidth x windowHeight
and had the very tedious task of rearranging the circles to be in the positions I wanted them to
be in – mind you, I only had one “half-tree” (aka just leaves) and random circles in random placement. 
Finally, I started doing some research on how to make trees and ended up finding a code online. 
By the first Milestone, I have 1 complete tree, the color changing leaves, the ground,
a background, and random tree trunks/branches and color changing circles around.

  Before the second Milestone, I was able to create more working circles, and I moved the tree 
trunks/branches to where I wanted them to be – I had my project mostly down! At the time, I 
only had one background color so I decided to try to make a keyPressed function to be able to
change the background – this was pretty easy… I had some issues with the background 
overlaying the trees, but with the help of the professor we figured out that it was just 
being called in the wrong spot. After this, he also helped me figure out my issues with the 
mousePressed – we basically did a manual “loop” (I actually would’ve never thought about the 
idea he gave but it worked great!!). The day after the Second Milestone, the visual portion of 
my project was fully complete!

  Milestone 2 Advice from Professor: The professor pointed out to me that the circles were displaying
in their positions, just on the wrong spots due to his machine resolution being different. Because 
the professor mentioned the positioning of the circles, I thought I had to change something with 
those. I went to chat gpt for advice since, like I mentioned, I did not know how to approach this. 
After messing with some code that it gave me, nothing worked. My husband sat with me for a bit and 
mentioned that I should change the canvas dimensions to fit the screen – after messing with that 
and inspecting my browser, we had the idea to use the browser dimensions so that no matter the 
resolution, everything would be the same! When I have an issue I always have trouble thinking outside 
the box to fix it, very happy that I could fix this issue!!

  Throughout the project I had tons of simple mistakes and eureka moments once I figured them out.
Honestly, each step of my project was a eureka moment but I will name a few key moments – figuring 
out the array for the x and y coordinates for the circles, how to make them change color the way I 
need to (also making certain things into global variables), understanding the recursion 
function that I found for the trees, and picking specific colors for the project (sounds very 
simple, but it’s definitely not!). Some of the problems that I had before the eureka moments was
when the circles were “stuck” at one color instead of transitioning the way I wanted them to (I 
forget exactly what caused that specific issues, but it had to do with the equation that I had an
the overall function I created for the color changing). I also had problems with the mouse click
and background layering over the circles – these were easy fixes (thanks, professor!). The most
frustrating thing was figuring out the color transitioning with the circles and also the very
tedious positioning of them (it was HORRIBLE – But, very satisfying once I got them in the right
spots). When I was having trouble, I would use chat gpt to tell me what I was doing wrong in my
code and would use some ideas to help me figure out what I could be doing wrong – it’s easier 
for me to understand what I’m doing wrong if I look at examples and implement little things to 
help my code be better.

--------------------------------------------------------------------------------------------------

PROGRAMMING FUNDAMENTALS

My code definitely demonstrates my basic understanding of javascript – although I did get some help 
from online for some things, I understand EXACTLY what is going on in the code. Since I already have 
a basic understanding of how code works, learning JS wasn’t too difficult.

	VARIABLES AND THEIR TYPES
		- For the first 10 lines of code, I am setting up global variables. I initially didn’t have 
		  this idea at first, but after the first milestone the professor mentioned that I should 
		  set the circles positions as global since they are used through the program. Same with 
		  the state.
		- The topColor and bottomColor are changed in the program with keypress. 
		- I also have functions calling on variables inside my DrawMainscene function. 
		- There’s a billion variables and they all do something, lol!	
    LOOPS
		- I only have two loops throughout the whole program – one for the topColor/bottomColor 
		  gradient, another to output the circles given their x,y coordinates and given color from 
		  array customColors, and another for the drawBackground function used with the keypressed 
		  functions. These functions were mostly easy to create. I used a code from youtube to help 
		  me with my understanding of lerp and map for the first one, the second  one was not too 
		  bad but I initially had it outputting only circles in the beginning before I added the 
		  fillcolor to it. The drawbackground function was also pretty easy. I would say my 
		  understanding of loops is pretty good, loops can be complex and it’s always nice to 
		  finally understand them when they are. I will discuss difficulties I had with one of the 
		  loops in the functions section.

    CONDITIONAL LOGIC
		- Lots of if and if/else statements. My understanding of them is pretty good as well. A group
		 of if statements in my drawMainScene function was used to make a forced “loop” using the 
		 state of the programs – all circles, 2 layers of circles, 1 layer of circles, and no circles 
		 (just calling the drawTree function). I was so surprised that it was as easy as this to make 
		 the circles do what I want them to do! It made so much sense but it’s so hard to come up with 
		 an idea to fix things when your brain is stuck on making it complicated!

    FUNCTIONS, INCLUDING ARGUMENTS AND RETURN VALUES
		- I feel as though that I have a very good understanding of functions. However, sometimes I 
		  don’t always know when to actually create them but for the most part it’s not too bad. My 
		  least favorite functions were calculateColor and drawCirclesWithColors as the logic for them 
		  made me want to give up. I initially was drawing circles first and when I added the colors 
		  it made everything more difficult. But once I got it working I was fine.

			- I have functions at the end of my program: 
					- calculateColor() → 
							- Parameters: colorPostion map(), customColors array
							- calculates the fill color of the circles and uses the lerp function to 
							  interpolate between colors. Returns fillColor
					- drawCirclesWithColors() → 
							- Parameters: circle X positions, circle Y positions, calculated fill color
							- uses the fill color calculated in calculateColor and the x,y positions of 
							  the circles. 
					- mouseClicked() → 
							- Parameters: NONE
							- decrements the state when clicked. Once it equals 0, the state is reverted 
							  back to the original value. This is used in the grouped if statements that 
							  is which is responsible for the “temporary removal” of the circles.
					- drawTree() →
							- Parameters: xCoordinate, yCoordinate, trunkLength, angle, levels(# of 
							  recursions), branchWidth(thickness)
							- recursion function used to output tree trunks and branches. I used 
							  youtube to create this.
					- keyPressed() → 
							- Parameters: NONE
							- using the keys A, S, and D, the RGB values for the global variables topColor 
							  and bottomColor are changed. Returns the RGB values for each color.
					- drawBackground() → 
							- Parameters: topColor, BottomColor
							- used to interpolate between the RGB values for topColor and BottomColor.
