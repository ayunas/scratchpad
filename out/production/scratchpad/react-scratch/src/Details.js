import React from 'react'

export default function Details(props) {

    React.useEffect(() => {
        console.log("props in <Details/>", props);
    })


    return (
        <div>
            These are the dirty details
        </div>
    )
}
