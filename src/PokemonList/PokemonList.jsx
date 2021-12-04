import Pokemon from "../Pokemon/Pokemon";
import './PokemonList.css'

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

export default PokemonList