$(document).ready(() => {
//	var x = 0;
//	var result;
//	
//	function isEven(value) {
//		if (value % 2 === 0) {
//			return true;
//		} else {
//			return false;
//		}
//	}
	
	
	
	
	$('#toggle').click(() => {
		//remove or delete
		$('section').removeClass();
		$('h2').removeClass();
		
		$('img').removeClass();
		$('p').removeClass('melp');
		$('h2 a').removeClass('melh2a');
		$('a').removeClass('mel-a');
		$('h1.h1').remove();
		$('h1').remove();
		$('.GWG_logo').remove();
		$('figure.GWG_fig').remove();
		$('div.leading').remove();
		$('div').removeClass();
		$('section').removeClass("grid-contain");
//		$('div:nth-child(3) p a').remove();
		
		//add or create
		$('body').addClass('BG');
		$('p').addClass('para');
//		$('a').addClass('links');
		$('a:hover').css('text-decoration', 'underline');
		$('ul li').find('a').addClass('nav-li-a');
		$('ul').find('li').addClass('nav-li');
		$('header').addClass('navbar');
		$('ul li a:hover').addClass('nav-li-ahover');
		$('#img-container').addClass('div-img');
		$('img').addClass('img');
		$('#social').addClass('social-links');
		$('div.social-links').prepend('<h1 class="h1">Melanie Villela</h1>');
		$('div:nth-child(2)').find('h2').addClass('h2');
		$('h2').find('a').addClass('h2-a');
		$('div:nth-child(3)').addClass('main-text');
		$('div:nth-child(3) p').find('a').addClass('p-a');
		$('a:hover').css('text-decoration', 'underline');
		$('ul').addClass('nav-ul');
		$('h2 a:first-child').addClass('linkb');
		$('body').prepend('<div class="leading"></div>');
		$('body div.leading').append('<figure  class="GWG_fig"></figure>');
		$('.GWG_fig').append('<img class="GWG_logo" src="index_files/logo_GwG.svg" alt="Grow With Google Logo">');
		$('#grid').addClass("grid-contain");
//		x++;
//		console.log(x);
	});
	
	
	$('#custom').click( () => {
		//remove or delete
		$('h1.h1').remove();
		$('h1').remove();
		$('body').removeClass('BG');
		$('p').removeClass('para');
		$('a').removeClass('links');
		$('a').removeClass('nav-li-a');
		$('li').removeClass('nav-li');
		$('header').removeClass('navbar');
		$('section').removeClass("grid-contain");
		$('h1').removeClass('h1');
		$('h2 a').removeClass('h2-a');
		$('div:nth-child(3)').removeClass('main-text');
		$('div:nth-child(3) p').find('a').removeClass('p-a');
		$('ul').removeClass('nav-ul');
		$('h2 a:first-child').removeClass('linkb');
		$('img.GWG_logo').remove();
		$('figure.GWG_fig').remove();
		$('div.leading').remove();
		$('img').removeClass('img')
		
		
		//add or create
		$('div:nth-child(1)').append('<h1>Melanie Villela</h1>');
		$('h2 a').addClass('melh2a');
		$('p').addClass('melp');
		$('div:last').addClass('section-3');
		$('div:nth-child(2)').addClass('section-2');
		$('div:first-child').addClass('section-1');
		$('img').addClass('profile-pic');
		$('div').find('h2').addClass('profile-links');
//		$('a').addClass('mel-a');
//		x++;
	});
	
	
//	$('#toggle').click( () => {
//		console.log('x count before increment: ' + x)
//		console.log(`result:  ${isEven(x)}`)
//		x++;
//		console.log('x count: ' + x)
//	});
});