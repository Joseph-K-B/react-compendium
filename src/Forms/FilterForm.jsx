import './FilterForm.css';

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
        <section className='filterForm'>
            <div aria-label='sortType' className='sortType'>            
            <h3>Filter by type</h3>
            <select
                value={selectedType}
                onChange={(e) => filterChange(e.target.value)}    
            >
                <option value='all' key='all'>All</option>
                {types.map(({type}) => (
                    <option value={type} key={type}>{type}</option>
                ))}
            </select>
            </div>
            <div aria-label='sortOrder' className='sortOrder'>
                <h3>Sort Order</h3>
                <label value='asc'>Ascending</label>
                <input
                    type='radio' 
                    value='asc' 
                    onChange={(e) => sortChange(e.target.value)}
                    checked={sortOrder === 'asc'}
                    >
                </input>
                <label value='desc'>Descending</label>
                    <input
                    type='radio' 
                    value='desc' 
                    onChange={(e) => sortChange(e.target.value)}
                    checked={sortOrder === 'desc'}    
                >
                    {/* <option value='desc'>Descending</option> */}
                </input>
            </div>
            <div aria-label='sortStat' className='sortStat'>
                <h3>Sort Stats</h3>
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