import React from 'react';
import ReactDOM from 'react-dom/client';


//Using core React
// React ELement is OBJEct => to HTMl on (render)
// const heading=React.createElement('h1',{id:"headings"},"Hello world from Core react")
// const root =ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

//USING JSX JSX :HTMl like syntax
// JSX converted to react Element and then on render it converts to html for browser to understand
const jsxheading=<h1 id='headingid' className='headingclass'>Hello World in react using JSX</h1>   
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxheading)


















// const parent = React.createElement("div", { id: 'parent' }, [React.createElement('div', { id: 'child' },
//     [React.createElement('h1', { id: 'heading1' }, "This is heading 1"), React.createElement('h2', { id: 'heading2' }, 'This is heading 2')]),
//     React.createElement('div', { id: 'child2' },
//         [React.createElement('h1', { id: 'heading1' }, "This is heading 1 of child 2"), React.createElement('h2', { id: 'heading2' }, 'This is heading 2 of child 2')])])
        
// const root = ReactDOM.createRoot(document.getElementById('root'))     //createRoot is part of ReactDOM module
        
// root.render(parent) 



