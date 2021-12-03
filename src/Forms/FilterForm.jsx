
function FilterForm({
    types, 
    selectedType, 
    sortOrder, 
    sortStat,
    filterChange, 
    sortChange,
    statChange
}) {
    return (
        <section>
            <h3>Filter by type</h3>
            <div aria-label='sortType'>
            <select
                value={selectedType}
                onChange={(e) => filterChange(e.target.value)}    
            >
                <option value='all' key='all'>main</option>
                {types.map(({type}) => (
                    <option value={type} key={type}>{type}</option>
                ))}
            </select>
            </div>
            <div aria-label='sortOrder'>
                <select 
                    value={sortOrder} 
                    onChange={(e) => sortChange(e.target.value)}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
            </div>
            <div aria-label='sortStat'>
                <select 
                    value={sortStat} 
                    onChange={(e) => statChange(e.target.value)}>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                    <option value='hp'>HP</option>
                    <option value='speed'>Speed</option>
                </select>
            </div>
        </section>
    );
};

export default FilterForm;