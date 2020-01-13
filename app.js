//function constructor
function Question(question, answer, correctAns) {
    this.question = question;
    this.answer = answer;
    this.correctAns = correctAns;
}

//creating questions
let q1 = new Question('On which continent is Bangladesh located?', ['Africa', 'Asia', 'Europe', 'Australina'], 1);
let q2 = new Question('What is the national flower of Bangladesh?', ['Water lily', 'Tulip', 'Rose'], 2);
let q3 = new Question('What year did Bangladesh finally become independent and gain the name it has today?', ['1971', '1947'], 0);

