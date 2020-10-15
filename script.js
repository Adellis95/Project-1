console.log("hello project 1");

$("#startAdv").click(function(){
    console.log("You clicked me!")
        let queryURL = "https://rickandmortyapi.com/api/location/3";
        $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(res) {
      console.log(res.residents);
      for(i=0;i<res.residents.length;i++){
          let names = res.residents;
          let citadelNames = $(`
          <div class="card">
          <p>${names[i]}</p>
          </div>
          `)
    $("#test").append(citadelNames);

          
    }
})
});

