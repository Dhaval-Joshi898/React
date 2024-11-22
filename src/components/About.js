import User from "./User";
import UserClass from "./UserClassComponent";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props)
       console.log("Parent Class Construtor called")
    }

    componentDidMount(){
        console.log("Parent Component did mount")
    }

    render(){
    return( 
        <div className="about-section">
             <h1>About us Page</h1>
             <h3>About us page thorugh router</h3>
             {console.log('Parent Class render called ')}


             {/* Class Based components -->how to pass props */}
             <UserClass  name={'First Class'} location={"Bhayander"}/>
             <UserClass  name={'Second Class'} location={"Bhayander"}/>

             
      
        </div>
    )
}
}

export default About;