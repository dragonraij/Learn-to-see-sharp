
(function() {
  var flickerAPI = "http://gateway.marvel.com:80/v1/public/characters?apikey=deefa48fe399ff4dac20626ecce6f5e5";
  $.getJSON( flickerAPI, {

  })
    .done(function( data ) {
      $.each( data.data.results, function( i, item ) {
        $( "<img>" ).attr( "src", item.thumbnail.path+".jpg" ).appendTo( "#char_images" );
        if ( i === 0 ) {
          return false;
        }
      });
    });
})();
