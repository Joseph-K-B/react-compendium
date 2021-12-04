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
    
    return filterMap;
}

export const fetchSearchedPokemon = async (name) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${name}`);
    const searchData = await res.json();
    const searchMap = searchData.results.map((item) =>
        pokemonMunger(item));

    return searchMap;
}

export const fetchSortOrderPokemon = async (sortOrder) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${sortOrder}`);
    const orderData = await res.json();
    const orderMap = await orderData.results.map((item) => 
        pokemonMunger(item));

    return orderMap;
}

export const fetchSortStatPokemon = async (sortStat) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${sortStat}&direction=asc`)
    const statData = await res.json();
    const statMap = await statData.results.map((item) => 
        pokemonMunger(statMap));

    return statMap;
}

export const fetchSortPokemon = async (sortStat, sortOrder) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${sortStat}&direction=${sortOrder}`);
    const sortData = await res.json();
    const sortMap = await sortData.results.map((item) => 
        pokemonMunger(item));

    console.log('FETCH FILTERED', sortMap);
    return sortMap
}