import './Pokemon.css';

function Pokemon({ pokemon }) {
    const {
        name, 
        abilityOne, 
        abilityTwo, 
        typeOne, 
        typeTwo, 
        pic, 
        hiddenAbility 
    } = pokemon

    return(
        <figure 
            key={pokemon.id} 
            aria-label='pokemonFigure'
            className='pokemonFigure'    
        >
            <h2>{name}</h2>
            <img src={pic} alt={name} aria-label='pokemonName'/>
            <h2>Type</h2>
            <h3>{typeOne}</h3>
            <ul>
                <li>Secondary type: {typeTwo}</li>
                <li>abilitiy: {abilityOne}</li>
                <li>ability: {abilityTwo}</li>
                <li>hidden: {hiddenAbility}</li>
            </ul>
        </figure>
    )
}

export default Pokemon