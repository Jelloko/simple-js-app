// Array of Pokemon's pokemon,heights and types
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

// Function to return everything in the array
   function getAll () {
     return pokemonList;
  }

// Function to add to the array
   function add (pokemon) {
     pokemonList.push(pokemon);
  }
  
// function to showdetails of pokemon
   function showDetails(pokemon){
    loadDetails(pokemon).then(function() {
       $('#pokemonName').text(pokemon.name);
       $('#pokemonHeight').text('Height: ' + pokemon.height);
       $('#pokemonImage').attr('src', pokemon.imageUrl);
       $('#pokemonModal').modal('show');
    });
}

// Function to make a list of buttons for pokemon and show details
   function addListItem(pokemon){
    let pokelisty = $('.pokemon-list');
    let itemlist = $('<li></li>').addClass('list-group-item');
    let button = $('<button></button>').text(pokemon.name).addClass('button-class btn btn-primary btn-block');
     itemlist.append(button);
     pokelisty.append(itemlist);
     button.on('click', function () {
     pokemonRepository.showDetails(pokemon);
  });
  }

  
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showModal(pokemon) {
    
  let modaltitle = $('.pokemonName');
  let modalheight = $('.pokemonHeight');
  let modalimage = $('.pokemonImage')


  modalTitle.empty();
  modalBody.empty();
    
  // Add the new modal content
    
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
  
    let heightElement = $('<p>' + pokemon.height + '</p>');

    let imageElement = $('<src>' + pokemon.img + '</src');
  
    modaltitle .append(nameElement);
    modalheight.append(heightElement);
    modalimage.append(imageElement);
    
  
  }

// All possible returns for functions
    return {
     getAll: getAll,
     add: add,
     addListItem: addListItem,
     showDetails: showDetails,
     loadList: loadList,
     loadDetails: loadDetails

  };

  })();
// Returning function getAll and addListItem to make a list of buttons forEach pokemon
 pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
  });
})

