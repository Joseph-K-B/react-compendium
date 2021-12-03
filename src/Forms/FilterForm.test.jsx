import { render, screen } from "@testing-library/react";
import FilterForm from "./FilterForm"


it('should render form controls', () => {
    const {container} = render(<FilterForm types={['fire']}/>);
    const sortType = screen.getByLabelText(/sortType/);
    const sortOrder = screen.getByLabelText(/sortOrder/);
    const sortStat = screen.getByLabelText(/sortStat/);

    expect(sortType).toBeInTheDocument();
    expect(sortOrder).toBeInTheDocument();
    expect(sortStat).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})