
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
    question: "Kaplan Turbine is preferred a head range of __",
    answers: {
      a: "0-25m",
      b: "25-100m",
      c: "50-200m",
      d: "0-100m"
    },
    correctAnswer: "a"
  },

  {
    question: "A Kaplan Turbine is preferred for a specific speed of 300 to 1000 r.p.m: (Say Yes/No)",
    answers: {
      a: "Yes",
      b: "No"
    },
    correctAnswer: "a"
  },

  {
    question: "Guide angle as per the aerofoil theory of Kaplan Turbine blade design is defined as the angle between",
    answers: {
      a: "Lift and resultant force",
      b: "Drag and resultant force",
      c: "Lift and tangential force",
      d: "Resultant force and tangential force"
    },
    correctAnswer: "a"
  },
  {
    question: "In a hydro-electric plant a conduct system for taking water from the intake works to the turbine is known as",
    answers: {
      a: "Dam",
      b: "Reservoir",
      c: "Penstocky",
      d: "Surge tank"
    },
    correctAnswer: "c"
  },
  {
    question: "A propeller turbine which has adjustable blade is called as",
    answers: {
      a: "Banki turbine",
      b: "Pelton turbine",
      c: "Kaplan turbine",
      d: "Francis-Pelton turbine"
    },
    correctAnswer: "c"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
