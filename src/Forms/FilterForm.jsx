import './FilterForm.css';

function FilterForm({    
    types, 
    selectedType, 
    filterChange,
}) {
    return (
        <section className='filterForm'>
            <div aria-label='sortType' className='sortType'>            
            <h3>Type</h3>
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
            </div>                
        </section>            
    );
};

export default FilterForm;