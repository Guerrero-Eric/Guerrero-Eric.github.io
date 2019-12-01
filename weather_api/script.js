function makeApiCall( url, callback ){
    var xhr = new XMLHttpRequest();
  
    xhr.addEventListener( 'load', function(){
      var response = JSON.parse(xhr.responseText);
      if ( callback ){
        callback( response );
      }
    });
  
    xhr.open( 'GET', url );
    xhr.send();
  }
  
  makeApiCall( 'https://freegeoip.app/json/', function( data ){
    document.getElementById( 'city' ).innerHTML = data.city + ', ' + data.region_name;  
    
    var latitude = data.latitude;
    var longitude = data.longitude;
  
    makeApiCall( 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=imperial&APPID=ef4d047f0140df5f44f2c48843408179', function( data ){
      var weather = data.weather[0].main;
      var weatherDescription = data.weather[0].description;
      document.getElementById( 'weather' ).innerHTML = weatherDescription;
  
      loadBackground( latitude, longitude, weather );
    });  
  });
  
  function loadBackground( latitude, longitude, weather ) {
    var script_element = document.createElement('script');
  
    script_element.src = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f68d91290adbddc4257c093376306448&lat=' + latitude + '&lon=' + longitude + '&accuracy=1&tags=' + weather + '&sort=relevance&extras=url_l&format=json';
  
    document.getElementsByTagName('head')[0].appendChild( script_element );
  }
  
  function jsonFlickrApi( data ){
    var photo = data.photos.photo[0];
    document.querySelector( 'body' ).style.backgroundImage = 'url("' + photo.url_l + '")';
  }
  
  