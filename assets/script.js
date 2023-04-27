// When user clicks the start button, then a timer starts and user is presented with a question
// Global variables :D
    var startBtn = document.getElementById("startBtn");
    var time = 60;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homePage =  document.getElementById("homePage");
    var quizCategory = document.getElementById("quizCategory");
    var quizQuestion = document.getElementById("quizQuestion");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    // Sets score to 0 at the start of the game 
    var score = 0;
    // question index
    let i = 0;

// Questions Array:

var questionsArray = [
    {
    question: "Commonly used data types DO NOT include:",
    imageSrc: "",
    answerChoice: ["A) Strings", "B) Booleans", "C) Alerts", "D) Numbers"],
    correctAnswer: 2
    }, 
    {
    question: "What are variables used for in JavaScript Programs?",
    imageSrc: "",
    answerChoice: ["A) Storing numbers, dates, or other values", "B) Varying randomly", "D) Storing food for the winter", "D) None of the above"],
    correctAnswer: 0
    },
    {
    question: "Which method adds a new item to the end of an array and returns the new length?",
    imageSrc: "",
    answerChoice: ["A) shift()", "B) return() ", "C) push() ", "D) pop()"],
    correctAnswer: 2
    }, 
    {
    question: "Which of the following can't be done with client-side JavaScript?",
    imageSrc: "",
    answerChoice: ["A) Sending a form's content by email", "B) Validating a form", "C) Storing the form's content to a database file on the server", "D) None of the above"],
    correctAnswer: 2
    },
    {
    question: "Which of the following are capabilities of functions in JavaScript?",
    answerChoice: ["A) Return a value", "B) Accept parameters", "C) Accept parameters and Return a value", "D) All of the above"],
    correctAnswer: 1
    },
    {
    question: "Boolean operators that can be used in JavaScript include:",
    answerChoice: ["A) 'And' Operator (&&)", "B) 'Or' Operator (||) ", "C) 'Not' Operator (!) ", "D) All of the above"],
    correctAnswer: 3
    }
];

// timer counts down every second

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

//function that changes the time var

function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    //alerts user and stops quiz
        }
        document.getElementById("timer").innerHTML = time;
    }

// event listener for when user clicks the start button, adds the countdown timer and quiz questions to page. Adds an event listener to each button.

startBtn.addEventListener("click", function() {
    quizCategory.style.display = "block";                                              
    homePage.style.display ="none";                                    
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

// Question Function: displays questions and multiple-choice answers

function setQuizQuestions() {
        quizQuestion.textContent = questionsArray[i].question;            
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };

// When user answers a question, then user is presented with another question, stores user's answers, and clear elements and update score count; changes to the next question

answerChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        // checks the answer selected
        if (0 === correctAnswer) { 
            // show if correct or incorrect for 1 second
            document.getElementById("AnswerResponse").innerHTML = "Good Job!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            // when the user answers correctly the  score increases
            score++;    
            // this updates the score's progress
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            // when user answers a question inccorrectly, subtract  time
            document.getElementById("AnswerResponse").innerHTML = "Try Again!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }       // this counts down through the question array until we run out of questions ending the quiz
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Good Job!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("AnswerResponse").innerHTML = "Try Again!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Good Job!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Try Again!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

answerChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Good Job!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Try Again!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

        //ends the quiz
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizCategory").style.display="none";                      
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

        //submit score and initals for scoreboard

            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            }
        
        function view_high_scores(){
        
        // changes screen output
            document.getElementById("quizCategory").style.display="none";                          
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();
        }

        // refreshes to the home page
        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("homePage").style.display= "block";                    
                clear_up();
        }
        
        // clears highscores
        function clear_hs(){
            high_scores = [];
          }
        
        // refreshes the site 
        function clear_up(){
        
        time=60;
        time_remaining=true;
        time_start=false;
        i=0;
        score=0;
        }