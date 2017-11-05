// $.ajax({
//   url: 'http://jsonplaceholder.typicode.com/posts',
//   data: {
//      format: 'json',
//   },
//   error: function() {
//      $('#first').html('<p>An error has occurred</p>');
//   },
//   dataType: 'jsonp',
//   success: function(data) {
//     //  var $title = $('<h1>').text(data.talks[0].talk_title);
//     //  var $description = $('<p>').text(data.talks[0].talk_description);
//     //  $('#info')
//     //     .append($title)
//     //     .append($description);
    
//     // console.log("hi");
//     //   var $first = $("<h3>").text(data[0].title);
//     //   var $second = $("<h3>").text(data[1].title);
//     //   var $third = $("<h3>").text(data[2].title);
//     //   var $fourth = $("<h3>").text(data[3].title);
//     //   $("#first").append($first);
//     //   $("#second").append($second);
//     //   $("#third").append($third);
//     //   $("#fourth").append($fourth);

//     console.log(data);
//   },
//   type: 'GET'
// });

$(function(){

$("#search-box").on("change", function(){

  //If you press Enter and the string is not null
  if (document.getElementById("search-box").value != ''){
    $(".mainArea").empty();
  }

  console.log("hello");
  fetch("Mockdata_Members.json").then(response => response.json())
  .then(function(jsonResponse){
    //For how every many users, cycle through them
    for (i=0; i<jsonResponse.length; i++){
      //If a search result matches with a user in JSON, display it
      if (document.getElementById("search-box").value == jsonResponse[i].FirstName){
        console.log(jsonResponse[i]);
        //remove other results

        //Add new results
        var fullName = $("<h5>").addClass("").text(`${jsonResponse[i].FirstName}  ${jsonResponse[i].LastName}`);
        var memberNum = $("<p>").addClass("").text(`Member number: ${jsonResponse[i].MemberNum}`);
        var primaryPhone = $("<p>").addClass("").text(`Primary phone number: ${jsonResponse[i].PrimaryPhone}`);
        var secondaryPhone = $("<p>").addClass("").text(`Secondary phone number: ${jsonResponse[i].SecondaryPhone}`);
        var address = $("<p>").addClass("").text(`Address: ${jsonResponse[i].Address}`);
        var city = $("<p>").addClass("").text(`City: ${jsonResponse[i].City}`);
        var postalCode = $("<p>").addClass("").text(`Postal Code: ${jsonResponse[i].PostalCode}`);
        var country = $("<p>").addClass("").text(`Country: ${jsonResponse[i].Country}`);
        //Put wrap this all in a col-sm4
        var wrapper = $("<div>").addClass("col-sm-4 wide").append(fullName, memberNum, primaryPhone, secondaryPhone, address, city, postalCode, country);
        $("#mainArea").append(wrapper);
      }

      //Last Name
      if (document.getElementById("search-box").value == jsonResponse[i].LastName){
        console.log(jsonResponse[i]);
        //remove other results

        //Add new results
        var fullName = $("<h5>").addClass("").text(`${jsonResponse[i].FirstName}  ${jsonResponse[i].LastName}`);
        var memberNum = $("<p>").addClass("").text(`Member number: ${jsonResponse[i].MemberNum}`);
        var primaryPhone = $("<p>").addClass("").text(`Primary phone number: ${jsonResponse[i].PrimaryPhone}`);
        var secondaryPhone = $("<p>").addClass("").text(`Secondary phone number: ${jsonResponse[i].SecondaryPhone}`);
        var address = $("<p>").addClass("").text(`Address: ${jsonResponse[i].Address}`);
        var city = $("<p>").addClass("").text(`City: ${jsonResponse[i].City}`);
        var postalCode = $("<p>").addClass("").text(`Postal Code: ${jsonResponse[i].PostalCode}`);
        var country = $("<p>").addClass("").text(`Country: ${jsonResponse[i].Country}`);
        //Put wrap this all in a col-sm4
        var wrapper = $("<div>").addClass("col-sm-4 wide").append(fullName, memberNum, primaryPhone, secondaryPhone, address, city, postalCode, country);
        $("#mainArea").append(wrapper);
      }

      //MemberNum
      if (document.getElementById("search-box").value == jsonResponse[i].MemberNum){
        console.log(jsonResponse[i]);
        //remove other results

        //Add new results
        var fullName = $("<h5>").addClass("").text(`${jsonResponse[i].FirstName}  ${jsonResponse[i].LastName}`);
        var memberNum = $("<p>").addClass("").text(`Member number: ${jsonResponse[i].MemberNum}`);
        var primaryPhone = $("<p>").addClass("").text(`Primary phone number: ${jsonResponse[i].PrimaryPhone}`);
        var secondaryPhone = $("<p>").addClass("").text(`Secondary phone number: ${jsonResponse[i].SecondaryPhone}`);
        var address = $("<p>").addClass("").text(`Address: ${jsonResponse[i].Address}`);
        var city = $("<p>").addClass("").text(`City: ${jsonResponse[i].City}`);
        var postalCode = $("<p>").addClass("").text(`Postal Code: ${jsonResponse[i].PostalCode}`);
        var country = $("<p>").addClass("").text(`Country: ${jsonResponse[i].Country}`);
        //Put wrap this all in a col-sm4
        var wrapper = $("<div>").addClass("col-sm-4 wide").append(fullName, memberNum, primaryPhone, secondaryPhone, address, city, postalCode, country);
        $("#mainArea").append(wrapper);
      }


      //Primary Phone
      if (document.getElementById("search-box").value == jsonResponse[i].PrimaryPhone){
        console.log(jsonResponse[i]);
        //remove other results

        //Add new results
        var fullName = $("<h5>").addClass("").text(`${jsonResponse[i].FirstName}  ${jsonResponse[i].LastName}`);
        var memberNum = $("<p>").addClass("").text(`Member number: ${jsonResponse[i].MemberNum}`);
        var primaryPhone = $("<p>").addClass("").text(`Primary phone number: ${jsonResponse[i].PrimaryPhone}`);
        var secondaryPhone = $("<p>").addClass("").text(`Secondary phone number: ${jsonResponse[i].SecondaryPhone}`);
        var address = $("<p>").addClass("").text(`Address: ${jsonResponse[i].Address}`);
        var city = $("<p>").addClass("").text(`City: ${jsonResponse[i].City}`);
        var postalCode = $("<p>").addClass("").text(`Postal Code: ${jsonResponse[i].PostalCode}`);
        var country = $("<p>").addClass("").text(`Country: ${jsonResponse[i].Country}`);
        //Put wrap this all in a col-sm4
        var wrapper = $("<div>").addClass("col-sm-4 wide").append(fullName, memberNum, primaryPhone, secondaryPhone, address, city, postalCode, country);
        $("#mainArea").append(wrapper);
      }

      //Secondary Phone
      if (document.getElementById("search-box").value == jsonResponse[i].SecondaryPhone){
        console.log(jsonResponse[i]);
        //remove other results

        //Add new results
        var fullName = $("<h5>").addClass("").text(`${jsonResponse[i].FirstName}  ${jsonResponse[i].LastName}`);
        var memberNum = $("<p>").addClass("").text(`Member number: ${jsonResponse[i].MemberNum}`);
        var primaryPhone = $("<p>").addClass("").text(`Primary phone number: ${jsonResponse[i].PrimaryPhone}`);
        var secondaryPhone = $("<p>").addClass("").text(`Secondary phone number: ${jsonResponse[i].SecondaryPhone}`);
        var address = $("<p>").addClass("").text(`Address: ${jsonResponse[i].Address}`);
        var city = $("<p>").addClass("").text(`City: ${jsonResponse[i].City}`);
        var postalCode = $("<p>").addClass("").text(`Postal Code: ${jsonResponse[i].PostalCode}`);
        var country = $("<p>").addClass("").text(`Country: ${jsonResponse[i].Country}`);
        //Put wrap this all in a col-sm4
        var wrapper = $("<div>").addClass("col-sm-4 wide").append(fullName, memberNum, primaryPhone, secondaryPhone, address, city, postalCode, country);
        $("#mainArea").append(wrapper);
      }

      //Address
      if (document.getElementById("search-box").value == jsonResponse[i].Address){
        console.log(jsonResponse[i]);
        //remove other results

        //Add new results
        var fullName = $("<h5>").addClass("").text(`${jsonResponse[i].FirstName}  ${jsonResponse[i].LastName}`);
        var memberNum = $("<p>").addClass("").text(`Member number: ${jsonResponse[i].MemberNum}`);
        var primaryPhone = $("<p>").addClass("").text(`Primary phone number: ${jsonResponse[i].PrimaryPhone}`);
        var secondaryPhone = $("<p>").addClass("").text(`Secondary phone number: ${jsonResponse[i].SecondaryPhone}`);
        var address = $("<p>").addClass("").text(`Address: ${jsonResponse[i].Address}`);
        var city = $("<p>").addClass("").text(`City: ${jsonResponse[i].City}`);
        var postalCode = $("<p>").addClass("").text(`Postal Code: ${jsonResponse[i].PostalCode}`);
        var country = $("<p>").addClass("").text(`Country: ${jsonResponse[i].Country}`);
        //Put wrap this all in a col-sm4
        var wrapper = $("<div>").addClass("col-sm-4 wide").append(fullName, memberNum, primaryPhone, secondaryPhone, address, city, postalCode, country);
        $("#mainArea").append(wrapper);
      }

      //City
      if (document.getElementById("search-box").value == jsonResponse[i].City){
        console.log(jsonResponse[i]);
        //remove other results

        //Add new results
        var fullName = $("<h5>").addClass("").text(`${jsonResponse[i].FirstName}  ${jsonResponse[i].LastName}`);
        var memberNum = $("<p>").addClass("").text(`Member number: ${jsonResponse[i].MemberNum}`);
        var primaryPhone = $("<p>").addClass("").text(`Primary phone number: ${jsonResponse[i].PrimaryPhone}`);
        var secondaryPhone = $("<p>").addClass("").text(`Secondary phone number: ${jsonResponse[i].SecondaryPhone}`);
        var address = $("<p>").addClass("").text(`Address: ${jsonResponse[i].Address}`);
        var city = $("<p>").addClass("").text(`City: ${jsonResponse[i].City}`);
        var postalCode = $("<p>").addClass("").text(`Postal Code: ${jsonResponse[i].PostalCode}`);
        var country = $("<p>").addClass("").text(`Country: ${jsonResponse[i].Country}`);
        //Put wrap this all in a col-sm4
        var wrapper = $("<div>").addClass("col-sm-4 wide").append(fullName, memberNum, primaryPhone, secondaryPhone, address, city, postalCode, country);
        $("#mainArea").append(wrapper);
      }

      //PostalCode
      if (document.getElementById("search-box").value == jsonResponse[i].PostalCode){
        console.log(jsonResponse[i]);
        //remove other results

        //Add new results
        var fullName = $("<h5>").addClass("").text(`${jsonResponse[i].FirstName}  ${jsonResponse[i].LastName}`);
        var memberNum = $("<p>").addClass("").text(`Member number: ${jsonResponse[i].MemberNum}`);
        var primaryPhone = $("<p>").addClass("").text(`Primary phone number: ${jsonResponse[i].PrimaryPhone}`);
        var secondaryPhone = $("<p>").addClass("").text(`Secondary phone number: ${jsonResponse[i].SecondaryPhone}`);
        var address = $("<p>").addClass("").text(`Address: ${jsonResponse[i].Address}`);
        var city = $("<p>").addClass("").text(`City: ${jsonResponse[i].City}`);
        var postalCode = $("<p>").addClass("").text(`Postal Code: ${jsonResponse[i].PostalCode}`);
        var country = $("<p>").addClass("").text(`Country: ${jsonResponse[i].Country}`);
        //Put wrap this all in a col-sm4
        var wrapper = $("<div>").addClass("col-sm-4 wide").append(fullName, memberNum, primaryPhone, secondaryPhone, address, city, postalCode, country);
        $("#mainArea").append(wrapper);
      }

      //Country
      if (document.getElementById("search-box").value == jsonResponse[i].Country){
        console.log(jsonResponse[i]);
        //remove other results

        //Add new results
        var fullName = $("<h5>").addClass("").text(`${jsonResponse[i].FirstName}  ${jsonResponse[i].LastName}`);
        var memberNum = $("<p>").addClass("").text(`Member number: ${jsonResponse[i].MemberNum}`);
        var primaryPhone = $("<p>").addClass("").text(`Primary phone number: ${jsonResponse[i].PrimaryPhone}`);
        var secondaryPhone = $("<p>").addClass("").text(`Secondary phone number: ${jsonResponse[i].SecondaryPhone}`);
        var address = $("<p>").addClass("").text(`Address: ${jsonResponse[i].Address}`);
        var city = $("<p>").addClass("").text(`City: ${jsonResponse[i].City}`);
        var postalCode = $("<p>").addClass("").text(`Postal Code: ${jsonResponse[i].PostalCode}`);
        var country = $("<p>").addClass("").text(`Country: ${jsonResponse[i].Country}`);
        //Put wrap this all in a col-sm4
        var wrapper = $("<div>").addClass("col-sm-4 wide").append(fullName, memberNum, primaryPhone, secondaryPhone, address, city, postalCode, country);
        $("#mainArea").append(wrapper);
      }
    }
  });
});


});