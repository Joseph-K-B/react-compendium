import FilterForm from "../Forms/FilterForm";
import SearchForm from "../Forms/SearchForm";
import './Controls.css';

function Controls({
    searchName,
    handleSubmit,
    setSearchName,
    handleSearchChange,
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
    return(
        <>
            <section className='controls'>
                <div className='searchDiv'>
                    <SearchForm
                        name={searchName}
                        handleSubmit={handleSubmit}
                        handleSearchChange={handleSearchChange}
                    />
                </div>
                <div className='filterDiv'>
                    <FilterForm
                        page={page} 
                        types={types}
                        selectedType={selectedType}
                        sortOrder={sortOrder}
                        sortAttribute={sortStat}
                        filterChange={filterChange}
                        sortChange={sortChange}
                        statChange={statChange}
                        handlePageChange={handlePageChange}
                    />
                </div>
            </section>
        </>
    )
    
}

export default Controls;