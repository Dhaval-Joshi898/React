import React from 'react';
import ReactDOM from 'react-dom/client';


//React Components: Class based components AND Functional Components

//  Functional Components :This is a JAVASCRIPT FUNCTION which returns a JScode or React Element

//JS arrow function single line ---> 

//const fn=()=> console.log('Heloo)  PEFECTLY valid
const HeadCompo = () => <h1>Heading inside Heading component</h1>  //Component without return keyword
//for multiline JSX code use () like below

const BodyCompo = () =>
(
    <div id='container'>
        <HeadCompo />
        <h2>Body Component </h2>
        <a href="www.google.com">Google</a>
    </div>
)

//NOTE IF YOU are using CURLY Brackets {} then use  the "RETURN" keyword

// const HeadCompo2 = () => {
//   return  <h1>Heading inside Heading component 2</h1>
// }

// const BodyCompo2 = () =>{
// return(
//     <div id='container'>
//         <HeadCompo2 />
//         <h2>Body Component 2 </h2>
//         <a href="www.google.com">Google</a>
//     </div>
// )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BodyCompo2 />)