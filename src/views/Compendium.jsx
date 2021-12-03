import { useEffect, useState } from "react";
import FilterForm from "../Forms/FilterForm";
import SearchForm from "../Forms/SearchForm";
import PokemonList from "../PokemonList/PokemonList";
import { fetchFilterTypes, fetchPokemon, fetchSearchedPokemon, fetchSortPokemon, fetchTypes } from "../services/pokemon";

function Compendium() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('main');
    const [searchName, setSearchName] = useState('')
    const [sortOrder, setSortOrder] = useState('')
    const [sortStat, setSortStat] = useState('')

    
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
            } else if (selectedType === 'main') {
                const pokemonList = await fetchPokemon();
                setPokemons(pokemonList)
            }
            setLoading(false);
        };
        getFilterTypes();
    }, [selectedType]);

    useEffect(() => {
        const getSortPokemon = async () => {
            const sortList = await fetchSortPokemon(sortStat, sortOrder);
            setPokemons(sortList)
        };
        getSortPokemon();
    }, [sortStat, sortOrder])

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
                setSortOrder('');
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
                    sortOrder={sortOrder}
                    sortChange={setSortOrder}
                    sortAttribute={sortStat}
                    statChange={setSortStat}
                />
                {loading ? (<h1>Loading...</h1>) : (
                    <PokemonList pokemons={pokemons} />
                )}
            </main>
        </section>
    )
}

export default Compendium;