
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
        var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
        var question8 = document.quiz.question8.value;
        var question9 = document.quiz.question9.value;
        var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "Chennai") {
		correct++;
        }
	if (question2 == "Hyderabad") {
		correct++;
        }	
	if (question3 == "Albany") {
		correct++;
        }
        if (question4 == "Ayodhya") {
		correct++;
        }
	if (question5 == "Gujrath") {
		correct++;
        }
	if (question6 == "Tokyo") {
		correct++;
        }
        if (question7 == "Itanagar") {
		correct++;
        }
        if (question8 == "Brazil") {
		correct++;
        }
        if (question9 == "London") {
		correct++;
        }
        if (question10 == "Atlas") {
		correct++;
        }
        

        var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif","img/failure.jpeg","img/success.jpeg"];
	var messages = ["Great job!", "That's just okay", "You really need to do better","Zero","A perfect 10  Excellent"];
	var score;

	if (correct == 0) {
		score = 3;
	}

	if (correct > 0 && correct < 3) {
		score = 2;
	}

	if (correct == 4 || correct==5) {
		score = 1;
	}
        if (correct > 5 && correct<10) {
		score = 0;
	}
        if (correct ==10) {
		score = 4;
	}
        

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
