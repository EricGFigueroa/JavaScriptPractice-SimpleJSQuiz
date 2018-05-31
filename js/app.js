function check() {

    // Variables
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    // Validation
    if (question1 == "Springfield" || question1 == "springfield") {
        correct++;
    }
    if (question2 == "Sacramento" || question2 == "sacramento") {
        correct++;
    }
    if (question3 == "Tallahassee" || question3 == "tallahassee") {
        correct++;
    }

    var messages = ["Gret Job!", "That's just okay", "You really need to do better"];
    var pictures = ["../img/yes.gif", "../img/meh.gif", "../img/no.gif"];

    var range;

    if (correct == 0 || correct == 1) {
        range = 2;
        document.getElementById("after-submit").style.backgroundColor = "red";
    }

    if (correct == 2) {
        range = 1;
        document.getElementById("after-submit").style.backgroundColor = "orange";
    }

    if (correct == 3) {
        range = 0;
        document.getElementById("after-submit").style.backgroundColor = "green";
    }

    document.getElementById("after-submit").style.visibility = "visible";

    // Text Content
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number-correct").innerHTML = "<p>You got " + correct + " correct.</p>"
    document.getElementById("picture").src = pictures[range];

};