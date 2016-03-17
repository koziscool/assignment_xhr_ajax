
var ourAjax = {
  ajax: function( options ) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.type, options.url, options.async);

    var headerType =  'Content-Type';
    var codingType = 'application/x-www-form-urlencoded';
    if( options.type.toUpperCase() == "POST") {
      xhr.setRequestHeader( headerType, codingType );
    }

    xhr.onload = function ( event ) {
      if ( xhr.readyState === 4 ) {
        if ( xhr.status >= 200 && xhr.status <= 300) {
          options.success(xhr.responseText);
        } else {
          options.error(xhr, xhr.status, xhr.statusText)
        }
        options.complete(xhr, xhr.status)
      }
    };

    // xhr.send( JSON.stringify( options.data ) );
    xhr.send( options.data );
  }
};


var blankOptions = {
  complete: function(){},
  data: {},
  error: function() {}, 
  headers: {},
  method: "",
  success: function() {},
  url: "",
  async: true,
};


var options = blankOptions;

var domain = "http://jsonplaceholder.typicode.com/";
var path = "posts";
var type = "POST";
// var data = { foo: 'bar'};
var data = "userId=1&title=foo&body=bar";

console.log( JSON.stringify(data) );

var success = function(data) {
  console.log("it gets here");
  console.log(data);
};

var complete = function(xhr, status) {
  console.log("The request is complete with status: " + status);
  console.dir( xhr );
};

var error = function(xhr, status, errorThrown) {
  console.log( "Sorry, there was a problem!" );
  console.log( "Error: " + errorThrown );
  console.log( "Status: " + status );
  console.dir( xhr );
}

options.data = data;
options.url = domain + path;
options.type = type;
options.success = success;
options.complete = complete;
options.error = error;

var $ = ourAjax;

$.ajax( options );   // jquery ajax way


