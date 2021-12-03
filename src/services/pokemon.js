import { pokemonMunger } from "../utils/helper";


export const fetchPokemon = async () => {
    const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/');
    const pokemonData = await res.json();
    const pokemonMap = await pokemonData.results.map((item) => 
    pokemonMunger(item));


    return pokemonMap
}

export const fetchTypes = async () => {
    const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
    const typeData = await res.json();
    const typeMap = await typeData.map((item) =>
     ({type: item.type}));

     return typeMap;
}

export const fetchFilterTypes = async (type) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}`);
    const filterData = await res.json();
    const filterMap = filterData.results.map((item) =>
        pokemonMunger(item));

    console.log('FETCH FILTERED', filterMap);
    return filterMap;
}