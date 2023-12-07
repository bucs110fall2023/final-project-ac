 var OpennessScore = 0; // Store the Openness score
 var ConscientiousnessScore = 0; // Store the Conscientiousness score
 var ExtroversionScore = 0 ; // Store the Extroversion score
 var AgreeablenessScore = 0; // Store the Agreeableness score
 var NeuroticismScore = 0 ; // Store the Neuroticism score
 var questionCount = 0; //store the number of questions clicked on
 
 ///////prof////////
var next = document.getElementById("next")
next.addEventListener('click', (e) => {
  e.preventDefault()
  fetch(`$(next.href)?`, OpennessScore, ConscientiousnessScore, ExtroversionScore, AgreeablenessScore, NeuroticismScore, questionCount)
}

)
//////////////
 


//  var result = document.getElementById("result");
 
//  var restart = document.getElementById("restart");
 
//  var q1a1 = document.getElementById("q1a1");
//  var q1a2 = document.getElementById("q1a2");
 
//  var q2a1 = document.getElementById("q2a1");
//  var q2a2 = document.getElementById("q2a2");
 
//  var q3a1 = document.getElementById("q3a1");
//  var q3a2 = document.getElementById("q3a2");

//  var q4a1 = document.getElementById("q4a1");
//  var q4a2 = document.getElementById("q4a2");

//  var q5a1 = document.getElementById("q5a1");
//  var q5a2 = document.getElementById("q5a2");

//  var q6a1 = document.getElementById("q6a1");
//  var q6a2 = document.getElementById("q6a2");

//  var q7a1 = document.getElementById("q7a1");
//  var q7a2 = document.getElementById("q7a2");

//  var q8a1 = document.getElementById("q8a1");
//  var q8a2 = document.getElementById("q8a2");

//  var q9a1 = document.getElementById("q9a1");
//  var q9a2 = document.getElementById("q9a2");

//  var q10a1 = document.getElementById("q10a1");
//  var q10a2 = document.getElementById("q10a2");

//  var q11a1 = document.getElementById("q11a1");
//  var q11a2 = document.getElementById("q11a2");

//  var q12a1 = document.getElementById("q12a1");
//  var q12a2 = document.getElementById("q12a2");

//  var q13a1 = document.getElementById("q13a1");
//  var q13a2 = document.getElementById("q13a2");

//  var q14a1 = document.getElementById("q14a1");
//  var q14a2 = document.getElementById("q14a2");

//  var q15a1 = document.getElementById("q15a1");
//  var q15a2 = document.getElementById("q15a2");

 
//  q1a1.addEventListener("click", Openness);
//  q1a2.addEventListener("click", Conscientiousness);
//  q1a3.addEventListener("click", Extroversion);
//  q1a4.addEventListener("click", Agreeableness);
//  q1a5.addEventListener("click", Neuroticism);
 
//  q2a1.addEventListener("click", Openness);
//  q2a2.addEventListener("click", Conscientiousness);
//  q2a3.addEventListener("click", Extroversion);
//  q2a4.addEventListener("click", Agreeableness);
//  q2a5.addEventListener("click", Neuroticism);
 
//  q3a1.addEventListener("click", Openness);
//  q3a2.addEventListener("click", Conscientiousness);
//  q3a3.addEventListener("click", Extroversion);
//  q3a4.addEventListener("click", Agreeableness);
//  q3a5.addEventListener("click", Neuroticism);

//  q4a1.addEventListener("click", Openness);
//  q4a2.addEventListener("click", Conscientiousness);
//  q4a3.addEventListener("click", Extroversion);
//  q4a4.addEventListener("click", Agreeableness);
//  q4a5.addEventListener("click", Neuroticism);

//  q5a1.addEventListener("click", Openness);
//  q5a2.addEventListener("click", Conscientiousness);
//  q5a3.addEventListener("click", Extroversion);
//  q5a4.addEventListener("click", Agreeableness);
//  q5a5.addEventListener("click", Neuroticism);

//  q6a1.addEventListener("click", Openness);
//  q6a2.addEventListener("click", Conscientiousness);
//  q6a3.addEventListener("click", Extroversion);
//  q6a4.addEventListener("click", Agreeableness);
//  q6a5.addEventListener("click", Neuroticism);

//  q7a1.addEventListener("click", Openness);
//  q7a2.addEventListener("click", Conscientiousness);
//  q7a3.addEventListener("click", Extroversion);
//  q7a4.addEventListener("click", Agreeableness);
//  q7a5.addEventListener("click", Neuroticism);

//  q8a1.addEventListener("click", Openness);
//  q8a2.addEventListener("click", Conscientiousness);
//  q8a3.addEventListener("click", Extroversion);
//  q8a4.addEventListener("click", Agreeableness);
//  q8a5.addEventListener("click", Neuroticism);

//  q9a1.addEventListener("click", Openness);
//  q9a2.addEventListener("click", Conscientiousness);
//  q9a3.addEventListener("click", Extroversion);
//  q9a4.addEventListener("click", Agreeableness);
//  q9a5.addEventListener("click", Neuroticism);

//  q10a1.addEventListener("click", Openness);
//  q10a2.addEventListener("click", Conscientiousness);
//  q10a3.addEventListener("click", Extroversion);
//  q10a4.addEventListener("click", Agreeableness);
//  q10a5.addEventListener("click", Neuroticism);

//  q11a1.addEventListener("click", Openness);
//  q11a2.addEventListener("click", Conscientiousness);
//  q11a3.addEventListener("click", Extroversion);
//  q11a4.addEventListener("click", Agreeableness);
//  q11a5.addEventListener("click", Neuroticism);

//  q12a1.addEventListener("click", Openness);
//  q12a2.addEventListener("click", Conscientiousness);
//  q12a3.addEventListener("click", Extroversion);
//  q12a4.addEventListener("click", Agreeableness);
//  q12a5.addEventListener("click", Neuroticism);

//  q13a1.addEventListener("click", Openness);
//  q13a2.addEventListener("click", Conscientiousness);
//  q13a3.addEventListener("click", Extroversion);
//  q13a4.addEventListener("click", Agreeableness);
//  q13a5.addEventListener("click", Neuroticism);
 
//  q14a1.addEventListener("click", Openness);
//  q14a2.addEventListener("click", Conscientiousness);
//  q14a3.addEventListener("click", Extroversion);
//  q14a4.addEventListener("click", Agreeableness);
//  q14a5.addEventListener("click", Neuroticism);

//  q15a1.addEventListener("click", Openness);
//  q15a2.addEventListener("click", Conscientiousness);
//  q15a3.addEventListener("click", Extroversion);
//  q15a4.addEventListener("click", Agreeableness);
//  q15a5.addEventListener("click", Neuroticism);
 
   //listen for click on restart button and call function if clicked
 restart.addEventListener("click", restartQuiz);
 
 //track Openness score and see ifc quiz is complete
 function Openness() {
    OpennessScore += 1;
    questionCount += 1;
 
   console.log("questionCount = " + questionCount + "\t" + "OpennessScore = " + OpennessScore); 
 
 if (questionCount == 3) {
   console.log("The quiz is done!") 
 updateResult();
   }
   
 }
 
  //track Conscientiousness score and check if quiz is complete
 function Conscientiousness() {
    ConscientiousnessScore += 1;
   questionCount +=1;
 
   console.log("questionCount = " + questionCount + "\t" + "ConscientiousnessScore = " + ConscientiousnessScore);
 
   if (questionCount == 3) {
     console.log("The quiz is done!")
     updateResult();
   }
   
 }

 //track Extroversion score and see if quiz is complete
 function Extroversion() {
    ExtroversionScore += 1;
    questionCount += 1;
  
    console.log("questionCount = " + questionCount + "\t" + "ExtroversionScore = " + ExtroversionScore); 
  
  if (questionCount == 3) {
    console.log("The quiz is done!") 
  updateResult();
    }
    
  }

  //track Agreeableness score and see if quiz is complete
 function Agreeableness() {
    AgreeablenessScore += 1;
    questionCount += 1;
  
    console.log("questionCount = " + questionCount + "\t" + "AgreeablenessScore = " + AgreeablenessScore); 
  
  if (questionCount == 3) {
    console.log("The quiz is done!") 
  updateResult();
    }
    
  }

  //track Neuroticism score and see if quiz is complete
 function Neuroticism() {
    NeuroticismScore += 1;
    questionCount += 1;
  
    console.log("questionCount = " + questionCount + "\t" + "NeuroticismScore = " + NeuroticismScore); 
  
  if (questionCount == 3) {
    console.log("The quiz is done!") 
  updateResult();
    }
    
  }
 
 //update quiz result
 function updateResult() {
   if (OpennessScore >= 4) {
     result.innerHTML = "Your personality is: The Detective!";
     console.log("Your personality is: The Detective!")
   } else if (ConscientiousnessScore >= 4) {
     result.innerHTML = "Your personality is: The Road Warrior!";
     console.log("Your personality is: The Road Warrior!")
    } else if (ExtroversionScore >= 4) {
        result.innerHTML = "Your personality is: The Networker!";
        console.log("Your personality is: The Networker!")
    } else if (AgreeablenessScore >= 4) {
        result.innerHTML = "Your personality is: The Problem Solver!";
        console.log("Your personality is: The Problem Solver!")
    } else if (NeuroticismScore >= 4) {
        result.innerHTML = "Your personality is: The Expressionist!";
        console.log("Your personality is: The Expressionist!")
        }
   }
 
 //Restart quiz
 function restartQuiz() {
   result.innerHTML = "You are a... *drumroll*";
   questionCount = 0;
   OpennessScore = 0;
   ConscientiousnessScore = 0;
   ExtroversionScore = 0;
   AgreeablenessScore = 0 ;
   NeuroticismScore = 0;

   console.log("questionCount = " + questionCount + "\t" + "OpennessScore = " + OpennessScore + "\t" + "ConscientiousnessScore = " + ConscientiousnessScore + "\t"+ "ExtroversionScore = " + ExtroversionScore + "\t" + "AgreeablenessScore = " + AgreeablenessScore + "\t" + "NeuroticismScore = " + NeuroticismScore + "\t" );
 }