import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';    // you can write components/Header.js also 
import Body from './components/Body'

const AppLayout = () => {
    return (
        <div className='app-container'>
            <Header />
       
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)