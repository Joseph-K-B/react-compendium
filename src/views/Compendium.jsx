import { useEffect, useState } from "react";
import Controls from "../Controls/Controls";
import PokemonList from "../PokemonList/PokemonList";
import './Compendium.css'
import { 
    fetchFilterTypes, 
    fetchPokemon, 
    fetchSearchedPokemon, 
    fetchSortOrderPokemon, 
    fetchSortOrderTypesPokemon, 
    fetchSortPokemon, 
    fetchSortStatPokemon, 
    fetchSortStatTypesPokemon, 
    fetchSortTypesPokemon, 
    fetchTypes 
} from "../services/pokemon";

function Compendium() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('all');
    const [searchName, setSearchName] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [sortStat, setSortStat] = useState('');

    
    useEffect(() => {
        const getPokemon = async () => {
            const pokemonList = await fetchPokemon();
            setPokemons(pokemonList);
            setLoading(false);      
        }
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
            if (selectedType !== 'all') {
                const filterList = await fetchFilterTypes(selectedType);
                setPokemons(filterList);
                // setSortOrder('');
                // setSortStat('');
            } else if (selectedType === 'all') {
                const pokemonList = await fetchPokemon();
                setPokemons(pokemonList);
            }
            setLoading(false);
        };
        getFilterTypes();
    }, [selectedType]);

    useEffect(() => {
        const getSortPokemon =  async () => {
            if(selectedType === 'all' && !sortOrder && !sortStat) return;
                setLoading(true);
            if(selectedType ==='all' && sortOrder !== '' && sortStat === '') {
                const orderList = await fetchSortOrderPokemon(sortOrder);
                setPokemons(orderList);
            } else if (selectedType ==='all' && sortStat !== '' && sortOrder === '') {
                const statList = await fetchSortStatPokemon(sortStat);
                setPokemons(statList);
            } else if (selectedType ==='all' && sortStat !== '' && sortOrder !== '') {
                const sortList = await fetchSortPokemon(sortOrder, sortStat);
                setPokemons(sortList);
            } else 
                setLoading(false);
        };
        getSortPokemon()
    }, [selectedType, sortOrder, sortStat]);

    useEffect(() => {
        const getSortTypePokemon = async () => {
            if(!selectedType && !sortOrder && !sortStat) return;
            setLoading(true);            
             if(selectedType && sortOrder !== '' && sortStat === '') {
                const orderTypeList = await fetchSortOrderTypesPokemon(selectedType, sortOrder);
                setPokemons(orderTypeList); 
            } else if (sortStat !== '' && sortOrder === '') {
                const statTypeList = await fetchSortStatTypesPokemon(selectedType, sortStat);
                setPokemons(statTypeList);
            } else {
                const sortTypeList = await fetchSortTypesPokemon(selectedType, sortStat, sortOrder);
                setPokemons(sortTypeList);
            } 
            setLoading(false);
        };
        getSortTypePokemon();
    }, [selectedType, sortStat, sortOrder]);

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
                setSortStat('')
        });
    };

    const handleReset = async () => {
        setLoading(true);
        const refreshPokemon = await fetchPokemon();
        setPokemons(refreshPokemon);
        setSelectedType('')
        setSearchName('');
        setSortOrder('');
        setSortStat('');
        setLoading(false)        
    };

    return(
        <section>
            <main>
                <Controls
                    name={searchName}
                    handleSubmit={handleSubmit}
                    handleReset={handleReset}
                    handleSearchChange={setSearchName}
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
    );
};

export default Compendium;