import PokemonList from "./PokemonList";
import { render, screen } from '@testing-library/react';

it('should render unordered list of pokemon', () => {
    const {container} = render(<PokemonList pokemons={['pikachu', 'charizard']}/>);
    const pokemonList = screen.getByLabelText(/pokemonList/);

    expect(pokemonList).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})