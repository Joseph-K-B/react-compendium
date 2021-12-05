import { render, screen } from "@testing-library/react";
import FilterForm from "./FilterForm"


it('should render filter form controls', () => {
    const {container} = render(<FilterForm types={['fire']}/>);
    const sortType = screen.getByLabelText(/sortType/);
    

    expect(sortType).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})