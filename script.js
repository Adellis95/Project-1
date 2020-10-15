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
    let cardDisplay= $(`
    <div class="container">
    <div class="row">
    <div class="card col-md-6" style="width: 18rem;">
  <img src="https://rickandmortyapi.com/api/character/avatar/274.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Quantum Rick</p>
  </div>
</div>
<div class="card col-md-6" style="width: 18rem;">
  <img src="https://rickandmortyapi.com/api/character/avatar/48.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Black Rick</p>
  </div>
</div>
</div>
<div class="row">
<div class="card col-md-6" style="width: 18rem;">
  <img src="https://rickandmortyapi.com/api/character/avatar/267.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Plumber Rick</p>
  </div>
</div>
<div class="card col-md-6" style="width: 18rem;">
  <img src="https://rickandmortyapi.com/api/character/avatar/119.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Evil Rick</p>
  </div>
</div>
</div>
</div>
`)
$("#test").append(cardDisplay);
    // let queryURL = "https://rickandmortyapi.com/api/location/3";
    // $.ajax({
    //   url: queryURL,
    //   method: "GET",
    // }).then(function (res) {
    //   for (i = 0; i < res.residents.length; i++) {
    //     let names = res.residents[i];
    //     $.ajax({
    //       url: names,
    //       method: "GET",
    //     }).then(function (res) {
    //       let nameList = res.name.slice(0, res.name.length);

    //       console.log(nameList);
    //       let citadelNames = $(`
    //       <div class="card">
    //       <p>${nameList[Math.floor(Math.random() * nameList.length)]}</p>
    //       </div>
    //       `);
    //       $("#test").append(citadelNames);
    //     });
    //   }
    // });

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
