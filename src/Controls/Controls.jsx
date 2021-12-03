import FilterForm from "../Forms/FilterForm";
import SearchForm from "../Forms/SearchForm";

function Controls({
    searchName,
    handleSubmit,
    setSearchName,
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
            <SearchForm
                    name={searchName}
                    handleSubmit={handleSubmit}
                    handleSearchChange={setSearchName}
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
        </>
    )
    
}

export default Controls;