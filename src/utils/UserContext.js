import { createContext } from "react";

const UserContext=createContext({
    loggedInName:"Default Name"
})

export default UserContext;