// Array of Pokemon's pokemon,heights and types
let pokemonRepository = (function () {
  let pokemonList = [
     { pokemon: 'Nidoran', height: 0.5, type: 'Poison'},
     { pokemon: 'Poliwag', height: 0.6, type: 'Water'},
     { pokemon: 'Voltorb', height: 0.5, type: 'Electric'}
  ];

// Function to return everything in the array
   function getAll () {
     return pokemonList;
  }

// Function to add to the array
   function add (item) {
     pokemonList.push(item);
  }

// function to showdetails of pokemon
   function showDetails(item){
    console.log(item.pokemon)
  }

// Function to make a list of buttons for pokemon and show details
   function addListItem(item){
     let pokelisty = document.querySelector(".pokemon-list");
     let itemlist = document.createElement('li');
     let button = document.createElement('button');
     button.innerText = item.pokemon;
     button.classList.add("button-class");
     itemlist.appendChild(button);
     pokelisty.appendChild(itemlist);
     button.addEventListener('click', function (event) {
     pokemonRepository.showDetails(item);
  });
  }

// All possible returns for functions
    return {
     getAll: getAll,
     add: add,
     addListItem: addListItem,
     showDetails: showDetails
  };

  })();
// Returning function getAll and addListItem to make a list of buttons forEach pokemon
 pokemonRepository.getAll().forEach(function(item) {
    pokemonRepository.addListItem(item)
  });