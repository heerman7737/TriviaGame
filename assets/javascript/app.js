
let questions = [{
  question: "Who many son does Ned Stark have?",
  answers: ["3", "2", "1", "4"],
  correctAnswer: "4",
}, {
  question: "What can we refer about Jon Snow?",
  answers: ["You know nothing, Jon Snow", "The King Slayer", "Dragon Rider", "The King Beyond the Wall"],
  correctAnswer: "You know nothing, Jon Snow",
}, {
  question: "How many kingdoms are there in Westeros?",
  answers: ["4 kingdoms", "7 kingdoms", "8 kingdoms", "9 kingdoms including the King's Land"],
  correctAnswer: "9 kingdoms including the King's Land",
}, {
  question: "Which city state is the richest in Essos?",
  answers: ["Lorath", "Braavos", "Pentos", "Qohor"],
  correctAnswer: "Braavos",
}, {
  question: "What nickname does Robb Stark have?",
  answers: ["The Young Wolf", "The White Wolf", "The Elder", "The King who never lost a battle"],
  correctAnswer: "The Young Wolf",
}, {
  question: "What is the religion in the North?",
  answers: ["The Faith of Seven", "The Drowned God", "The Many Faces God", "The Old Ones"],
  correctAnswer: "The Old Ones",
}, {
  question: "What is the largest city in Westeros?",
  answers: ["Old Town", "King's Landing", "Harrenhald", "Lannisport"],
  correctAnswer: "King's Landing",
}];

/* exported begin */
let mainpart = document.querySelector('#quiz-area');
let countStartNumber = 30;
let correct=0;
let incorrect=0;
let currentQuestion=0;








counter=countStartNumber;
function countdown(){
    counter--;
    document.getElementById('counter-number').innerHTML=counter;
    if(counter===0){
        console.log('Time Up');
        timeUp();
    }
}

function loadQuestion(){
    timer=setInterval(countdown,1000);
    document.getElementById('second_wrapper').innerHTML='<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>';
    mainpart.innerHTML=`<h2>${questions[currentQuestion].question}</h2>`
    
    for(let i=0;i<question[currentQuestion].answer.length;i++){
        mainpart.append('<button class="answer-button" id="button"' + 'data-name="' + questions[currentQuestion].answers[i] + '">' + questions[currentQuestion].answers[i]+ '</button>')
    }
}
function nextQuestion(){
    counter=countStartNumber;
    document.getElementById('counter-number').innerHTML=counter;
    currentQuestion++;
    loadQuestion();
}

function timeUp(){
    clearInterval(timer);
    document.getElementById('counter-number').innerHTML=counter;
    mainpart.innerHTML='<h2>Out of Time!</h2>';
    mainpart.append('<h3>The Correct Answer was: ' + questions[currentQuestion].correctAnswer);
    if(currentQuestion===questions.length-1){
        setTimeout(results,3*1000);
    }
    else{
        setTimeout(nextQuestion,3*1000);
    }
}

function results(){
    clearInterval(timer);
    mainpart.innerHTML='<h2>All done, heres how you did!</h2>';
    document.getElementById('counter-number').innerHTML=counter;
    mainpart.append('<h3>Correct Answers: ' + correct + '</h3>');
    mainpart.append('<h3>Incorrect Answers: ' + incorrect + '</h3>');
    mainpart.append('<h3>Unanswered: ' + (questions.length - (incorrect + correct)) + '</h3>');
    mainpart.append('<br><button id="start-over">Start Over?</button>');
}

function clicked(e){
    clearInterval(timer);
    if(e.target.data("name")===questions[currentQuestion].correctAnswer){
        answeredCorrectly();
    }
    else{
        answeredIncorrectly();
    }
}

function answeredCorrectly(){
    clearInterval(timer);
    correct++;
    mainpart.innerHTML='<h2>Correct!</h2>';
    if(currentQuestion===questions.length-1){
        setTimeout(results,3*1000);
    }
    else{
        setTimeout(nextQuestion,3*1000);
    }
}
function answeredIncorrectly(){
    incorrect++;
    clearInterval(timer);
    mainpart.innerHTML='<h2>Nope!</h2>';
    mainpart.append('<h3>The Correct Answer was: ' + questions[currentQuestion].correctAnswer + '</h3>');
    if(currentQuestion===questions.length-1){
        setTimeout(results,3*1000);
    }
    else{
        setTimeout(nextQuestion,3*1000);
    }

}

function reset(){
    currentQuestion=0;
    counter=countStarNumber;
    correct=0;
    incorrect=0;
    loadQuestion();
}
document.getElementsByClassName('answer-button').addEventListener("click",e=>{clicked(e)})


document.getElementById('start-over').addEventListener("click",reset)
