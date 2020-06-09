import React from 'react'

export default function Home({location}) {

    React.useEffect(() => {
    //  console.log("props in <Home/>", props);
     const {state} = location;
     console.log(state);   
    })

    return (
        <div>
            Welcome Home.  There's no place like home
        </div>
    )
}
