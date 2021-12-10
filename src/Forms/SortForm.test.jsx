import { render, screen } from "@testing-library/react";
import SortForm from "./SortForm";

it('should render sort form controls', () => {
    const {container} = render(<SortForm/>);
    const sortOrder = screen.getByLabelText(/sortOrder/);
    const sortStat = screen.getByLabelText(/sortStat/);

    expect(sortOrder).toBeInTheDocument();
    expect(sortStat).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});