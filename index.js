
const quizData = [
    {
        question : "Which of the following is a colour ",
        options : [
            "blue",
            "house",
            "sweet",
            "water",
        ],
        correct : 0,
    },
    {
        question : "Which of the following is a book ",
        options : [
            "blue",
            "green",
            "The song of fire and ice",
            "red",
        ],
        correct : 2,
    },
    {
        question : "Which of the following is a dress ",
        options : [
            "blue",
            "shirt",
            "gray",
            "red",
        ],
        correct : 1,
    },
    {
        question : "Which of the following is a food item",
        options : [
            "blue",
            "green",
            "gray",
            "ice cream",
        ],
        correct : 3,
    },
];

// Step 2 : JavaScript Initialisation

const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
        "#question, .option_1, .option_2, .option_3, .option_4"
    );
const submitBtn = document.querySelector("#submit");


let currentQuiz = 0;
let score = 0;

// step 3 : load quiz function
const loadQuiz = () => {
    const { question, options} = quizData[currentQuiz];
    //console.log(options);

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    scores.innerText = `Score : ${score}/${quizData.length}`;

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );

};

loadQuiz();


// Step 4 - get selected answer function on Button click

const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElm) => curElm.checked);
};


const deselectedAnswers = () => {
    return answerElm.forEach((curElm) => curElm.checked = false);
};

submitBtn.addEventListener("click", () =>{
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if( selectedOptionIndex === quizData[currentQuiz].correct){
        score = score + 1;
    }

     currentQuiz++;

    if( currentQuiz < quizData.length){
        deselectedAnswers();
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <div class = "result">
            <h2> 🏆 Your Score : ${score}/${quizData.length} Correct Answers</h2>
            <p>Congratulations on completing the quiz! 🎉</p>
            <button class ="reload-button" onclick="location.reload()"> Play Again 🔁</button>
        </div>
        `;
    }

});
