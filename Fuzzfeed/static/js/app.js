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



