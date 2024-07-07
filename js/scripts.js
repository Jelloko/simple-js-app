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
      console.log(pokemon);
  });
  }

// Function to make a list of buttons for pokemon and show details
   function addListItem(pokemon){
     let pokelisty = document.querySelector(".pokemon-list");
     let itemlist = document.createElement('li');
     let button = document.createElement('button');
     button.innerText = pokemon.name;
     button.classList.add("button-class");
     itemlist.appendChild(button);
     pokelisty.appendChild(itemlist);
     button.addEventListener('click', function (event) {
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