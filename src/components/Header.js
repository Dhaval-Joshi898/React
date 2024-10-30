import { LOGO_URL } from "../../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;