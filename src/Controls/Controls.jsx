import FilterForm from "../Forms/FilterForm";
import SearchForm from "../Forms/SearchForm";
import SortForm from "../Forms/SortForm";
import './Controls.css';

function Controls({
    searchName,
    handleSubmit,
    handleSearchChange,
    types,
    selectedType,
    sortOrder,
    sortStat,
    filterChange,
    sortChange,
    statChange,
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
                        types={types}
                        selectedType={selectedType}
                        filterChange={filterChange}                        
                    />
                    <SortForm
                        sortOrder={sortOrder}
                        sortAttribute={sortStat}
                        sortChange={sortChange}
                        statChange={statChange}
                    />
                </div>
            </section>
        </>
    );
    
};

export default Controls;