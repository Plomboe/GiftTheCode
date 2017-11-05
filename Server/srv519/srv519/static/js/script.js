$.ajax({
  url: 'http://jsonplaceholder.typicode.com/posts',
  data: {
     format: 'json'
  },
  error: function() {
     $('#first').html('<p>An error has occurred</p>');
  },
  dataType: 'jsonp',
  success: function(data) {
    //  var $title = $('<h1>').text(data.talks[0].talk_title);
    //  var $description = $('<p>').text(data.talks[0].talk_description);
    //  $('#info')
    //     .append($title)
    //     .append($description);
    
    // console.log("hi");
    //   var $first = $("<h3>").text(data[0].title);
    //   var $second = $("<h3>").text(data[1].title);
    //   var $third = $("<h3>").text(data[2].title);
    //   var $fourth = $("<h3>").text(data[3].title);
    //   $("#first").append($first);
    //   $("#second").append($second);
    //   $("#third").append($third);
    //   $("#fourth").append($fourth);

    // console.log(data);
  },
  type: 'GET'
});