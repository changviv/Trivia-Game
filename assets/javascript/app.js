var timer;

$(document).ready(function(){
    // start the game
    $("#start-page").on("click", function() {
    	game.start();
    });
});
//clicks submit when answers all questions
$("#question-page").on("click", "#submit", function() {
	game.results();
});

// hide results page when start
$(".question-container").hide();
$("#results-page").hide();

var questions = [
		{
    	question: "What is the name for a decorative pillowcase?",
    	choices: ["Sham", "Jon Hamm", "Baby Pram", "Pillow"],
    	answer: "Sham"
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
    	question: "Dr. Seuss's Lorax character claims to specifically speak for what part of nature?",
    	choices: ["Bees", "Trees", "Seas", "Leaves"],
    	answer: "Trees"
    },
    {
    	question: "Freddie Mercury died in which year?",
    	choices: ["1990", "1991", "1992", "1993"],
    	answer: "1991"
    },
    {
    	question: "The Komodo dragon is the national animal of where?",
    	choices: ["Indonesia", "Papua New Guinea", "Phillipines", "Cambodia"],
    	answer: "Indonesia"
    },
    {
    	question: "Which is not Ralph Waldo Emerson's work?",
    	choices: ["The American Scholar", "Nature", "Walden", "Self-Reliance"],
    	answer: "Walden"
    },
    {
    	question: "Which is the national flower of Monaco?",
    	choices: ["Carnationr", "Bluebonnet", "Sunflowers", "Zinnia"],
    	answer: "Zinnia"
    },
    {
    	question: "Which American artist was known for his mobiles?",
    	choices: ["Jackson Pollock", "Jasper Johns", "Alexander Calder", "Norman Rockwell"],
    	answer: "Alexander Calder"
    },
    {
    	question: "'And now that you don't have to be perfect, you can be good' is a quote from which Steinbeck novel?",
    	choices: ["Of Mice and Men", "East of Eden", "The Grapes of Wrath", "No One Knows"],
    	answer: "East of Eden"
    },
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
		$(".question-container").show();
		timer = setInterval(game.countdown, 1000);
		for (var i = 0; i < questions.length; i++) {
	    $("#question-page").append('<h2>' + questions[i].question + '</h2>');
	    for (var j = 0; j < questions[i].choices.length; j++){
	      $("#question-page").append("<input type='radio' id='question" + i + "' value='" + questions[i].choices[j] + "'>","<label>" + questions[i].choices[j] + "</label>");
	    }
		}
		$("#question-page").append("<br><button type='button' class='btn btn-light' id='submit'>Submit</button>");
	},
	results: function() {
		for (var j = 0; j < questions.length; j++) {
			if (!$("input[id='question" + j + "']").is(":checked")) {
				game.unanswered++
			}
			else {
				if ($("input[id='question" + j + "']:checked").val() === questions[j].answer) {
					game.correct++
				} else {
					game.incorrect++
				}
			}
		}
		game.stop();
	},
	stop: function() {
		clearInterval(timer);
		$("#time").hide();
		$("#question-page").hide();
		$(".question-container").hide();
		$("#results-page").show();
		$("#no-answers").text(game.unanswered);
		$("#correct-answers").text(game.correct);
		$("#wrong-answers").text(game.incorrect);
	}
};
