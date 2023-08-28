task given --- design whiteboard with undo and delete buttons
when user moves the cursor on whiteboard user 
should be able to draw something in the whiteboard
whiteboard should be wrapped into canvas element as it allows user to draw something

when user wants to undo the last action which has been done 
mistakenly ,undo button should perform similar action

when user wants to clear white board completely , delete button should perform 
an action

initially designed the ui similar to given wireframe
with undo and delete button in the top ,followed by whiteboard
which user can draw something 

when user holds the mouse (mousedown event) starts the drawing
mousemove event - draws something in whiteboard
mouseup event / mouseout event - stopdrawing

once he leaves the mouse, drawing will be stopped automatically
this whole process is handled in the event handler process

when user draws something in the whiteboard all the drawing will 
be stored in an variable using push attribute

when the user wants to undo his last action used an function called objects.pop()
so that it removes last drawing which drawn by user

when the user wants to delete the complete action then empty object variable 

hosted url --- 


github repo url -- 

