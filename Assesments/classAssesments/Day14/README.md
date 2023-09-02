Task given is to stopwatch with start/stop/reset buttons
with the start button the timer will be started from its initial position
with the stop button the timer will be immediately stopped and displayed with the millisecond values 
when the user clicks on reset button it will be reverted to intial stage of the stop watch with all the values as zero
when the user clicks on the particular then it should be disabled 
such when the timer is been running user should not be able to click on start again
when the timer is been stoped then stop button should be disabled 
when the timer is been started using the setInterval function the timer will be updated for every 10 millisecond intervals
the time will be formated with the help of math.floor operations and will be fetched into respective values 
such as to display hours time formation will be done as follows
Math.floor(elapsedTime / (1000 * 60 * 60))
to display minutes 
Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
to display seconds
Math.floor((elapsedTime % (1000 * 60 )) / (1000 ))
to display milliseconds
Math.floor((elapsedTime % 1000) / 10)

the elapsedTime will be calculated from the current date with the built function Date now() in javascript


github repo url -- https://github.com/nishitha9905/javascript/blob/main/Assesments/classAssesments/Day14/Day14.html



hosted url -- https://nishitha9905.github.io/javascript/Assesments/classAssesments/Day14/Day14.html
