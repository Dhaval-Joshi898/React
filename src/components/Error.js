import { useRouteError } from "react-router-dom";

const Error=()=>{
   const error=useRouteError()
   console.log(error)
    return(
      <div className="contact-section">
        <h2>{error.status}: {error.error.message}</h2>
   
      </div>
    )
}
export default Error;