<<<<<<< HEAD
// Store the question sections and the next button
const questionSections = document.querySelectorAll('.question-section');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0; // Track the current question index

// Function to show the current question section
function showQuestion(index) {
  questionSections.forEach((section, idx) => {
    if (idx === index) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Show the first question initially
showQuestion(currentQuestionIndex);

// Event listener for the 'Next' button
nextButton.addEventListener('click', () => {
  // Move to the next question section
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < questionSections.length) {
    showQuestion(currentQuestionIndex);
  } else {
    // If no more questions, redirect to a result page or home screen
    window.location.href = 'result.html'; // Change this to your result page or home screen
  }
});


=======
const container = document.querySelector('.snowflakes');

for (var i = 0; i < 100; i++) {
    let snowDiv = document.createElement("div");
    snowDiv.classList.add("snow");
    snowDiv.style.animation = `snowfall ${Math.floor(Math.random() * 10) + 5}s ${Math.floor(Math.random() * 10)}s linear infinite`;
    snowDiv.style.left = `${Math.floor(Math.random() * 100)}%`;

    container.appendChild(snowDiv); 
}

>>>>>>> 52b1826309dda8f1a9171352413668a84ef2fe2c

