

export const pokemonMunger = (pokemon) => {
    return {
        id: pokemon.id,
        name: pokemon.pokemon,
        abilityOne: pokemon.ability_1,
        abilityTwo: pokemon.ability_2,
        typeOne: pokemon.type_1,
        typeTwo: pokemon.type_2,
        pic: pokemon.url_image,
        generation: pokemon.generation_id

    }
}