// Array to store questions and options
const allQuestions = [
    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q1.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0161', correct: true },
            { text: '0184', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q2.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: true },
            { text: '0197', correct: false },
            { text: '0184', correct: false },
            { text: '0204', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q3.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0188', correct: false },
            { text: '0170', correct: true },
            { text: '02016', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q4.jpg', // Replace with actual image path
        options: [
            { text: '0189', correct: false },
            { text: '0196', correct: false },
            { text: '0171', correct: true },
            { text: '0223', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q5.jpg', // Replace with actual image path
        options: [
            { text: '0193', correct: false },
            { text: '0188', correct: false },
            { text: '0184', correct: false },
            { text: '0182', correct: true }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q6.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0161', correct: false },
            { text: '0184', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q7.jpg', // Replace with actual image path
        options: [
            { text: '0189', correct: false },
            { text: '0197', correct: false },
            { text: '0188', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q8.jpg', // Replace with actual image path
        options: [
            { text: '0189', correct: true },
            { text: '0197', correct: false },
            { text: '0188', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q9.jpg', // Replace with actual image path
        options: [
            { text: '0225', correct: false },
            { text: '0171', correct: false },
            { text: '0183', correct: false },
            { text: '0197', correct: true }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q10.jpg', // Replace with actual image path
        options: [
            { text: '0204', correct: true },
            { text: '0225', correct: false },
            { text: '0206', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q11.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: false },
            { text: '0205', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q12.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: false },
            { text: '0206', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q13.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0216', correct: true },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q14.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: true },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q15.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: true },
            { text: '0225', correct: false },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q16.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0224', correct: true },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q17.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0225', correct: true },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q18.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: false },
            { text: '0226', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q19.jpg', // Replace with actual image path
        options: [
            { text: '0227', correct: true },
            { text: '0217', correct: false },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q20.jpg', // Replace with actual image path
        options: [
            { text: '0228', correct: true },
            { text: '0188', correct: false },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q21.jpg', // Replace with actual image path
        options: [
            { text: '0228', correct: false },
            { text: '0188', correct: false },
            { text: '0233', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q22.jpg', // Replace with actual image path
        options: [
            { text: '0248', correct: false },
            { text: '0243', correct: true },
            { text: '0233', correct: false },
            { text: '0171', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q23.jpg', // Replace with actual image path
        options: [
            { text: '0248', correct: false },
            { text: '0183', correct: true },
            { text: '0233', correct: false },
            { text: '0171', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q24.jpg', // Replace with actual image path
        options: [
            { text: '0218', correct: false },
            { text: '0189', correct: false },
            { text: '0207', correct: true },
            { text: '0171', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q25.jpg', // Replace with actual image path
        options: [
            { text: '0208', correct: false },
            { text: '0189', correct: false },
            { text: '0222', correct: true },
            { text: '0171', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q26.jpg', // Replace with actual image path
        options: [
            { text: '0223', correct: true },
            { text: '0189', correct: false },
            { text: '0233', correct: false },
            { text: '0171', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q27.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0193', correct: true },
            { text: '0248', correct: false },
            { text: '0189', correct: true },
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q28.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0230', correct: true },
            { text: '0218', correct: false },
            { text: '0186', correct: false }
        ]
    },

    // Add more questions here
];

const commonQuestions = [
    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q1.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0161', correct: true },
            { text: '0184', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q2.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: true },
            { text: '0197', correct: false },
            { text: '0184', correct: false },
            { text: '0204', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q3.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0188', correct: false },
            { text: '0170', correct: true },
            { text: '02016', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q5.jpg', // Replace with actual image path
        options: [
            { text: '0193', correct: false },
            { text: '0188', correct: false },
            { text: '0184', correct: false },
            { text: '0182', correct: true }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q6.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0161', correct: false },
            { text: '0184', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q7.jpg', // Replace with actual image path
        options: [
            { text: '0189', correct: false },
            { text: '0197', correct: false },
            { text: '0188', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q8.jpg', // Replace with actual image path
        options: [
            { text: '0189', correct: true },
            { text: '0197', correct: false },
            { text: '0188', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q9.jpg', // Replace with actual image path
        options: [
            { text: '0225', correct: false },
            { text: '0171', correct: false },
            { text: '0183', correct: false },
            { text: '0197', correct: true }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q10.jpg', // Replace with actual image path
        options: [
            { text: '0204', correct: true },
            { text: '0225', correct: false },
            { text: '0206', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q11.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: false },
            { text: '0205', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q12.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: false },
            { text: '0206', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q13.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0216', correct: true },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q14.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: true },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q15.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: true },
            { text: '0225', correct: false },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q18.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: false },
            { text: '0226', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q19.jpg', // Replace with actual image path
        options: [
            { text: '0227', correct: true },
            { text: '0217', correct: false },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q20.jpg', // Replace with actual image path
        options: [
            { text: '0228', correct: true },
            { text: '0188', correct: false },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q21.jpg', // Replace with actual image path
        options: [
            { text: '0228', correct: false },
            { text: '0188', correct: false },
            { text: '0233', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q24.jpg', // Replace with actual image path
        options: [
            { text: '0218', correct: false },
            { text: '0189', correct: false },
            { text: '0207', correct: true },
            { text: '0171', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q25.jpg', // Replace with actual image path
        options: [
            { text: '0208', correct: false },
            { text: '0189', correct: false },
            { text: '0222', correct: true },
            { text: '0171', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q26.jpg', // Replace with actual image path
        options: [
            { text: '0223', correct: true },
            { text: '0189', correct: false },
            { text: '0233', correct: false },
            { text: '0171', correct: false }
        ]
    },

    // Add more questions here
];

const mostcommonQuestions = [
    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q1.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0161', correct: true },
            { text: '0184', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q3.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0188', correct: false },
            { text: '0170', correct: true },
            { text: '02016', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q5.jpg', // Replace with actual image path
        options: [
            { text: '0193', correct: false },
            { text: '0188', correct: false },
            { text: '0184', correct: false },
            { text: '0182', correct: true }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q6.jpg', // Replace with actual image path
        options: [
            { text: '0163', correct: false },
            { text: '0161', correct: false },
            { text: '0184', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q7.jpg', // Replace with actual image path
        options: [
            { text: '0189', correct: false },
            { text: '0197', correct: false },
            { text: '0188', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q8.jpg', // Replace with actual image path
        options: [
            { text: '0189', correct: true },
            { text: '0197', correct: false },
            { text: '0188', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q9.jpg', // Replace with actual image path
        options: [
            { text: '0225', correct: false },
            { text: '0171', correct: false },
            { text: '0183', correct: false },
            { text: '0197', correct: true }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q10.jpg', // Replace with actual image path
        options: [
            { text: '0204', correct: true },
            { text: '0225', correct: false },
            { text: '0206', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q11.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: false },
            { text: '0205', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q13.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0216', correct: true },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q14.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: false },
            { text: '0217', correct: true },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q15.jpg', // Replace with actual image path
        options: [
            { text: '0221', correct: true },
            { text: '0225', correct: false },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q20.jpg', // Replace with actual image path
        options: [
            { text: '0228', correct: true },
            { text: '0188', correct: false },
            { text: '0205', correct: false },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q21.jpg', // Replace with actual image path
        options: [
            { text: '0228', correct: false },
            { text: '0188', correct: false },
            { text: '0233', correct: true },
            { text: '0196', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q25.jpg', // Replace with actual image path
        options: [
            { text: '0208', correct: false },
            { text: '0189', correct: false },
            { text: '0222', correct: true },
            { text: '0171', correct: false }
        ]
    },

    {
        image: 'https://raw.githubusercontent.com/rajtanwarGit/AltCodes-Quiz-app/main/q26.jpg', // Replace with actual image path
        options: [
            { text: '0223', correct: true },
            { text: '0189', correct: false },
            { text: '0233', correct: false },
            { text: '0171', correct: false }
        ]
    },

    // Add more questions here
];


let questions = [] ;

// Other variables
let currentQuestion = 0;
let score = 0;
let firstAttempt = true; // Track if it's the first attempt

const menu = document.getElementById('menu');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const playButton = document.getElementById('playButton');
const questionImage = document.getElementById('questionImage');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('nextButton');
const scoreElement = document.getElementById('score');
const levelSelect = document.getElementById('level');


const homeButton = document.getElementById('homeButton');
const restartButton = document.getElementById('restartButton');
const progressBar = document.getElementById('progress');

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]]   
 = [array[j], array[i]];   

  }
}

// Function to shuffle questions
function shuffleQuestions() {
  questions.sort(() => 0.5 - Math.random());
}

// Function to display question
function displayQuestion() {
  let selectedLevel = levelSelect.options[levelSelect.selectedIndex].value;
  if(selectedLevel == 2)
    questions = commonQuestions.slice();
  else if(selectedLevel == 3)
    questions = allQuestions.slice();
  else
    questions = mostcommonQuestions.slice();

  optionsContainer.innerHTML = '';
  
  // Create a heading for the question number
  const questionNumberHeading = document.createElement('h3');
  questionNumberHeading.textContent = `Question ${currentQuestion + 1}`;
  optionsContainer.appendChild(questionNumberHeading);

  questionImage.src = questions[currentQuestion].image;
  firstAttempt = true; // Reset first attempt for each question

  // Shuffle options for this question
  const shuffledOptions = [...questions[currentQuestion].options];
  shuffleArray(shuffledOptions);

  shuffledOptions.forEach((option, index) => {
    const optionButton = document.createElement('button');
    optionButton.textContent = "Alt + " + option.text;
    optionButton.dataset.correct   
 = option.correct;
    optionButton.addEventListener('click', checkAnswer);
    optionsContainer.appendChild(optionButton);
  });

  progressBar.style.width = `${(currentQuestion + 1) / 10 * 100}%`;
}

// Function to check answer
function checkAnswer(event) {
  const selectedOption = event.target;
  const isCorrect = selectedOption.dataset.correct === 'true';

  selectedOption.style.backgroundColor = isCorrect ? 'green' : 'red';

  if (isCorrect) {
    selectedOption.classList.add('correct-animation');
    if (firstAttempt) {
      score++; // Increment the score only on the first correct attempt
    }
  }

  if (firstAttempt) {
    if (!isCorrect) {
      // Display the correct answer below the next button
      const correctAnswer = questions[currentQuestion].options.find(option => option.correct);
      const correctAnswerElement = document.createElement('p');
      correctAnswerElement.textContent = `Correct answer: Alt + ${correctAnswer.text}`;

      // Center the correctAnswerElement horizontally
      correctAnswerElement.style.position = 'absolute';
      correctAnswerElement.style.left = '50%';
      correctAnswerElement.style.transform = 'translate(-50%)';

      // Position it below the next button (assuming nextButton has some height)
      correctAnswerElement.style.top = `${nextButton.offsetTop + nextButton.offsetHeight}px`;

      optionsContainer.appendChild(correctAnswerElement);
    }
    firstAttempt = false;
  }

  nextButton.classList.remove('hidden');
}

// Function to display next question or result
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < 10) {
    displayQuestion();
  } else {
    displayResult();
  }
}

// Function to display result
function displayResult() {
  quiz.classList.add('hidden');
  result.classList.remove('hidden');
  scoreElement.textContent = `Score: ${score}/10`;
}

// Event listeners
playButton.addEventListener('click', () => {
  menu.classList.add('hidden');
  quiz.classList.remove('hidden');
  shuffleQuestions();
  displayQuestion();
});

nextButton.addEventListener('click', nextQuestion);

homeButton.addEventListener('click', () => {
  result.classList.add('hidden');
  menu.classList.remove('hidden');
  currentQuestion = 0;
  score = 0;
});

restartButton.addEventListener('click', () => {
  result.classList.add('hidden');
  quiz.classList.remove('hidden');
  shuffleQuestions();
  currentQuestion = 0;
  score = 0;
  progressBar.style.width = '0%'; // Reset progress bar
  displayQuestion(); // Call displayQuestion to recreate options
});
