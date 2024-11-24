import { useState } from "react"

const useOnlineStatus=()=>{

    const [onlineStatus,setOnlineStatus]=useState(true)

    //to check if online or not

    window.addEventListener("offline",()=>{
        setOnlineStatus(false)
    })

    window.addEventListener("online",()=>{
        setOnlineStatus(true)
    })

    return onlineStatus; 
}

export default useOnlineStatus;