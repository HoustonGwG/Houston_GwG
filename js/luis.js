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


$(document).ready( () => {
	const $myPic = $('svg.profile-pic path');
	
	$myPic.css('stroke', 'rgba(230, 39, 25, 1)');
})


