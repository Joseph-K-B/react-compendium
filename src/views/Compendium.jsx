import { useEffect, useState } from "react";
import FilterForm from "../Forms/FilterForm";
import SearchForm from "../Forms/SearchForm";
import PokemonList from "../PokemonList/PokemonList";
import { fetchFilterTypes, fetchPokemon, fetchSearchedPokemon, fetchTypes } from "../services/pokemon";

function Compendium() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('main');
    const [searchName, setSearchName] = useState('')

    
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

    useEffect(() => {
        const getFilterTypes = async () => {
            if(!selectedType) return;
            setLoading(true);
            if (selectedType !== 'main') {
                const filterList = await fetchFilterTypes(selectedType);
                setPokemons(filterList);
            } else {
                const pokemonList = await fetchPokemon();
                setPokemons(pokemonList)
            }
            setLoading(false);
        };
        getFilterTypes();
    }, [selectedType])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetchSearchedPokemon(searchName)
            .then((searchedPokemon) => {
                setPokemons(searchedPokemon);
            })
            .finally(() => {
                setLoading(false);
                setSearchName('');
                setSelectedType('');
        });
    };

    return(
        <section>
            <main>
                <SearchForm
                    name={searchName}
                    handleSubmit={handleSubmit}
                    handleSearchChange={setSearchName}
                />
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