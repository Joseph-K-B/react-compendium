

function Pokemon({ pokemon }) {
    const { 
        id, 
        name, 
        abilityOne, 
        abilityTwo, 
        typeOne, 
        typeTwo, 
        pic, 
        generation 
    } = pokemon

    return(
        <figure>
            <h2>{name}</h2>
            <img src={pic} alt={name}/>
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