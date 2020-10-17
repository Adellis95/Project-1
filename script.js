$(document).ready(function () {

    var imageUrl =
      "https://i.pinimg.com/originals/e2/97/8c/e2978ca3d3a608d8f3e3dac5c083f3cb.jpg";
    var citadelBgImg =
      "https://cdn-images-1.medium.com/max/1280/1*BArwiczvwUqxWu9OB1e7Sw.png";
  
    setBgImg(imageUrl);
  
    // hides next world navigation button
    $("#btn-next-world").hide();
  
    $("#start-adventure").click(function () {
      setBgImg(citadelBgImg);
      clearHomePageText();
      addCards();
      addCards1();
      addCards3();
  
      // default thumbnail sizing
      $(".img-thumbnail").css("width", "100%");
      $(".img-thumbnail").css("height", "100%");
  
      $("#start-adventure").hide();
      $("#btn-next-world").show();
    });
  
  //   fixed footer styling

  $(".footer").css("position", "fixed");
  $(".footer").css("left", "0");
  $(".footer").css("bottom", "0");
  $(".footer").css("width", "100%");
  $(".footer").css("height", "10vh");

  function setBgImg(URL) {
    $(".jumbotron").css("background-image", "url(" + URL + ")");
    $(".jumbotron").css("background-size", "100% 50%");
    // $(".jumbotron").css("background-position", "center center");
    $(".jumbotron").css("background-attachment", "fixed");
    // $(".jumbotron").css("background-repeat", "no");
    $(".jumbotron").css("height", "50vh");
    // $("content").css("width", "50%");
    // $("content").css("padding", "40px");
    // $("content").css("margin", "100px auto");
  }

  function clearHomePageText() {
    $("#jumbotron-text").empty();
    $("#blockquote-main").empty();
    $("#blockquote-cite-main").empty();
    $("#blockquote-cite-main").removeClass("blockquote-footer");
    $("#game-instructions").empty();
  }

  function addCards() {
    var cardImgEl = $("<img>");

    cardImgEl.addClass("card-img-top mx-auto img-thumbnail");
    cardImgEl.attr(
      "src",
      "https://rickandmortyapi.com/api/character/avatar/274.jpeg"
    );
    // cardImgEl.attr("width", "100px");
    // cardImgEl.attr("height", "150px");
    $("#character-card-1").addClass("card bg-light");
    $("#character-card-1").attr("style", "height: 15rem;");
    $("#character-card-1").append(cardImgEl);
    $("#character-card-1").append(
      "<div class='card-block'><h5 class='card-title'>Some Rick</h5></div>"
    );
  }

  //   https://rickandmortyapi.com/api/character/avatar/119.jpeg
  function addCards1() {
    var cardImgEl = $("<img>");

    cardImgEl.addClass("card-img-top mx-auto img-thumbnail");
    cardImgEl.attr(
      "src",
      "https://rickandmortyapi.com/api/character/avatar/267.jpeg"
    );
    // cardImgEl.attr("width", "100px");
    // cardImgEl.attr("height", "150px");
    $("#character-card-2").addClass("card");
    $("#character-card-2").attr("style", "height: 15rem;");
    $("#character-card-2").append(cardImgEl);
    $("#character-card-2").append(
      "<div class='card-block'><h5 class='card-title'>Some Rick</h5></div>"
    );
  }

  function addCards3() {
    var cardImgEl = $("<img>");

    cardImgEl.addClass("card-img-top mx-auto img-thumbnail");
    cardImgEl.attr(
      "src",
      "https://rickandmortyapi.com/api/character/avatar/119.jpeg"
    );
    // cardImgEl.attr("width", "5rem");
    // cardImgEl.attr("height", "10px");
    $("#character-card-3").addClass("card");
    $("#character-card-3").attr("style", "height: 15rem;");
    $("#character-card-3").append(cardImgEl);
    $("#character-card-3").append(
      "<div class='card-block'><h5 class='card-title'>Some Rick</h5></div>"
    );
  }
});

// Ajax calls
$("#character-card-1").click(function(){
  console.log("card 1 clicked");
  $.ajax({
    url: "https://rickandmortyapi.com/api/location",
    method: "GET",
  }).then(function(response) {
   console.log(response);
   for(i = 0; i < response.data.length; i++){
    console.log(response.data[i].images.fixed_width.url)
  }
   
  });


  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://badadvice.rest/api",
    method: "GET",
  }).then(function(response) {
   console.log(response);
   
  });
});
$("#character-card-2").click(function(){
  console.log("card 2 clicked");
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://badadvice.rest/api",
    method: "GET",
  }).then(function(response) {
   console.log(response);
   
  });
});
$("#character-card-3").click(function(){
  console.log("card 3 clicked");
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://badadvice.rest/api",
    method: "GET",
  }).then(function(response) {
   console.log(response);
   
  });
});

