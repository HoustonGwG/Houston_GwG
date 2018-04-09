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
	console.log('on ready working!')
//	const $myPic = $('.profile-pic');
//	$myPic.hide();
	$('img/lou_minify.svg g').css('stroke', '#e1f102');
})


