import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  console.log("header render");
  let [changeBtn, setBtn] = useState("Login");
 
  useEffect(() => {
    // console.log("use effect header");
  }, [changeBtn]);
  
  const onlineStatus=useOnlineStatus()


  return (
    <div className="header">

      <div id="header-logo-container">
        <img src={LOGO_URL} alt="app-logo" />
      </div>

     
      <div className="nav-items">
        <ul>
          <li>
            Online Status :{onlineStatus?"🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>

          <button
            className="log-btn"
            onClick={() => {
              if (changeBtn === "Login") {
                setBtn("Logout");
                // console.log(changeBtn)
              } else {
                setBtn("Login");
                // console.log(changeBtn)
              }
            }}  >{changeBtn} </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
