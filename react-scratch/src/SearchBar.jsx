import React from 'react'

//if the search input is "", then render the entire contents of the items array
//in all other cases, filter the items to see if the substring is included for the product names
//conditionally render the filtered items if the input is NOT an empty string.


export default function SearchBar(props) {

    const {query, setQuery} = props;
   
    React.useEffect(() => {
        console.log("props in <SearchBar/>", props)
    })


    const handleChange = (e) => {
        console.log("query value in <SearchBar/>",query);
        setQuery(e.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} placeholder="Search for a Product" name="search" value={query} />
        </div>
    )

}
