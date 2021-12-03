

function Pokemon({ pokemon }) {
    const {
        name, 
        abilityOne, 
        abilityTwo, 
        typeOne, 
        typeTwo, 
        pic, 
        generation 
    } = pokemon

    return(
        <figure key={pokemon.id} aria-label='pokemonFigure'>
            <h2>{name}</h2>
            <img src={pic} alt={name} aria-label='pokemonName'/>
            <h3>{generation}</h3>
            <ul>
                <li>Primary type:{typeOne}</li>
                <li>Secondary type:{typeTwo}</li>
                <li>abilitiy:{abilityOne}</li>
                <li>ability:{abilityTwo}</li>
            </ul>
        </figure>
    )
}

export default Pokemon