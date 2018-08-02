export const fetchAllPokemon = function() {
  return $.ajax({
      method: "GET",
      url: 'http://localhost:3000/api/pokemon',
      success: () => {
        const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon));
fetchAllPokemon().then(getSuccess);
      }
    });
};
