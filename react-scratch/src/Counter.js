import React from 'react';


function Counter() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {

        if (count > 5) { //simulate an error
            throw new Error("This counter does not go beyond 5");
        }

    })


    return (
        <div>
            <h1>Counter</h1>

            {count < 5  ?   <main>
                                {count} 
                                <br/>
                                <button onClick={() => setCount(count + 1)}>Increment</button>
                            </main>
                        :    <main>Sorry, this counter does not go beyond {count} </main>
            }

           
        </div>
    )


}

export default Counter;