import React, { Component } from "react";

class ClassTest extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props.name,'Class test constructor')
    }


    ComponentDidMount() {
            console.log(this.props,name,"NestedCopmponet DID MOUNT called")
    }
    componentDidMount(){
        {console.log(this.props.name,"Child Component Did Mount called")}
      }

    render() {
        return (
            <div>

                {console.log(this.props.name,'CLasss Test render called')}
            </div>
        )
        
    }
}

export default ClassTest;