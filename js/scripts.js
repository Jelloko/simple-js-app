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
      showModal(pokemon.name, 'Height: ' + pokemon.height,pokemon.imageUrl);
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

  function showModal(title, text, img) {
    let modalContainer = document.querySelector('#modal-container');
  
    // Clear all existing modal content
    modalContainer.innerHTML = '';
  
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
  
    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', img);
    imageElement.setAttribute("width", "100%");
    imageElement.setAttribute("height", "100%");
  
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);
  
    modalContainer.classList.add('is-visible');
    
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });



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