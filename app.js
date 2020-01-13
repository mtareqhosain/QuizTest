(function() {
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
            console.log(i + 1 + ": " + this.answer[i]);
        }
    };

    //check correct answer
    Question.prototype.checkAns = function(ans, callback) {
        let sc;
        if (ans === this.correctAns) {
            console.log("Correct!!");
            sc = callback(true);
        } else {
            console.log("Wrond answer. Try again");
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    //display score
    Question.prototype.displayScore = function(score) {
        console.log("Your current score is: " + score);
        console.log("----------------------------");
    };

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
    let q4 = new Question(
        "Which district of Bangladesh was part of Assam?",
        ["Chittagong", "Khulna", "Sylhet", "Jessore"],
        3
    );
    let q5 = new Question(
        "What is the Time Zone of Bangladesh?",
        ["Utc + 5", "Utc - 6", "Utc + 6", "Utc - 5"],
        3
    );

    let questions = [q1, q2, q3, q4, q5];

    //calculate score
    function score() {
        let sc = 0;
        return function(correctAns) {
            if (correctAns) {
                sc++;
            }
            return sc;
        };
    }

    let keepScore = score();

    function nextQues() {
        let n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        let answer = prompt("Please select the correct answer.");

        if (answer !== "exit") {
            questions[n].checkAns(parseInt(answer), keepScore);
            nextQues();
        }
    }
    nextQues();
})();
