import { useEffect, useState } from "react";

const User = (props) => {
    console.log(props)
    let [count, setCount] = useState(0)

    useEffect(()=>{
      const timer=  setInterval(()=>{
            console.log("Namaste React")
        },1000)

        return ()=>{
            clearInterval(timer)
            console.log("Timer stopped it is like unmounting component to stop setInterval")
        }
    },[])

    return (
        <div className="userInfo-container">
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)

            }}>Increase count</button>
            <h2>Name:{props.name} data from props</h2>
            <h3>Developing FUNCTIONAL based components</h3>
            <h4>joshidhaval2002@gmail.com</h4>

        </div>
    )
}

export default User;