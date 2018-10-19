var timer;

$("#start-page").on("click", function() {
	game.start();
});

$("#results-page").hide();

var questions = [
		{
    	question: "What color is the sky?",
    	choices: ["Blue", "Red", "Green", "Brown"],
    	answer: "Blue"
    },
    {
    	question: "Which one is not part of the Great Lakes?",
    	choices: ["Erie", "Ontario", "Hudson", "Michigan"],
    	answer: "Hudson"
    },
    {
    	question: "Who is the Golde State Warrior's Coach?",
    	choices: ["Gregg Popovich", "Luke Walton", "Kenny Atkinson", "Steve Kerr"],
    	answer: "Steve Kerr"
    },
    {
    	question: "Freddie Mercury died in which year?",
    	choices: ["1990", "1991", "1992", "1993"],
    	answer: "1991"
    },
    {
    	question: "Who is the 2018 female recipient of the Nobel Prize in Physics?",
    	choices: ["Donna Strickland", "Frances Arnold", "Marie Curie", "Malala Yousafzai"],
    	answer: "Donna Strickland"
    },    
    {
    	question: "Which is not Ralph Waldo Emerson's work?",
    	choices: ["The American Scholar", "Nature", "Walden", "Self-Reliance"],
    	answer: "Walden"
    }
];


var game = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	counter: 10,
	countdown: function() {
		game.counter--;
		$("#show-timer").text(game.counter);
		$(".start").hide()

		if (game.counter === 0) {
			game.stop();
		};
	},
	start: function() {
		$("#start-page").hide();
		timer = setInterval(game.countdown, 1000);
		console.log("start");
		for (var i = 0; i < questions.length; i++) {
			$("#questions").append("<h2>" + (i + 1)+ ". " + questions[i].question + "</h2>");
			$("#answers").append("<p>" + questions[i].choices + "</p>");
		}
	},
	stop: function() {
		console.log("stop");
		clearInterval(timer);
		$("#question-page").hide();
		$("#results-page").show();
		$("#no-answers").text(game.unanswered);
		$("#correct-answers").text(game.correct);
		$("#wrong-answers").text(game.incorrect);
	},
};



