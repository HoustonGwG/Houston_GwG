$('ul.profile-links li span').hide();

$('ul.profile-links li').hover( (event) => {
	$(event.currentTarget).children("span").slideToggle(600);
	$(event.currentTarget).children("span").toggleClass('anim');

});


//$(document).ready( () => {
//	jQuery('img.profile-pic').each(function(){
//		var $img = jQuery(this);
//		var imgID = $img.attr('id');
//		var imgClass = $img.attr('class');
//		var imgURL = $img.attr('src');
//		
//		jQuery.get(imgURL, function(data) {
//			// Get the SVG tag, ignore the rest
//			var $svg = jQuery(data).find('svg');
//			
//			// Add replaced image's ID to the new SVG
//			if(typeof imgID !== 'undefined') {
//				$svg = $svg.attr('id', imgID);
//			}
//			
//			// Add replaced image's classes to the new SVG
//			if(typeof imgClass !== 'undefined') {
//			  $svg = $svg.attr('class', imgClass+' replaced-svg');
//			}
//
//			// Remove any invalid XML tags as per http://validator.w3.org
//			$svg = $svg.removeAttr('xmlns:a');
//
//			// Replace image with new SVG
//			$img.replaceWith($svg);
//
//		  }, 'xml');
//	});
	
	
//	$('.profile-pic').addClass('red')
////	$("g").css("stroke", "blue");
//	
//	$('svg.profile-pic.replaced-svg').find('g').css('stroke', '#acac33');
//});



//	console.log('on ready working!');



