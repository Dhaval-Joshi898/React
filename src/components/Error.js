import { useRouteError } from "react-router-dom";

const Error=()=>{
   const err=useRouteError()
   console.log(err)
    return(
      <div className="contact-section">
        <h1>OOPs!!</h1>
        <h1>Something went wrong</h1>
        <h3>{err.status}: {err.statusText}</h3>
        <h2>{err.status}: {err.error}</h2>
   
      </div>
    )
}
export default Error;