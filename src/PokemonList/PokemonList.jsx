import Pokemon from "../Pokemon/Pokemon";
import './PokemonList.css';
import PropTypes from 'prop-types';

function PokemonList({ pokemons }) {
    return (
        <section className='pokemonList' aria-label='pokemonList'>
            {pokemons.map((pokemon) => {
                return (
                    <div key={pokemon.id} aria-label='pokemon'>
                        <Pokemon pokemon={pokemon}/>
                    </div>
                )

            })}
        </section>
    )
}

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            typeOne: PropTypes.string.isRequired,
            typeTwo: PropTypes.string.isRequired,
            abilityOne: PropTypes.string.isRequired,
            abilityTwo: PropTypes.string.isRequired,
            hiddenAbility: PropTypes.string.isRequired,
            pic: PropTypes.string.isRequired,
        })
    ).isRequired,
    
}

export default PokemonList