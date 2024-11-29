import React from "react";
// import User from "./User";
import UserContext from "../utils/UserContext";
// import UserClass from "./UserClassComponent";


class About extends React.Component{
    constructor(props){
        super(props)
    //    console.log("Parent Class Construtor called")
    }

    // componentDidMount(){
    //     console.log("Parent Component did mount")
    // }

    render(){
    return( 
        <div className="about-section">
             <h1>About us Page</h1>
             <h3>About us page thorugh router</h3>
             <UserContext.Consumer>
                {({loggedInName})=><h1 className="font-bold">{loggedInName}</h1>}
             </UserContext.Consumer>
             {console.log('Parent Class render called ')}




             {/* Class Based components -->how to pass props */}
             {/* <UserClass  name={'First Class'} location={"Bhayander"}/> */}

             {/* <User  name={'Dhaval Joshi'}/> */}
            

             
      
        </div>
    )
}
}

export default About;