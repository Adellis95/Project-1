$(document).ready(function () {
  // var sunnyAudio = new Audio('screaming-sun-rick-and-morty.mp3');
  // sunnyAudio.play();
  var clickCount = 0;
  var imageUrl =
    "https://i.pinimg.com/originals/e2/97/8c/e2978ca3d3a608d8f3e3dac5c083f3cb.jpg";
  var citadelBgImg =
    "https://cdn-images-1.medium.com/max/1280/1*BArwiczvwUqxWu9OB1e7Sw.png";
  var endPageImg =
    "https://imgix.bustle.com/inverse/ab/5a/e8/e9/8a19/45d7/899b/75356b021017/the-quest-for-szechuan-sauce-has-never-looked-so-sweet.gif";
    // "https://i.kinja-img.com/gawker-media/image/upload/t_original/vx7nhukveyirfjyzyibn.png";
  var imageArr = [
    "https://c4.wallpaperflare.com/wallpaper/588/5/300/rick-and-morty-toilets-hd-wallpaper-thumb.jpg",

    "https://wallpapercave.com/wp/wp1822736.jpg",

    "https://images6.alphacoders.com/633/thumb-1920-633294.png",

    "https://filmdaily.co/wp-content/uploads/2018/06/rick-and-morty-pluto-1024x475.jpg",
    "https://images6.alphacoders.com/909/thumb-1920-909641.png",
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

  // changes background image, cards
  $("#btn-next-world").click(function () {
    // evilMortyAudio.play();
    clickCount = +clickCount + 1;

    clearCards();
    setBgImg(imageArr[clickCount - 1]);
    getBadAdvice();
    getRickAndMortyChar();

    if (clickCount == 6){
      evilMortyAudio.play();
      $("#character-cards-group").hide();
      $("#btn-next-world").text("Restart Adventure!");
      setBgImg(endPageImg);
      $("#game-instructions").append(
        "<p><b>Rick Sanchez :</b> Because that's what this is all about, Morty.<br>"+
        "<b>Morty Smith :</b> Szechuan?<br>"+
        "<b>Rick Sanchez :</b> That's my one-armed man! I'm not driven by avenging my dead family, Morty! That was fake. I-I-I'm driven by finding that McNugget sauce.<br>"+
        "<b>Morty Smith :</b> McNuggets?<br>"+
        "<b>Rick Sanchez :</b> I want that Mulan McNugget sauce, Morty! That's my series arc, Morty.<br>"+
        "<b>Morty Smith :</b> What the hell?<br>"+
        "<b>Rick Sanchez :</b> If it takes nine seasons, I want my McNugget dipping sauce, Szechuan sauce, Morty.<br>"+
        "<b>Morty Smith :</b> What are you talking about, Rick?<br>"+
        "<b>Rick Sanchez :</b> That's what's gonna take us all the way to the end, Morty. Season - Nine more seasons, Morty. Nine more seasons until I get that dipping Szechuan sauce. What is that? For 97 more years, Morty! I want that McNugget sauce, Morty.</p>"
      );
    } else if (clickCount == 7) {
      location.reload();
    }
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
        cardImgEl.addClass("card-img-top mx-auto img-fluid");
        cardImgEl.attr("src", response[i].image);
        // cardImgEl.attr("height", "200px");
        // cardImgEl.attr("width", "200px");
        // $("#card-front-" + [i + 1]).addClass("card");
        // $("#card-back-" + [i + 1]).addClass("card");
        // $("#card-front-" + [i + 1]).attr("style", "height: 15rem;");
        // $("#card-back-" + [i + 1]).attr("style", "height: 15rem;");
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
      url:
        "https://cors-anywhere.herokuapp.com/https://badadvice.rest/api/count=29",
      method: "GET",
    }).then(function (response) {
      // sets random advice to cards
      console.log(response[0]);
      for (let i = 0; i < 4; i++) {
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
