import Pokemon from "../Pokemon/Pokemon";

function PokemonList({ pokemons }) {
    return (
        <ul aria-label='pokemonList'>
            {pokemons.map((pokemon) => {
                return (
                    <li key={pokemon.id} aria-label='pokemon'>
                        <Pokemon pokemon={pokemon}/>
                    </li>
                )

            })}
        </ul>
    )
}

export default PokemonList