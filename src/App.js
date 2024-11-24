import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';    // you can write components/Header.js also 
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu.js';
import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';

//lazy takes a callback function with import method inside it has path to that Grocery component
const Grocery=lazy(()=>import('./components/Grocery.js'))

const AppLayout = () => {
    return (
        <div className='app-container'>
            <Header />
            {/* <Body /> */}
            <Outlet/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [{
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading.....</h1>}> <Grocery/> </Suspense>
        },
        {
            path:'/restaurant/:resId',
            element:<RestaurantMenu/>
        }],
        errorElement: <Error />
    },

]
)


root.render(<RouterProvider router={appRouter} />)