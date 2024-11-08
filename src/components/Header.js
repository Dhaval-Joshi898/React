import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
    console.log('header render')
    let [changeBtn,setBtn]=useState('Login')

    useEffect(()=>{
        console.log('use effect header')
    },[changeBtn])
   
    return (
        <div className='header'>

            <div id="header-logo-container">
                <img src={LOGO_URL} alt="app-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="log-btn" onClick={()=>{
                        if (changeBtn==="Login"){
                            setBtn('Logout');
                            // console.log(changeBtn)
                        }
                        else{
                            setBtn("Login")
                            // console.log(changeBtn)
                        }
                    }}>{changeBtn} </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;