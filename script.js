
ourAjax = {


  ajax: function( ourOptions ) {

  }

},


options = {
  complete: function(){},
  data: {},
  error: function() {}, 
  headers: {},
  method: "",
  success: function() {},
  url: "",
  async: true,
}


ourOptions = options;

var domain = "http://jsonplaceholder.typicode.com/";
var path = "posts/4";
var type = "GET";
var success = function(data) {
  console.log(data);
};

ourOptions.url = domain + path;
ourOptions.type = type;
ourOptions.success = success;

$.ajax( ourOptions );   // jquery ajax way


// $ = ourAjax;
// ourAjax.ajax( ourOptions );




