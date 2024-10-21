
/**
 * <div id=parent>
 *   <div id=child>
 *      <h1 id='heading1'> This is h1 </h1>
 *      <h2 id='heading2'> This is heading 2</h2>
 *   </div>
 * </div>
 */


//to create nested html elements
const parent=React.createElement("div",{id:'parent'},React.createElement('div',{id:'child'},
    [React.createElement('h1',{id:'heading1'},"This is heading 1"),React.createElement('h2',{id:'heading2'},'This is heading2')]))

const root=ReactDOM.createRoot(document.getElementById('root'))     //createRoot is part of ReactDOM module

root.render(parent)