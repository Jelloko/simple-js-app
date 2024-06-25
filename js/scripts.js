let pokemonList = [
    { pokemon: 'Nidoran', height: 0.5, type: 'Poison'},
    { pokemon: 'Poliwag', height: 0.6, type: 'Water'},
    { pokemon: 'Voltorb', height: 0.5, type: 'Electric'}
  ];
  pokemonList.forEach(function(item) {
    document.write(item.pokemon + " (height: " + item.height + ")");
    if (item.height > 0.5) {
      document.write("-Wow, that's big!");
    }
    document.write("</br>");
  });