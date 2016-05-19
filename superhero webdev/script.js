
(function() {
  var flickerAPI = "http://gateway.marvel.com:80/v1/public/characters?apikey=deefa48fe399ff4dac20626ecce6f5e5";
  $.getJSON( flickerAPI, {

  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });
    });
})();
