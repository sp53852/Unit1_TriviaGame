// Declaring variables. 
var totalQuestions = 10;
var keyAnswers = [1,3,4,4,3,3,2,1,2,1];
var answerCount = 0;
//setting question div tags not to display.
 clearQuestions();

function clearQuestions(){
    var elements = document.getElementsByClassName("containerQandA");
    for( i=0;i<elements.length; i++){
        elements[i].style.display ='none';
    }
}

// to set status of questions div tags
function questionDisplay(id,status){
    var elementQ = document.getElementById(id);
    elementQ.style.display = status;
}

function play(e) {
    // clear all questions div tags
    clearQuestions();

    // After clearing the questions, Change it to original state.
    let para = document.getElementById('para');
    para.innerText = "Try this multiple - choice questions quiz that tests your knowledge of wonders of the world and other general knowledge. Read each question and click on the answer you think is correct.";

    let h2Result = document.getElementById('result');
    h2Result.innerText = "Good Luck!";

    let buttonPlay = document.getElementById('buttonPlay');
    buttonPlay.innerText = "Play";
        
    console.log(e.target.id);
    //Display first question div tag
    questionDisplay("Q1",'block');
}

function answer(questionNumber,buttonId) {
    console.log("User Answer : " + buttonId);
    var userAnswer = parseInt(buttonId);
    var id = parseInt(questionNumber);
    var qAnswer = keyAnswers[id-1];
    
    console.log("Question Answer: " + qAnswer);

    if(qAnswer == userAnswer) {
        console.log("Correct");
        answerCount++;
    } else{
        console.log("Wrong");
    }
    
    // Block current question div tags
    var tempStr = 'Q' + id;
    console.log(tempStr);
    questionDisplay(tempStr,'none');

    // Dsiplay next question div tags
    // End of all questions. Show the results
    var nextQuestion = id + 1;
    if(nextQuestion > 10){
        console.log("Answer count : " + answerCount);

        //Clear the questions
        clearQuestions();

        // Display score and next steps
        let para = document.getElementById('para');
        para.innerText = "You have already completed the quiz, but just try again to retest your knowledge level.";
        let h2Result = document.getElementById('result');
        h2Result.innerText = "Result : " + (answerCount/totalQuestions) * 100 + "%";
        let buttonPlay = document.getElementById('buttonPlay');
        buttonPlay.innerText = "Try Again";

        //Set answer count to zero.
        answerCount = 0;
    return;
    }

    // Continiue to display next questions div tags
    tempStr = 'Q' + nextQuestion;
    console.log(tempStr);
    questionDisplay(tempStr,'block');
}