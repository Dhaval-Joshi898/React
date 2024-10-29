import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 *  Header
 *   - Logo
 *    -Nav items
 *  Body
 *    -Search
 *     -Restaurant COntainer
 *     -Restaurant Card
 *   Footer
 *     - Copyright
 *     -Links
 *     -Address
 *     -COntacts
 */

const Header = () => {
    return (
        <div className='header-container'>


            <div id="image-container">
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
    )
}

const RestroCard = () => {
    return (
        <div className='restro-card'>
            <div className='restro-image'>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n7wbtvlifwbw5y4a7rrv" alt="restro-image" />
            </div>
            <h3>Pizza Box</h3>
            <h4>Fast food,Italian</h4>
            <h4>4.3 stars</h4>
            <h4>30 mins</h4>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body-container">
            <div className='search'>
                Search
            </div>
            <div className='restaurant-container'>
                <div className='restaurant-card'>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                    <RestroCard/>
                </div>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app-container'>
            <Header />
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)