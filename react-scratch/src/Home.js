import React from 'react'

export default function Home(props) {

    React.useEffect(() => {
     console.log("props in <Home/>", props);
     const {state} = props.location;
     console.log(state);   
    })

    return (
        <div>
            Welcome Home.  There's no place like home
        </div>
    )
}
