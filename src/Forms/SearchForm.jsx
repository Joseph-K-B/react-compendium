import './SearchForm.css';

function SearchForm({ name, handleSubmit, handleSearchChange }) {
    return (
        <form 
            onSubmit={handleSubmit} 
            aria-label='searchForm'
            className='searchForm'    
        >
            <h3>Name</h3>
            <label htmlFor='search' className='searchLabel'></label>
            <input 
            type='text'
            className='searchInput'
            aria-label='inputField'
            onChange={(e) => handleSearchChange(e.target.value)}
            value={name}
            />
            <button aria-label='button' className='searchBtn'><span>Submit</span></button>
        </form>
    )
}

export default SearchForm