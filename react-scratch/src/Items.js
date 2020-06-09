import React from 'react'
import {Link} from 'react-router-dom';

export default function Items(props) {
    const [num,setNum] = React.useState(0);

    React.useEffect(() => {
        console.log("num state variable: ", num);
        console.log("props in <Items/>", props);
    })

    return (
        <div>
            <div>
                These are the items
            </div>
            <Link to={{pathname : "/", state : {num} }}>Home</Link>
            {props.items.map( (item,i) => {
                return (
                <>
                    <div>{JSON.stringify(item)}</div>
                    <button onClick={() => setNum(num+1)}>increase</button>
                    <button><Link to={`/detail/${i+1}`}>Item Detail</Link></button>
                </>
                )
            })}



        </div>
    )
}
