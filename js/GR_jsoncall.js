
/*countURL - variable containing url used in ajax call
changing the &fields= portion changes the data you pull, removing it shows u all the data
changing the &format= portion may be irrelevent could mess up program if changed to jsonp
changing the &key= portion changes the google api key (AIzaSyCNy_ayHW3sdNi7FkYaAGbpQJFLE3XA_4M)
changing the &placeid= portion changes the business location being checked for reviews (ChIJhRp5g539SIYRJcFRMKj1MYc)
Google provides a website to use for finding a placeID, simply google : find place ID */
var countURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJhRp5g539SIYRJcFRMKj1MYc&key=AIzaSyCNy_ayHW3sdNi7FkYaAGbpQJFLE3XA_4M&fields=user_ratings_total&format=json"

/* tillNext used to set the delay on the refresh of the JSON within the wordpress site
may be irrelevant if the counter updates through refreshing the page*/
var tillNext = 5000;


/*.ajax method placed into a function incase of need to be reused */
function AjaxCall(){  
  $.ajax({
  type: "GET",
  url: countURL,
  data: "data",
  cache: "false",
  dataType: "json",
  jsonp: "callback",
  headers: {
'Access-Control-Allow-Credentials' : true,
'Access-Control-Allow-Origin':'*',
'Access-Control-Allow-Methods':'GET',
'Access-Control-Allow-Headers':'application/json',
},

/* logs data in console (F12 key to view) upon successful ajax call */
  success: function(response){
   console.log(response);


/* The two lines below are required if the counter for some 
reason relies on maintaining a connection with the web page to update*/
  $("#userReviews").empty();
  $("#userReviews").append(JSON.stringify(response, undefined, 2));


  },
/*Complete is used to check the status
 of the ajax call before attempting another one*/
  complete: function(response){
    setTimeout(AjaxCall, tillNext);
  }

})

};



/*setTimeout is a delay function but ajax is being called through it
if a timer for refresh is unnecessary this can be changed to
Ajaxcall(); instead of setTimeout(AjaxCall, tillNext); */
$(function(){
  setTimeout(AjaxCall, tillNext);
})