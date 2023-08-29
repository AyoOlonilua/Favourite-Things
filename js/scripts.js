$(document).ready(function() {
    $("form#favourite").submit(function(e) {
        let color = $("input#color").val();
        let food = $("input#food").val();
        let animal = $("input#animal").val();
        let snacks = $("input#snacks").val();
        let artiste = $("input#artiste").val();
        let club = $("input#club").val();

       const favourite = [color, food, animal, snacks, artiste, club];
       let first = favourite[0];
       let second = favourite[1];
       let third = favourite[2];

       let newFavourite = ["My Favourite things are; "]
       newFavourite.push(first);
       newFavourite.push(second);
       newFavourite.push(third);

       let everything = "";
       newFavourite.forEach(function(newFavourite) {
        everything += "<li>" + newFavourite + "</li>";
       });

       $("#result").html(everything);
        e.preventDefault();d
    });
});