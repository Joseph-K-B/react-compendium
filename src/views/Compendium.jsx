import { useEffect, useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import { fetchPokemon } from "../services/pokemon";

function Compendium() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState('');

    useEffect(() => {
        const getPokemon = async () => {
            const pokemonList = await fetchPokemon();
            setPokemons(pokemonList);
            setLoading(false);
        };
        console.log('AT USE EFFECT', getPokemon());
        getPokemon();
    }, []);

    return(
        <section>
            <main>
                {loading ? (<h1>Loading...</h1>) : (
                    <PokemonList pokemons={pokemons} />
                )}
            </main>
        </section>
    )
}

export default Compendium;