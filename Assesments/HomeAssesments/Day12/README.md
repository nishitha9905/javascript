-Task given is to based on the characters entered by user total characters and remaining characters to be entered should be updating
-the text field can accept only max of 50 characters
-textarea element has restricted with max of 50 characters
-intially ui has been designed with the elements such as text area 
-and two span element to show remaining characters and total characters
-with the help of dom manipulation all the elements has been updated in the span elements based on characters entered
-for every new key pressed from the keyboard eventlistner keyup is used and called a function called updatecounter and in the function the whole process of calculating the characters is being done
total characters is updated with the textarea(Id of the textarea).value.length
remaining characters is updated with the 
textarea(id of the textarea).getAttribute("maxLength") - textarea(id of the textarea).value.length

github repo link -- https://github.com/nishitha9905/javascript/blob/main/Assesments/HomeAssesments/Day12/Day12.html



hosted link -- https://nishitha9905.github.io/javascript/Assesments/HomeAssesments/Day12/Day12.html