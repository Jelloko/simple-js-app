let pokemonList = [
    { pokemon: 'Nidoran', height: 0.5, type: 'Poison'},
    { pokemon: 'Poliwag', height: 0.6, type: 'Water'},
    { pokemon: 'Voltorb', height: 0.5, type: 'Electric'}
];
for (let i = 0; i < pokemonList.length; i++) {
    let pokel = pokemonList[i];
    document.write(pokel.pokemon + " (height: " + pokel.height + ")");
    if (pokel.height > 0.5) {
    document.write("-Wow, that's big!")
    }
    document.write("</br>")
};

