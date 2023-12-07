document.addEventListener('DOMContentLoaded', () => {
  // Initialize trait scores in localStorage if not present
  const traitScoresKey = 'traitScores';
  if (!localStorage.getItem(traitScoresKey)) {
    const traitScores = {
      Openness: 0,
      Conscientiousness: 0,
      Extroversion: 0,
      Agreeableness: 0,
      Neuroticism: 0,
      questionCount: 0
    };
    localStorage.setItem(traitScoresKey, JSON.stringify(traitScores));
  }

  function calculateResult() {
    const storedTraitScores = JSON.parse(localStorage.getItem(traitScoresKey));

    const totalScore = storedTraitScores.Openness + storedTraitScores.Conscientiousness +
        storedTraitScores.Extroversion + storedTraitScores.Agreeableness + storedTraitScores.Neuroticism;

    let finalResult = "";

    if (totalScore >= 18) {
      finalResult = "Your personality is: The Detective!";
    } else if (totalScore >= 15) {
      finalResult = "Your personality is: The Road Warrior!";
    } else if (totalScore >= 10) {
      finalResult = "Your personality is: The Networker!";
    } else if (totalScore >= 6) {
      finalResult = "Your personality is: The Problem Solver!";
    } else {
      finalResult = "Your personality is: The Expressionist!";
    }

    document.getElementById('result').innerHTML = finalResult;
  }

  function updateScore(trait, value) {
    const storedTraitScores = JSON.parse(localStorage.getItem(traitScoresKey));
    storedTraitScores[trait] += parseInt(value);
    storedTraitScores.questionCount += 1;
    localStorage.setItem(traitScoresKey, JSON.stringify(storedTraitScores));
  }

  function handleAnswerClick(event) {
    const answerValue = event.target.dataset.value;
    const trait = event.target.closest('.question').dataset.trait;
    updateScore(trait, answerValue);
    event.target.parentElement.classList.add('answered');
  }

  const answerButtons = document.querySelectorAll('.answer-choice button');
  answerButtons.forEach(button => {
    button.addEventListener('click', handleAnswerClick);
  });

  document.getElementById('next').addEventListener('click', () => {
    const allAnswered = document.querySelectorAll('.answer-choice:not(.answered)').length === 0;
    if (allAnswered) {
      calculateResult();
    }
  });

  // Call calculateResult when the page loads
  calculateResult();
});
