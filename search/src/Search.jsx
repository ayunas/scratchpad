import React from 'react';



function Search(props) {
    const [query,setQuery] = React.useState(""); //controlled input
    const [filteredFurniture,setFilteredFurniture] = React.useState(props.furniture);

    React.useEffect(() => {
        
        switch(query.length) { //if the input has something
            case 0:
                setFilteredFurniture(props.furniture);
                break;
            default:
                let furnishings = [...props.furniture];
                console.log("furnishings in default switch statement ", furnishings); 
                furnishings = furnishings.filter( furn => furn.item.includes(query) );
                setFilteredFurniture(furnishings);
                break;       
        }
    },[query]);

    const handleChange = (e) => {
        console.log("input value in handleChange: ", e.target.value, query);
        setQuery(e.target.value);
    }

    return (
        <>
            <h2>Furniture Items</h2>
            <input onChange={handleChange} value={query} />
            <div>
                {filteredFurniture.map( (furn,i) => <div key={i}>{furn.item}</div> )}
            </div>
        </>
    )
}

export default Search;