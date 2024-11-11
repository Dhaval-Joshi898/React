import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';    // you can write components/Header.js also 
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className='app-container'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About />,
    },
    {
        path:"/contact",
        element:<Contact />,
    }
]
)


root.render(<RouterProvider router={appRouter} />)