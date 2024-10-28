import React from 'react';
import ReactDOM from 'react-dom/client';

//Using core React
// React ELement is OBJEct => to HTMl on (render)
// const heading=React.createElement('h1',{id:"headings"},"Hello world from Core react")
// const root =ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

//USING JSX JSX :HTMl like syntax
// JSX converted to react Element and then on render it converts to html for browser to understand

//React Components: Class based components AND Functional Components

//  Functional Components :This is a JAVASCRIPT FUNCTION which returns a JScode or React Element

const compo=()=>{
    const compoHeading=(
        <h1 style={"color:pink"} >THis is a heading written inside component </h1>
    )
}
const jsxheading=<h1 id='headingid' className='headingclass'>Hello World in react using JSX</h1>   

const jsxMheading=(
    <div id='mutli'>
        <h1>Heading using JSX multi line</h1>
    </div>
) 

const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxMheading) 