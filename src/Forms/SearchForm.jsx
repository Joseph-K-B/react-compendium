
function SearchForm({ name, handleSubmit, handleSearchChange }) {
    return (
        <form onSubmit={handleSubmit}>
            <h3>Search</h3>
            <label htmlFor='search'>Name:</label>
            <input 
            type='text'
            onChange={(e) => handleSearchChange(e.target.value)}
            value={name}
            />
            <button >Submit</button>
        </form>
    )
}

export default SearchForm