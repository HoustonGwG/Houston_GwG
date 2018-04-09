$('.profile-links li span').hide();


$('#logo').hover( () => {
	const $logoToggle = $('#mylogo');
	$logoToggle.slideToggle();
});

$('#github').hover( () => {
	const $githubToggle = $('#mygithub');
	$githubToggle.slideToggle();
});

$('#linkedin').hover( () => {
	const $linkedinToggle = $('#mylinkedin');
	$linkedinToggle.slideToggle();
});

$('#email').hover( () => {
	const $emailToggle = $('#myemail');
	$emailToggle.slideToggle();
});



/*
* Replace all SVG images with inline SVG
*/




$(document).ready( () => {
	jQuery('img.profile-pic').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		
		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			
			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
			  $svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		  }, 'xml');

		});
	
	
	
//	console.log('on ready working!');
//	const $myPic = $('.profile-pic');
	
//	$('svg.profile-pic.replaced-svg').hide();
	
//	$myPic.css( "background-color", "blue" );
	
//	$("img").add("path").css("stroke", "green");
	
	
	
//	console.log($currentStrokeVal);
	setInterval(changePicColor(randomNumber), 10000);
//	changePicColor(randomNumber);
});


const $blueChange = $("g").css("stroke", "blue");
const $redChange = $("g").css("stroke", "red");
const $greenChange = $("g").css("stroke", "green");

function changePicColor(randNum) {
	switch (randNum) {
    case 0:
        $blueChange
		console.log("blue");
        break;
    case 1:
        $redChange
		console.log("red");
        break;
    case 2:
        $greenChange
		console.log("green");
        break;
	}
}

var randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);



