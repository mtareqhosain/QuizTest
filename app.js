//function constructor
function Question(question, answer, correctAns) {
    this.question = question;
    this.answer = answer;
    this.correctAns = correctAns;
}

//display question and answer function
Question.prototype.displayQuestion = function() {
    //display question in console
    console.log(this.question);

    //display answer list
    for (let i = 0; i < this.answer.length; i++) {
        console.log((i+1) + ": " + this.answer[i]);
    }
};


//check correct answer
Question.prototype.checkAns = function(ans) {
    if(ans === this.correctAns) {
        console.log('Correct!!');
    } else {
        console.log('Wrond answer. Try again');
    }
}

//creating questions
let q1 = new Question(
    "On which continent is Bangladesh located?",
    ["Africa", "Asia", "Europe", "Australina"],
    2
);
let q2 = new Question(
    "What is the national flower of Bangladesh?",
    ["Water lily", "Tulip", "Rose"],
    1
);
let q3 = new Question(
    "What year did Bangladesh finally become independent and gain the name it has today?",
    ["1971", "1947"],
    1
);

let questions = [q1, q2, q3];

let n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();

let answer = prompt('Please select the correct answer.');
questions[n].checkAns(parseInt(answer));
