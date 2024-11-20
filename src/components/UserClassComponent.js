import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2
    } 

  }

  render() {
    //destructuring props of class based components 
    const { name, location } = this.props

    return (
      <div className="userInfo-container">

        <h1>{this.state.count2}</h1>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
            count2: this.state.count2+2
          })
        }}>Increase count</button>
  
        <h2>Name:{name}</h2>
        <h3>location:{location}</h3>
        <h4>joshidhaval2002@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;