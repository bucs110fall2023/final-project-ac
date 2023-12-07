// Load result text from external data file
const resultsData = await fetch('results-text.json').then(res => res.json()); 

try {
  // Initialize trait scores in localStorage if not present
  const traitScoresKey = 'traitScores';
  if (!localStorage.getItem(traitScoresKey)) {
    const initialScores = {
      Openness: 0,
      Conscientiousness: 0, 
      Extroversion: 0,
      Agreeableness: 0,
      Neuroticism: 0,
      questionCount: 0
    };
    localStorage.setItem(traitScoresKey, JSON.stringify(initialScores));
  }

  // Calculate final personality result
  function calculatePersonalityResult() {
    const scores = JSON.parse(localStorage.getItem(traitScoresKey));
  
    const totalScore = Object.values(scores).slice(0,5).reduce((a, b) => a + b, 0);
    
    let personalityResult = '';

    // Determine result text based on score thresholds
    if (totalScore >= 18) {
      personalityResult = resultsData.detective; 
    } else if (totalScore >= 15) {
       personalityResult = resultsData.roadWarrior;
    } else if (totalScore >= 10) {
       personalityResult = resultsData.networker;
    } else if (totalScore >= 6) {
       personalityResult = resultsData.problemSolver;
    } else {
       personalityResult = resultsData.expressionist;
    }

    document.getElementById('result').textContent = personalityResult;
  }

  // Update trait score and question count
  function updateScore(trait, value) {
    const scores = JSON.parse(localStorage.getItem(traitScoresKey));
    scores[trait] += parseInt(value); 
    scores.questionCount++;
    localStorage.setItem(traitScoresKey, JSON.stringify(scores));
  }

  // Handle answer button click
  function handleAnswerClick(event) {
    const value = event.target.dataset.value;
    const trait = event.closest('.question').dataset.trait;
    updateScore(trait, value);
    event.target.parentElement.classList.add('answered'); 
  }

  // Attach click handler to answer buttons
  document.querySelectorAll('.answer-choice button').forEach(button => {
    button.addEventListener('click', handleAnswerClick);
  });

  // Calculate result when next is clicked
  document.getElementById('next').addEventListener('click', () => {
    if (document.querySelectorAll('.answer-choice:not(.answered)').length === 0) {
      calculatePersonalityResult();
    }
  });

  // Initialize result
  calculatePersonalityResult();

} catch (err) {
  // Gracefully handle errors
  console.error(err);
  document.getElementById('result').textContent = 'Unable to calculate result';
}