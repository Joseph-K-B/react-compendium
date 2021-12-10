import { render, screen } from "@testing-library/react"
import Pokemon from "./Pokemon"


it('should render individual pokemon', () => {
    const {container} = render(<Pokemon pokemon={['pikachu']}/>);
    const figure = screen.getByLabelText(/pokemonFigure/);
    const image = screen.getByLabelText(/pokemonName/);

    expect(figure).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});