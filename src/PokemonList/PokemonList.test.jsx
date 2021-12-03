import PokemonList from "./PokemonList";
import { render, scree } from '@testing-library/react';

it('should render unordered list of pokemon', () => {
    const {container} = render(<PokemonList />);

})