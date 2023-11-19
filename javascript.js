/*Add your JavaScript here*/

 var coffeeScore = 0; // Store the coffee score
 var teaScore = 0 ; // Store the tea score
 
 var questionCount = 0; //store the number of questions clicked on
 
 //store html elements using the dom
 var result = document.getElementById("result");//PART 5/5
 
 var restart = document.getElementById("restart");
 
 var q1a1 = document.getElementById("q1a1");
 var q1a2 = document.getElementById("q1a2");
 
 var q2a1 = document.getElementById("q2a1");
 var q2a2 = document.getElementById("q2a2");
 
 var q3a1 = document.getElementById("q3a1");
 var q3a2 = document.getElementById("q3a2");
 
 //listen for click on answer buttons and call function if clicked
 q1a1.addEventListener("click", coffee);
 q1a2.addEventListener("click", tea);
 
 q2a1.addEventListener("click", coffee);
 q2a2.addEventListener("click", tea);
 
 q3a1.addEventListener("click", coffee);
 q3a2.addEventListener("click", tea);
 
   //listen for click on restart button and call function if clicked
 restart.addEventListener("click", restartQuiz);
 
 //track coffee score and see if quiz is complete
 function coffee() {
   coffeeScore += 1;
   questionCount += 1;
 
   console.log("questionCount = " + questionCount + "\t" + "coffeeScore = " + coffeeScore); 
 
 if (questionCount == 3) { //PART 5
   console.log("The quiz is done!") 
 updateResult();
   }
   
 }
 
  //track tea score and check if quiz is complete
 function tea() {
   teaScore += 1;
   questionCount +=1;
 
   console.log("questionCount = " + questionCount + "\t" + "teaScore = " + teaScore);
 
   if (questionCount == 3) {
     console.log("The quiz is done!")
     updateResult();
   }
   
 }
 
 //update quiz result
 function updateResult() {
   if (coffeeScore >= 2) {
     result.innerHTML = "You are a coffee drinker!";
     console.log("You are a coffee drinker!")
   } else if (teaScore >= 2) {
     result.innerHTML = "You are a tea drinker!";
     console.log("You are a tea drinker!")
     }
   }
 
 //Restart quiz
 function restartQuiz() {
   result.innerHTML = "You are a... *drumroll*";
   questionCount = 0;
   coffeeScore = 0;
   teaScore = 0;
   console.log("questionCount = " + questionCount + "\t" + "teaScore = " + teaScore + "\t" + "coffeeScore = " +coffeeScore);
 }
 
