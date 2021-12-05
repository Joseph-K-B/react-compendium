import './FilterForm.css';

function FilterForm({
    types, 
    selectedType, 
    sortOrder, 
    sortStat,
    filterChange, 
    sortChange,
    statChange,
    page,
    handlePageChange
}) {
    return (
        <section className='filterForm'>
            <div aria-label='sortType' className='sortType'>            
            <h3>Filter by type</h3>
            <span className='selectSpan'></span>
            <select
                className='dropDown'
                value={selectedType}
                onChange={(e) => filterChange(e.target.value)}    
            >
                    <option value='all' key='all'>All</option>
                    {types.map(({type}) => (
                        <option value={type} key={type}>{type}</option>
                    ))}
            </select>
            {/* <button 
                className='pageBtn'
                value={page}
                onClick={() => handlePageChange(page --)}
            >
                Previous Page
            </button> */}
            </div>                
            <div aria-label='sortOrder' className='sortOrder'>
                <h3>Sort Order</h3>
                
                {/* <label value=''>Standard</label>
                <input
                    type='radio' 
                    value='' 
                    onChange={(e) => sortChange(e.target.value)}
                    checked={sortOrder === ''}
                >
                </input> */}
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
                </input>
            </div>
            <div aria-label='sortStat' className='sortStat'>
                <h3>Sort Stats</h3>
                <span className='selectSpan'></span>
                <select
                    className='dropDown' 
                    value={sortStat} 
                    onChange={(e) => statChange(e.target.value)}>
                        <option value='attack'>Attack</option>
                        <option value='defense'>Defense</option>
                        <option value='hp'>HP</option>
                        <option value='speed'>Speed</option>
                </select>
            {/* <button 
                className='pageBtn'
                value={page}
                onClick={() => handlePageChange(page ++)}
            >
                Next Page
            </button> */}
            </div>            
        </section>
    );
};

export default FilterForm;