
/**
 * <div id=parent>
 *  <div id=child>
 *      <h1> This is h1 </h1>
 *      </div>
 * </div>
 */

// const heading=React.createElement("h1",{id:'headingid'},"Hello World from React")   //create Element part of core module,therefore used React module
        
//to create nested html elements
const parent=React.createElement("div",{id:'parent'},React.createElement('div',{id:'child'},React.createElement('h1',{id:'heading1'},"This is heading 1")))

const root=ReactDOM.createRoot(document.getElementById('root'))     //createRoot is part of ReactDOM module

root.render(parent)