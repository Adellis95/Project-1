$(document).ready(function () {
  // var sunnyAudio = new Audio('screaming-sun-rick-and-morty.mp3');
  // sunnyAudio.play();
  var clickCount = 0;
  var imageUrl =
    "https://i.pinimg.com/originals/e2/97/8c/e2978ca3d3a608d8f3e3dac5c083f3cb.jpg";
  var portalGifImg =
    "https://realtimevfx.com/uploads/default/original/2X/9/9ec795306ce4c382f785537845c3c798aba60d07.gif";
  var citadelBgImg =
    "https://cdn-images-1.medium.com/max/1280/1*BArwiczvwUqxWu9OB1e7Sw.png";
  var imageArr = [
    "https://c4.wallpaperflare.com/wallpaper/588/5/300/rick-and-morty-toilets-hd-wallpaper-thumb.jpg",
  
    "https://wallpapercave.com/wp/wp1822736.jpg",

    "https://images6.alphacoders.com/633/thumb-1920-633294.png",

    "https://filmdaily.co/wp-content/uploads/2018/06/rick-and-morty-pluto-1024x475.jpg", "https://images6.alphacoders.com/909/thumb-1920-909641.png",
  ];

  var myManAudio = new Audio("my-man.mp3");
  var evilMortyAudio = new Audio(
    "rick-and-morty-soundtrack-evil-mortys-theme-qua.mp3"
  );

  setBgImg(imageUrl);

  // hides next world navigation button
  $("#btn-next-world").hide();

  // hide the character cards group to avoiding ghosting on homepage
  $("#character-cards-group").hide();

  $("#start-adventure").click(function () {
    
    // myManAudio.play();
    // evilMortyAudio.play();
    setBgImg(citadelBgImg);
    clearHomePageText();
    getBadAdvice();
    getRickAndMortyChar();

    // default thumbnail sizing
    $(".img-thumbnail").css("width", "100%");
    $(".img-thumbnail").css("height", "100%");

    $("#start-adventure").hide();
    $("#btn-next-world").show();
    $("#character-cards-group").show();
  });
  // changes background image, cards, refreshes site if button is clicked more than 4 times
  $("#btn-next-world").click(function () {

    // `myManAudio.play();`
    // evilMortyAudio.play();
    clickCount =+ clickCount + 1;
    if (clickCount > 5){

      location.reload();
    }

    clearCards();
    setBgImg(imageArr[clickCount - 1]);
    getBadAdvice();
    getRickAndMortyChar();
  });

  function getRickAndMortyChar() {
    let randomArr = [];
    for (let i = 0; i < 4; i++) {
      randomArr.push(Math.floor(Math.random() * 591));
    }
    $.ajax({
      url: "https://rickandmortyapi.com/api/character/" + randomArr,
      method: "GET",
    }).then(function (response) {
      for (let i = 0; i < 4; i++) {
        var cardImgEl = $("<img>");
        cardImgEl.addClass("card-img-top mx-auto img-thumbnail");
        cardImgEl.attr("src", response[i].image);
        $("#card-front-" + [i + 1]).addClass("card");
        $("#card-back-" + [i + 1]).addClass("card");
        $("#card-front-" + [i + 1]).attr("style", "height: 15rem;");
        $("#card-back-" + [i + 1]).attr("style", "height: 15rem;");
        $("#card-back-" + [i + 1]).attr(
          "style",
          "font-family: MuseoModerno, cursive;"
        );
        $("#card-front-" + [i + 1]).append(cardImgEl);
        $("#card-front-" + [i + 1]).append(
          "<div class='card-block'><h5 class='card-title'>" +
            response[i].name +
            "</h5></div>"
        );
      }
    });
  }

  // grabs 4 random advice
  function getBadAdvice() {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://badadvice.rest/api/count=29",
        method: "GET",
      }).then(function(response){
        // sets random advice to cards
        console.log(response[0]);
        for (let i = 0; i < 4; i++){
          $("#card-back-" + [i + 1]).text(response[i]);
        }
      });
} 
  
  //   fixed footer styling
  $(".footer").css("position", "fixed");
  $(".footer").css("left", "0");
  $(".footer").css("bottom", "0");
  $(".footer").css("width", "100%");
  $(".footer").css("height", "10vh");

  function setPortalGif(URL) {
    $("#background-gif").css("background-image", "url(" + URL + ")");
    $("#background-gif").css("background-size", "100% 50%");
    $("#background-gif").css("background-attachment", "fixed");
    $("#background-gif").css("height", "50vh");
  }

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
  function clearCards() {
    for (i = 0; i < 4; i++) {
      $("#card-front-" + [i + 1]).empty();
      $("#card-back-" + [i + 1]).empty();
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
