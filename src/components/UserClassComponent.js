import React from "react";
import ClassTest from "./ClassTest";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      userInfo:{
      name:"John Doe",
      id:"random"
      }
    }
  }

  async componentDidMount(){
    const data= await fetch("https://api.github.com/users/Dhaval-Joshi898")
    const json=await data.json()

    this.setState({
      userInfo:json
    })

    // this.timer=setInterval(()=>{
    //   console.log("React Namaste")
    // },1000)
    // console.log("Component DID Mount")
  }

  componentDidUpdate(){
    console.log("Component DID Update")
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("Component Unmount(unmount means on page change) ")
  }

  render() {
    //destructuring props of class based components 
    // const { name, location } = this.props
    // const {name}= json

    return (
      <div className="userInfo-container">

        <h2>Name:{this.state.userInfo.name}</h2>
        {/* <h3>location:{location}</h3> */}
        <h4>joshidhaval2002@gmail.com</h4>
      </div>
    
    );
  }
}

export default UserClass;