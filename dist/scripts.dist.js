let pokemonRepository = (function () {
  let t = [];
  function n() {
    return t;
  }
  function e(n) {
    t.push(n);
  }
  function o(t) {
    return fetch(t.detailsUrl)
      .then(function (t) {
        return t.json();
      })
      .then(function (n) {
        (t.imageUrl = n.sprites.front_default),
          (t.height = n.height),
          (t.types = n.types);
      })
      .catch(function (t) {
        console.error(t);
      });
  }
  function i(t) {
    let n = $(".pokemonName"),
      e = $(".pokemonHeight"),
      o = $(".pokemonImage");
    modalTitle.empty(), modalBody.empty();
    let i = $("<h1>" + t.name + "</h1>"),
      a = $("<p>" + t.height + "</p>"),
      p = $("<src>" + t.img + "</src");
    n.append(i), e.append(a), o.append(p);
  }
  return {
    getAll: n,
    add: e,
    addListItem: function t(n) {
      let e = $(".pokemon-list"),
        o = $("<li></li>").addClass("list-group-item"),
        i = $("<button></button>")
          .text(n.name)
          .addClass("button-class btn btn-primary btn-block");
      o.append(i),
        e.append(o),
        i.on("click", function () {
          pokemonRepository.showDetails(n);
        });
    },
    showDetails: function t(n) {
      o(n).then(function () {
        $("#pokemonName").text(n.name),
          $("#pokemonHeight").text("Height: " + n.height),
          $("#pokemonImage").attr("src", n.imageUrl),
          $("#pokemonModal").modal("show");
      });
    },
    loadList: function t() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            e({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: o,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
