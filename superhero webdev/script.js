
(function() {
  var characterAPI = "http://gateway.marvel.com:80/v1/public/characters?limit=5&offset="+Math.floor(Math.random()*1485)+"&apikey=deefa48fe399ff4dac20626ecce6f5e5";
  $.getJSON( characterAPI, {

  })
    .done(function( data ) {
      $.each( data.data.results, function( i, item ) {
        $( "<img>" ).attr( "src", item.thumbnail.path+".jpg" ).appendTo( "#char_image" );
          $( "#char_name" ).append( item.name);
          $( "#char_bio" ).append( "<p>"+item.description+"</p>" );
        if ( i === 0 ) {
          return false;
        }
      });
    });
})();


(function() {
  var comicAPI = "http://gateway.marvel.com:80/v1/public/comics?limit=5&offset="+Math.floor(Math.random()*36893)+"&apikey=deefa48fe399ff4dac20626ecce6f5e5";
  $.getJSON( comicAPI, {

  })
    .done(function( data ) {
      $.each( data.data.results, function( i, item ) {
        $( "<img>" ).attr( "src", item.thumbnail.path+".jpg" ).appendTo( "#comic_image" );
          $( "#comic_name" ).append( item.title);
          $( "#comic_description" ).append( "<p>"+item.description+"</p>" );
        if ( i === 0 ) {
          return false;
        }
      });
    });
})();
