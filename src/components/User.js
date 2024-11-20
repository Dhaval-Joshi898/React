import { useState } from "react";

const User = (props) => {
    console.log(props)
    let [count, setCount] = useState(0)

    return (
        <div className="userInfo-container">
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)

            }}>Increase count</button>
            <h2>Name:{props.data.name} data from props</h2>
            <h3>Developing FUNCTIONAL based components</h3>
            <h4>joshidhaval2002@gmail.com</h4>
            <h4>{props.email}</h4>
        </div>
    )
}

export default User;