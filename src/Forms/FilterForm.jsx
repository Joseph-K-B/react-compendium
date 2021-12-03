
function FilterForm({types, filterChange, selectedType}) {
    return (
        <section>
            <h3>Filter by type</h3>
            <select
                value={selectedType}
                onChange={(e) => filterChange(e.target.value)}    
            >
                <option value='main' key='main'>main</option>
                {types.map(({type}) => (
                    <option value={type} key={type}>{type}</option>
                ))}
            </select>
        </section>
    );
};

export default FilterForm;