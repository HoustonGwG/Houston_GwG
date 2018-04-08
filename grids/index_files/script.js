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

//Create array containing coordinate informations
var list = [
    ['Ross', 29.740582, -95.4515725, './index_files/profile_faces/ross_minify.svg', 'index.html'],
    ['Frances', 29.4947986, -95.09110620000001, './index_files/profile_faces/frances_minify.svg', 'index.html'],
    ['Sarah', 29.703553, -95.499106, './index_files/profile_faces/sarah_minify.svg','index.html'],
    ['Erica', 29.803962, -95.397720, './index_files/profile_faces/erica_minify.svg','index.htm'],
    ['Yara', 29.747440, -95.586540, './index_files/profile_faces/yara_minify.svg','index.html'],
    ['Kyle', 29.533487, -95.205966, './index_files/profile_faces/kyle_minify.svg','index.html'],
    ['Richard', 29.946598, -95.688767, './index_files/profile_faces/richard_minify.svg','index.html'],
    ['Lou', 29.703400, -95.861848, './index_files/profile_faces/lou_minify.svg','index.html'],
    ['Mel', 29.737676, -95.500878, './index_files/profile_faces/mel_minify.svg','index.html'],
    //['Mahmoud', LAT, LONG, './index_files/profile_faces/mahmoud_minify.svg','index.html'],
    ['Omena', 29.748075, -95.572011, './index_files/profile_faces/omena_minify.svg','index.html']
  ];

//Function to initialize map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var bounds = new google.maps.LatLngBounds();


//Iterate through array of locations
  list.forEach(function (data, index, array) {

    //Create marker from each location in list
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(list[index][1], list[index][2]),
      map: map
    });

    //Add event listeners for clicking on markers/map so infowindow opens/closes
    var infowindow = new google.maps.InfoWindow();


    google.maps.event.addListener(map, 'click', function() {
      infowindow.close();
      });
    google.maps.event.addListener(marker, 'click', (function(marker, index){
      return function() {

        var content=list[index][0]+'<br><br><a href="' + list[index][4] + '">' + '<img src="'+list[index][3]+ '" style="width:125px;"></a>';
        infowindow.setContent(content);
        infowindow.open(map, marker);

      }
    })(marker,index));

    //Creates array of markers
    markers.push(marker);

    //Sets bounds for map
    bounds.extend(marker.position);

  });

  map.fitBounds(bounds);

  google.maps.event.addDomListener(window, 'load', initMap);

  function myClick(id) {
    google.maps.event.trigger(markers[id], 'click');
  };

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
* Fixed aesthetic issue associated with :hover problem via 'li a' spacing
*/


var activePage = $('.active').text();

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
