$(document).ready(function () {
  var clickCount = 0;
  var imageUrl =
    "https://i.pinimg.com/originals/e2/97/8c/e2978ca3d3a608d8f3e3dac5c083f3cb.jpg";
  var citadelBgImg =
    "https://cdn-images-1.medium.com/max/1280/1*BArwiczvwUqxWu9OB1e7Sw.png";
  var imageArr = [
    "https://c4.wallpaperflare.com/wallpaper/588/5/300/rick-and-morty-toilets-hd-wallpaper-thumb.jpg",
  
    "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/03/pjimage-46.jpg?q=50&fit=crop&w=740&h=370",

    "https://vignette.wikia.nocookie.net/rickandmorty/images/7/74/S4e5_2019-12-29-14h10m35s619.png/revision/latest?cb=20191229202517",

    "https://filmdaily.co/wp-content/uploads/2018/06/rick-and-morty-pluto-1024x475.jpg",
  ];
  
    setBgImg(imageUrl);

  

  // hides next world navigation button
  $("#btn-next-world").hide();

  $("#start-adventure").click(function () {
    setBgImg(citadelBgImg);
    clearHomePageText();
    getBadAdvice();
    getRickAndMortyChar();

    // default thumbnail sizing
    $(".img-thumbnail").css("width", "100%");
    $(".img-thumbnail").css("height", "100%");

    $("#start-adventure").hide();
    $("#btn-next-world").show();
  });

  $("#btn-next-world").click(function () {
    clickCount =+ clickCount + 1;
    if (clickCount > 4){
      location.reload();
    }
    clearCards();
    setBgImg(imageArr[clickCount -1]);
    getBadAdvice();
    getRickAndMortyChar();

  });

  function getRickAndMortyChar(){
        let randomArr = []
        for (let i = 0; i < 4; i++){
            randomArr.push(Math.floor(Math.random() * 591))
        }
        $.ajax({
            url: "https://rickandmortyapi.com/api/character/" + randomArr,
            method: "GET"
          }).then(function(response){
            for (let i = 0; i < 4; i++) {
                var cardImgEl = $("<img>");
              cardImgEl.addClass("card-img-top mx-auto img-thumbnail");
              cardImgEl.attr(
                  "src",
                  response[i].image
              );
              $("#card-front-" +[i + 1]).addClass("card");
              $("#card-back-" + [i + 1]).addClass("card");
              $("#card-front-" +[i + 1]).attr("style", "height: 15rem;");
              $("#card-back-" + [i + 1]).attr("style", "height: 15rem;");
              $("#card-back-" + [i + 1]).attr("style", "font-family: 'Pacifico', cursive;");
              $("#card-front-" +[i + 1]).append(cardImgEl);
              $("#card-front-" +[i + 1]).append(
                  "<div class='card-block'><h5 class='card-title'>" + response[i].name + "</h5></div>"
              );
          }
  });

}

  // grabs 4 random advice
  function getBadAdvice(){
    $.ajax({
        url: "https://api.adviceslip.com/advice/search/a",
        method: "GET",
      }).then(function(response){
        // need to target advice response only
        for (let i = 0; i < 4; i++){
          $("#card-back-" + [i + 1]).text(JSON.parse(response).slips[Math.floor(Math.random() * 195)].advice);
        }
      });
  
} 

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
  function clearCards(){
    for (i = 0; i < 4; i++) {
      $("#card-front-" +[i + 1]).empty();
      $("#card-back-" +[i + 1]).empty();
    }
  }
  function clearHomePageText() {
    $("#jumbotron-text").empty();
    $("#blockquote-main").empty();
    $("#blockquote-cite-main").empty();
    $("#blockquote-cite-main").removeClass("blockquote-footer");
    $("#game-instructions").empty();
  }

});

