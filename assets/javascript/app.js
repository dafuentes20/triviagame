var stopwatch = {
	number: 31,
	run: function () {
		counter = setInterval(stopwatch.increment, 1000);
	},
	increment: function() {
		stopwatch.number--;
      	$('#show-number').html('<h2>' + stopwatch.number + '</h2>');
      	if (stopwatch.number === 0){
        	stopwatch.stop();
		}
	},
	stop: function() {
		clearInterval(counter);
	}
};

var quiz = [ {
		question: "Who's this character?",
		picture: "assets/images/rocky.jpeg",
		choices: ['Rambo','Rocky','Appollo','Drago'],
		correct: 1,
	},
	{	question: "What movie is this?",
		picture: 'assets/images/grease.jpeg',
		choices: ['Hairspray','Newsies','Singing in the Rain','Grease'],
		correct: 3,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/anakin.jpeg',
		choices: ['Luke Skywalker','Obi Wan','Anakin Skywalker','Kylo Ren'],
		correct: 2,
	},
	{	question: "What movie is this?",
		picture: 'assets/images/fightclub.jpeg',
		choices: ['Fight Club','Seven','Oceans 11','Troy'],
		correct: 0,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/neo.jpeg',
		choices: ['John Wick','Ted','Keanu','Neo'],
		correct: 3,
	},
	{	question: "What movie is this?",
		picture: 'assets/images/invincible.jpeg',
		choices: ['Remember the Titans','Jerry Mgguire','Invincible','Friday Night Lights'],
		correct: 2,
	},
	{	question: "Who's this character??",
		picture: 'assets/images/iceman.jpeg',
		choices: ['Maverick','Goose','Iceman','Striker'],
		correct: 2,
	},
	{	question: "What movie is this?",
		picture: 'assets/images/halloween.jpeg',
		choices: ['Halloween','Friday The 13th','Scream','Nightmare on Elm street'],
		correct: 0,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/batmanbeyond.jpeg',
		choices: ['Batman','Spiderman','Joker','Batman Beyond'],
		correct: 3,
	},
	{	question: "What movie is this?",
		picture: 'assets/images/inception.jpeg',
		choices: ['Inception','The Departed','The Revinant','Shutter Island'],
		correct: 0,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/scar.jpeg',
		choices: ['Mufasa','Scar','Simba','Nala'],
		correct: 1,
}];

var numQuestions = quiz.length;
var numCorrect = 0;
var counter = 0;

var moviePic = $('<img>');



$('input[name="choice"]').hide;

// display question function
function nextQuest(){

	$('#questions').text(quiz[counter].question);
	moviePic.attr('src', quiz[counter].picture)
	$('#pokes').append(moviePic)
	$('#answer0').text(quiz[counter].choices[0]);
	$('#answer1').text(quiz[counter].choices[1]);
	$('#answer2').text(quiz[counter].choices[2]);
	$('#answer3').text(quiz[counter].choices[3]);
}


// client-sided validation
function validate() {
	if ($('input').is(':checked')) {

		nextQuest(); // display next question
	}
	else {
		alert("Please make a selection.");
		counter--;
	}
}

// display first question
nextQuest();


// next button function
$('#nextBtn').on('click', function() {
	var answer = ($('input[name="choice"]:checked').val());

	// increment score if answer is correct
	if (answer == quiz[counter].correct) {
		numCorrect++;
	}

	counter++;


	// display score screen
	if (counter >= numQuestions) {
		$('#main').hide().fadeIn("slow");
		document.getElementById('main').innerHTML="Quiz Complete! You scored " + numCorrect + " out of " + numQuestions + "!";
		return; // returns false *(there has to be a better way! figure it out.)*
	}

	validate();

	// fade in new question
	$('.card').hide().fadeIn("slow");
	
	// clear previous selection
	$('input[name="choice"]').prop('checked', false);
});


// back button function
$('#backBtn').on('click', function() {
	if (quiz[counter] == 0) {
		$('.card').hide().fadeIn("slow");

	} else {
		// fade out current question and fade in previous question
		$('.card').hide().fadeIn("slow");
		numCorrect--;
		counter--;
	}

	
	
	// display previous question
	nextQuest();	
});