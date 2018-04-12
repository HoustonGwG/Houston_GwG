$(document).ready( () => {
	let x = 0;
	let result = x % 3;
	
	
	if (x % 3 === 0) {
		$('#toggle').click(() => {
			$('section:last').append('<script id="final" src="../js/standard-view-switch.js"></script>');
		});
	} else {
		$('#final').remove();
//		$('section').removeClass();
//		$('h2').removeClass();
//		$('div').removeClass();
//		$('img').removeClass();

		$('body').removeClass('BG');
		$('p').removeClass('para');
		$('a').removeClass('links');
	}
	
	$('#toggle').click( () => {
		console.log('result: ' + result)
		x++;
		console.log('x count: ' + x)
	});
//	if ($('#toggle').prop('checked')) {
//		
//	}
//	
//	if ($('span.slider.round::before')) {
//		$('#final').remove();
//	}
	
	
//	let $blueChange = $("g").css("stroke", "blue");
//	let $redChange = $("g").css("stroke", "red");
//	let $greenChange = $("g").css("stroke", "green");
//	var randomNumber = Math.floor(Math.random() * 3);

//	function changePicColor(randNum) {
//		switch (randNum) {
//			case 0:
//				$blueChange
//				console.log("blue");
//				break;
//    		case 1:
//				$redChange
//				console.log("red");
//				break;
//			case 2:
//				$greenChange
//				console.log("green");
//				break;
//		}
//	}
	
//	console.log(randomNumber);
//	changePicColor(randomNumber);
//	var interval = setInterval(changePicColor, 10000);
//	$("g").css("stroke", "blue");
//	changePicColor(randomNumber);
//	$('svg').children('g').css('stroke', 'green');
});
//$("g").css("stroke", "blue");
//var interval = setInterval(runClock, 1000);