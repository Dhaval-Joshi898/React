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

             <User  data={obj}/>
             <UserClass/>
        </div>
    )
}

export default About;