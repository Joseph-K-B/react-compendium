
function SearchForm({ name, handleSubmit, handleSearchChange }) {
    return (
        <form onSubmit={handleSubmit} aria-label='searchForm'>
            <h3>Search</h3>
            <label htmlFor='search'>Name:</label>
            <input 
            type='text'
            aria-label='inputField'
            onChange={(e) => handleSearchChange(e.target.value)}
            value={name}
            />
            <button aria-label='button'>Submit</button>
        </form>
    )
}

export default SearchForm