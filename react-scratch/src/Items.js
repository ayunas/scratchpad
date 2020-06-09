import React from 'react'
import {Link} from 'react-router-dom';

export default function Items(props) {
    const [num,setNum] = React.useState(0);

    React.useEffect(() => {
        console.log("num state variable: ", num);
    })

    return (
        <div>
            <div>
                These are the items
            </div>
            <Link to={{pathname : "/", state : {num} }}>Home</Link>
            {props.items.map(item => {
                return (
                <>
                    <div>{JSON.stringify(item)}</div>
                    <button onClick={() => setNum(num+1)}>increase</button>
                </>
                )
            })}



        </div>
    )
}
