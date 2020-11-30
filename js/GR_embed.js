/*
Use with <div id="google-reviews"></div> if you want to embed reviews into a webpage.
Note: you will need to make sure the style.css is also linked correctly within the html
*/

$(document).ready(function($) {
  $("#google-reviews").googlePlaces({
    placeId: 'ChIJhRp5g539SIYRJcFRMKj1MYc' ,
    render: ['reviews'] ,
    min_rating: 0 ,
    max_rows: 4

  });
});
