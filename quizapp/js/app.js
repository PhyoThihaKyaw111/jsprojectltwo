const quizdata = [
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheet",
        b: "Cascading Style Sheet",
        c: "Cascading Simple Sheets",
        d: "Century System Software",
        e: "Control Style Sheet",
        correct: "b",
    },

    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hyper Technology Modern Language",
        e: "Hyper Market Language",
        correct: "a",
    },

    {
        question: "What year was Javascript Launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1991",
        e: "None of the above",
        correct: "b",
    },

    {
        question: "What language runs in browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        e: "PhP",
        correct: "d",
    }
];

// UI
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const answerels = document.querySelectorAll('.answer');
// console.log(answers);

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');

const submitbtn = document.getElementById('submit');

let currentquiz = 0;
let score = 0;


function  loadquiz(){
    deselectanswer();
    const currentquizdata = quizdata[currentquiz];
    question.innerText = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;
    e_text.innerText = currentquizdata.e;
}

loadquiz();

function deselectanswer(){
    answerels.forEach((answerel)=>answerel.checked = false);
}

function  getselected(){
    let answer;

    answerels.forEach((answerel)=>{
        // console.log(answerel);

        if(answerel.checked){
            answer = answerel.id;
        }
    });

    return answer;

}

submitbtn.addEventListener('click',()=>{

    let answer = getselected();

    if(answer){
        if(answer === quizdata[currentquiz].correct){
            score++;
        }

        currentquiz++;

        if(currentquiz < quizdata.length){
            loadquiz();
        }else{
            //can style in css
            document.body.style.textAlign = 'center';
            quiz.innerHTML = `
            <h2> Your answer correct at ${score} / ${quizdata.length} questions</h2>
            <button onclick="window.location.reload()">Reload</button>
            `;

        }
    }

});
