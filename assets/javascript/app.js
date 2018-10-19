var timer;

$("#start-page").on("click", function() {
	game.start();
});

$("#question-page").on("click", "#submit", function() {
	game.results();
});

$("#results-page").on("click", "#replay", function() {
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
	counter: 45,
	countdown: function() {
		game.counter--;
		$("#show-timer").text(game.counter);
		$(".start").hide()

		if (game.counter === 0) {
			game.results();
		};
	},
	start: function() {
		$("#start-page").hide();
		timer = setInterval(game.countdown, 1000);
		for (var i = 0; i < questions.length; i++) {
      $("#question-page").append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        $("#question-page").append('<input type="radio" name ="question' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
      }
  	}
  	$("#question-page").append("<button id='submit'>Submit</button>");
	},
	results: function() {
			for (var j = 0; j < questions.length; j++) {
				if (!$("input[name='question" + j + "']").is(":checked")) {
					game.unanswered++
				}
				else {
					if ($("input[name='question" + j + "']:checked").val() === questions[j].answer) {
						game.correct++
					} else {
						game.incorrect++
					}
				}
			}
		game.stop()
	},
	stop: function() {
		clearInterval(timer);
		$("#time").hide();
		$("#question-page").hide();
		$("#results-page").show();
		$("#no-answers").text(game.unanswered);
		$("#correct-answers").text(game.correct);
		$("#wrong-answers").text(game.incorrect);
	},
};
