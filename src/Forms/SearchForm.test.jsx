import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

it('should render input field and button for search', () => {
    const {container} = render(<SearchForm />);
    const searchForm = screen.getByLabelText(/searchForm/);
    const inputField = screen.getByLabelText(/inputField/);
    const button = screen.getByLabelText(/button/);

    expect(searchForm).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})