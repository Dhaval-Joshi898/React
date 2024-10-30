const Header = () => {
    return (
        <div className='header'>

            <div id="header-logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWycK1c1Xf9Hr8MrAwj16q1XlDyYy1euwybQ&s" alt="app-logo" />
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