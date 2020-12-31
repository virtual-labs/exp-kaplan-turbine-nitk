
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
const myQuestions = [
  {
    question: "A Kaplan Turbine is",
    answers: {
      a: "High - head mixed flow turbine",
      b: "A low-head axial- flow turbine",
      c: "An outward-flow reaction turbine",
      d: "An inward-flow impulse turbine"
    },
    correctAnswer: "b"
  },

  {
    question: "What is the range of speed ratio Ku for a Kaplan Turbine for its most efficient operation?",
    answers: {
      a: "0.10 to 0.30",
      b: "0.65 to 1.20",
      c: "1.30 to 2.30",
      d: "2.0 to 3.80"
    },
    correctAnswer: "c"
  },

  {
    question: "Velocity of runner of a Kaplan turbine at inlet(V<sub>f1</sub>) and outlet (V<sub>f2</sub>) are",
    answers: {
      a: "V<sub>f1</sub>= V<sub>f2</sub>",
      b: "V<sub>f1</sub> = Maximum, V<sub>f2</sub> = Zero",
      c: "V<sub>f1</sub> &lt; V<sub>f2</sub>",
      d: "V<sub>f1</sub> = Zero,V<sub>f2</sub> = Maximum"
    },
    correctAnswer: "a"
  },
  {
    question: "For low head and high discharge, the hydraulic turbine used is",
    answers: {
      a: "Kaplan turbine",
      b: "Francis turbine",
      c: "Pelton wheel",
      d: "Jonual turbine"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the range of Flow ratio for a Kaplan turbine for its most efficient operation?",
    answers: {
    a: "0.50 to 0.80",
    b: "0.65 to 0.95",
    c: "0.90 to 1.40",
    d: "0.35 to 0.75"
    },
    correctAnswer: "d"
  }
];



// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
