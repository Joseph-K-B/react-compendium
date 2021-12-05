import './SortForm.css';


function SortForm ({
    sortOrder, 
    sortStat,
    sortChange,
    statChange,
    handleReset
}) {
    return (
        <>
        <section className='sortSection'>
            <div aria-label='sortOrder' className='sortOrder'>
                <h3>Order</h3>               
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
                <h3>Stats</h3>
                <select
                    className='dropDown' 
                    value={sortStat} 
                    onChange={(e) => statChange(e.target.value)}>
                        <option value='attack'>Attack</option>
                        <option value='defense'>Defense</option>
                        <option value='hp'>HP</option>
                        <option value='speed'>Speed</option>
                </select>
            <button onClick={handleReset}>Reset</button>   
            </div>
        </section>
        </>
    )
}

export default SortForm