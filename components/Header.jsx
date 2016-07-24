
var items = [
 { name: 'Home', link: './demo/partial/home.html', menu:'menu1', desc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit...' },
 { name: 'About', link: './demo/partial/about.html', menu:'menu2', desc :'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...' },
 { name: 'Widget',link: './demo/partial/widget.html', menu:'menu3',desc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit...' }
];

var RepeatModule = React.createClass({
 getDefaultProps: function() {
  return { items: [] }
 },
 render: function() {
  return (
    <div>
    <header>
       <h1 className="well container-fluid"> 
        <span>My First Reactjs Apps</span>
        </h1>
    </header>
    
     </div>
   
  );
 }
});

ReactDOM.render(<RepeatModule items={items} />,     
 document.getElementById('layout-Div'));
        
      