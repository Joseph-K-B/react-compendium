import Pokemon from "../Pokemon/Pokemon";

function PokemonList({ pokemons }) {
    return (
        <ul>
            {pokemons.map((pokemon) => {
                return (
                    <li key={pokemon.id}>
                        <Pokemon pokemon={pokemon}/>
                    </li>
                )

            })}
        </ul>
    )
}

export default PokemonList