import React from 'react';
import {useParams} from 'react-router-dom';

export default function Detail(props) {
    const [ID, setID] = React.useState(0);

    // React.useEffect(() => {
    //   console.log("props in <Detail/>", props);
    // //   const {id} = props.match.params;
    
    //   setID(id);
    //   console.log(id);
    // },[])

    const {id} = useParams();
    console.log(id);

    return (
        <div>
            This is the Item Details
            <p>Item # : {id}</p>
        </div>
    )
}
