import './SearchForm.css';

function SearchForm({ name, handleSubmit, handleSearchChange }) {
    return (
        <form 
            onSubmit={handleSubmit} 
            aria-label='searchForm'
            className='searchForm'    
        >
            <h3>Search</h3>
            <div className='inputDiv'>
            <label htmlFor='search' className='searchLabel'>Name:</label>
            <input 
            type='text'
            className='searchInput'
            aria-label='inputField'
            onChange={(e) => handleSearchChange(e.target.value)}
            value={name}
            />
            </div>
            <button aria-label='button'>Submit</button>
        </form>
    )
}

export default SearchForm