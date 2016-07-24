
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
  
var listItems = this.props.items.map(function(item) {
   return (
    <li key={item.name}>
     <a className='button' href={item.menu}>{item.name}</a>
    </li>
   );
  });
      
var contentItems = this.props.items.map(function(item) {
   return (
    <div className="col-sm-4">
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
    </div>
);
  });


  return (
    <div>
    <header>
       <h1 className="well container-fluid"> 
        <span>My First Reactjs Apps</span>
        </h1>
    </header>
    <ul className='nav navbar-nav col-md-12 container-fluid' >
     {listItems}
    </ul>
          
    <section className="main-container container-fluid">
      <div className="row">{contentItems}</div>
    </section>
     </div>
   
  );
 }
});

ReactDOM.render(<RepeatModule items={items} />,     
 document.getElementById('layout-Div'));
        
      