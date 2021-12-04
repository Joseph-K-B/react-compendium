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
    statChange 
}) {
    return(
        <>
            <section className='controls'>
                <SearchForm
                        name={searchName}
                        handleSubmit={handleSubmit}
                        handleSearchChange={handleSearchChange}
                    />
                    <FilterForm 
                        types={types}
                        selectedType={selectedType}
                        sortOrder={sortOrder}
                        sortAttribute={sortStat}
                        filterChange={filterChange}
                        sortChange={sortChange}
                        statChange={statChange}
                    />
            </section>
        </>
    )
    
}

export default Controls;