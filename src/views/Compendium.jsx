import { useEffect, useState } from "react";
import FilterForm from "../Forms/FilterForm";
import PokemonList from "../PokemonList/PokemonList";
import { fetchPokemon, fetchTypes } from "../services/pokemon";

function Compendium() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState('');
    const [types, setTypes] = useState('main');
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        const getPokemon = async () => {
            const pokemonList = await fetchPokemon();
            setPokemons(pokemonList);
            setLoading(false);
        };
        console.log('AT USE EFFECT', getPokemon());
        getPokemon();
    }, []);

    useEffect(() => {
        const getTypes = async () => {
            const typeList = await fetchTypes();
            setTypes(typeList);
        };
        getTypes();
    }, []);

    return(
        <section>
            <main>
                <FilterForm 
                    types={types}
                    selectedType={selectedType}
                    filterChange={setSelectedType}
                />
                {loading ? (<h1>Loading...</h1>) : (
                    <PokemonList pokemons={pokemons} />
                )}
            </main>
        </section>
    )
}

export default Compendium;