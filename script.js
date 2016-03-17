
var ourAjax = {


  ajax: function( options ) {
    var xhr = new XMLHttpRequest();

    xhr.open(options.type, options.url, options.async);


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

    

    xhr.send();
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
var path = "posts/4";
var type = "GET";
var success = function(data) {
  console.log("it gets here");
  console.log(data);
};
var complete = function(xhr, status) {
  alert("The request is complete with status: " + status)
};
var error = function(xhr, status, errorThrown) {
  alert( "Sorry, there was a problem!" );
  console.log( "Error: " + errorThrown );
  console.log( "Status: " + status );
  console.dir( xhr );
}

options.url = domain + path;
options.type = type;
options.success = success;
options.complete = complete;
options.error = error;

var $ = ourAjax;

$.ajax( options );   // jquery ajax way


