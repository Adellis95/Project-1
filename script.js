$(document).ready(function () {
  // set initial background image
  var imageUrl =
    "https://i.pinimg.com/originals/e2/97/8c/e2978ca3d3a608d8f3e3dac5c083f3cb.jpg";

  setBgImg(imageUrl);

  // citadel of the ricks background
  // var citadelBgImg =
  //   "https://vignette.wikia.nocookie.net/rickandmorty/images/8/85/Rick-and-morty-citadel-of-rick-750x411.jpg/revision/latest?cb=20160903134247";

  var citadelBgImg =
    "https://cdn-images-1.medium.com/max/1280/1*BArwiczvwUqxWu9OB1e7Sw.png";

  // world 3 = citadel and world 4 = world ender
  var worldArray = [3, 4];

  console.log("hello project 1");

  // start adventure button listener
  $("#startAdv").click(function () {
    console.log("You clicked me!");

    // set the first world
    setBgImg(citadelBgImg);
  });

  function setBgImg(URL) {
    $("body").css("background-image", "url(" + URL + ")");
    $("body").css("background-size", "cover");
    $("body").css("background-attachment", "fixed");
    $("content").css("width", "50%");
    $("content").css("padding", "40px");
    $("content").css("margin", "100px auto");
  }
});
