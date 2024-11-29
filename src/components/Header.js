import { useEffect, useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  console.log("header render");
  let [changeBtn, setBtn] = useState("Login");

  //to use UserContext we have a hook called useContext
  const {loggedInName}=useContext(UserContext)



  useEffect(() => {
    // console.log("use effect header");
  }, [changeBtn]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div id="header-logo-container">
        <Link to="/">
          <img className="w-24 m-5" src={LOGO_URL} />{" "}
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4">
          <Link to='/about'><a href="/about">About us</a> </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">Cart</li>

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
            }}
          >
            {changeBtn}{" "}</button>
          <li className="px-4 font-bold">{loggedInName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
