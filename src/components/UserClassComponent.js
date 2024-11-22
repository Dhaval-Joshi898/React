import React from "react";
import ClassTest from "./ClassTest";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2
    } 
      console.log("Child Constructor called")
  }

  componentDidMount(){
    console.log(this.props.name,"Child Component Did Mount called")
  }

  render() {
    //destructuring props of class based components 
    const { name, location } = this.props

    return (
      <div className="userInfo-container">
         
        <h1>{this.state.count}</h1>
        {console.log(this.props.name,"Child render called")}
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
            count2: this.state.count2+2
          })
        }}>Increase count</button>
  
        <h2>Name:{name}</h2>
        <h3>location:{location}</h3>
        <h4>joshidhaval2002@gmail.com</h4>
        
        <ClassTest name={"NESTED props "}/> 
      </div>
    
    );
  }
}

export default UserClass;