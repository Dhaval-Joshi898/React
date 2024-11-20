import User from "./User";
import UserClass from "./UserClassComponent";
const About=()=>{
    const obj={
        name:"Dhaval",
        mail:"joshidhaval2002@gmail.com"
    }

    return( 
        <div className="about-section">
             <h1>About us Page</h1>
             <h3>About us page thorugh router</h3>


             {/* Class Based components -->how to pass props */}
             <UserClass  name={'Dhaval Joshi class props'} location={"Bhayander"}/>
             
      
        </div>
    )
}

export default About;