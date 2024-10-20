const heading=React.createElement("h1",{id:'headingid'},"Hello World from React")   //create Element part of core module,therefore used React module
        
const root=ReactDOM.createRoot(document.getElementById('root'))     //createRoot is part of ReactDOM module

root.render(heading)