import React from "react";

class UserClass extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    //destructuring props of class based components 
    const {name,location}=this.props

    return (
      <div className="userInfo-container">
        <h2>Name:{name}</h2>
        <h3>location:{location}</h3>
        <h4>joshidhaval2002@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;