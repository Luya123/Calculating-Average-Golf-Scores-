
    var score1 = Number(prompt("Enter Golf Scores: ")); //prompt asks a user to enter a value 
    var score2 =Number(prompt("Enter Golf Scores: "));  //Number() to convert a string to numbers so that wont concatinate when adding
    var score3 = Number(prompt("Enter Golf Scores: ")); 
    var score4 = Number(prompt("Enter Golf Scores: ")); 
    var score5 = Number(prompt("Enter Golf Scores: ")); 
    var score6 = Number(prompt("Enter Golf Scores: ")); 
    var score7 = Number(prompt("Enter Golf Scores: ")); 
    var score8 = Number(prompt("Enter Golf Scores: ")); 
    var score9 = Number(prompt("Enter Golf Scores: ")); 
    var score10 = Number(prompt("Enter Golf Scores: ")); 

//adds all the values and displays it as an array     
document.write("Golf Scores: " + "["+score1+ "] " + "["+score2+ "] "  + "["+score3+ "] " + "["+score4+ "] " + 
"["+score5+ "] "  + "["+score6+ "] " + "["+score7+ "] " + "["+score8+ "] "  + "["+score9+ "] " + "["+score10+ "] " + '<br>');

//calculating the average of a sum
var sum = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10; 
var average = sum/10;

//displaying the average 
document.write("Average: " +average);