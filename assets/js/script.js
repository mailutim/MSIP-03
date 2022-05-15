const quizData = [
    {
        question: "Which command should you use to display the current path of your current directory?",
        a: "pwd",
        b: "cd",
        c: "ls",
        d: "touch", 
        correct: "a",  
    },
    {
       question: "Which command should you use to list all files of your current directory?",
        a: "pwd",
        b: "cd",
        c: "ls",
        d: "touch" ,
        correct: "c",
    },
    {
       question: "Which command should you use to display the content of a file?",
       a:"pwd",
       b: "less",
       c: "cd",
       d: "ls",
       correct: "b",
    },
    {
       question: "Which command should you use to delete a directory?",
       a: "cp",
       b: "mv",
       c: "rm",
       d: "rmdir",
       correct: "d",
    },
];

const quiz = document.getElementById('quizdiv');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('quizquestion');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0
startQuiz()

function startQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
    
function getSelected() {
    let answer

    answerEls.forEach(answerEl => { 

        if (answerEl.checked) {
            answer = answerEl.id
        } 
    }) 

    return answer

}

submitBtn.addEventListener('click', () => {
    let answer = getSelected()
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
           score++ 
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            startQuiz()
        } else {

            document.write("Your score is " + score + " out of 4")
            // alert (`score :` + score)
            // location.reload();
            // container.innerHTML = `<h1>Your score is((${score}/${quizdata.length})* 100 )</h1>

            // <button onclick="location.reload()">Reload</button>
            // `
        }

    }
}) 
