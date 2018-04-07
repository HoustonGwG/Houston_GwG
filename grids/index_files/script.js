/*
* Replace all SVG images with inline SVG
*/

jQuery('img.article-img').each(function(){
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

/*
* Runs the google map API
*/

var geocoder;
var map;
var markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  list = [
    [29.740582, -95.4515725],
    [29.4947986, -95.09110620000001]
  ];
  var bounds = new google.maps.LatLngBounds();
  list.forEach(function (data, index, array) {

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(list[index][0], list[index][1]),
      map: map
    });
    markers.push(marker);

    bounds.extend(marker.position);
  });
  map.fitBounds(bounds);

}

/* FRANCES NOTE: Rearranging placement of things on the website. As a result,
changing map animation so there is a bounce upon clicking + someone's image
pops up. */

/* showme = function (index) {
  if (markers[index].getAnimation() != google.maps.Animation.BOUNCE) {
    markers[index].setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){ markers[index].setAnimation(null); }, 750);
  } else {
    markers[index].setAnimation(null);
  }
} */

/* 
* Change tab color on navbar depending on the active page
* Can't change :hover CSS because that's a pseudoselector and not an actual DOM element
*/

var activePage = $('.active').text();

console.log(activePage);

switch (activePage) {
    case 'Home':
      $('.active').css('background-color', 'rgba(57, 129, 243, 1)');
      $('.active').css('color', 'white');
      break;
    case 'About Us':
      $('.active').css('background-color', 'rgba(230, 39, 25, 1)');
      $('.active').css('color', 'white');
      break;
    case 'Map':
      $('.active').css('background-color', 'rgba(240, 181, 5, 1)');
      $('.active').css('color', 'white');
      break;
    case 'Contact':
      $('.active').css('background-color', 'rgba(50, 164, 81, 1)');
      $('.active').css('color', 'white');
      break;
  };