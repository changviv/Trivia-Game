window.onload = function() {
  $(".start").on("click", timer.start);
};

var timerRunning = false

var timer = {
	minutes: 2,
	seconds:60,
	reset: function() {
		timer.minutes = 2;
		timer.seconds = 60;
		$("#display").text("2:00");

	},
	start: function() {
		timer.reset;
		if (!timerRunning) {
			intervalId = setInterval(timer.count, 1000);
      timerRunning = true;
    }
	},
	stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
  },
	count: function() {
		timer.seconds--;
		var converted = timer.timeConverter(timer.minutes,timer.seconds);
		$("#show-timer").text(converted);
	},
	timeConverter: function(min, sec) {
		if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (sec === 0) {
			min--;
			timer.seconds = 60;
			timer.seconds--;
		}

		return minutes + ":" + seconds;
	}
}