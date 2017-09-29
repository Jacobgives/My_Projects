$(document).ready(function(){
    for (var i = 1; i < 152; i++) {
        $("#pokeImg").append(`<img id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`)   
    }
/*     $.get('https://pokeapi.co/api/v2/pokemon/2/', function(data){
        console.log(data);
    },'json'); */

    $('#pokeImg img').click(function(){
        var pokeNum = $(this).attr('id');
        $.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}/`, function(data){
            var name = data.name;
            var type = data.types;
            var height = data.height;
            var weight = data.weight;
            var pokeHtml = '';
            pokeHtml = `<h1 id='pokeTitle'>${name}</h1>`;
            pokeHtml += `<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum}.png'>`;
            pokeHtml += "<h4>Types</h4>";
            pokeHtml += "<ul>"

            for (var index = 0; index < type.length; index++) {
                console.log(type[index]);
                pokeHtml += `<li>${type[index].type.name}</li>`; 

            }  

            pokeHtml += "</ul>";
            pokeHtml += "<h4>Height</h4>";
            pokeHtml += `<p>${height}</p>`;
            pokeHtml += "<h4>Weight</h4>";
            pokeHtml += `<p>${weight}</p>`;            
            $("#pokedex").html(pokeHtml);
        }, 'json');
    })
    
})

