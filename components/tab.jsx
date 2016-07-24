var tabData = [
  { name: 'Home', isActive: true },
  { name: 'Product', isActive: false },
  { name: 'Contact', isActive: false }
];
var Tabs = React.createClass({
  render: function() {
    return (
        <nav class="navbar navbar-default">
        <ul className="nav navbar-nav">
        {tabData.map(function(tab){
          return (
            <Tab data={tab} isActive={this.props.activeTab === tab} handleClick={this.props.changeTab.bind(this,tab)} />
          );
        }.bind(this))}      
        </ul>
       </nav>
     
    );
  }
});
var Tab = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.handleClick} className={this.props.isActive ? "active" : null}>
        <a href="#">{this.props.data.name}</a>
      </li>
    );
  }
});
var Content = React.createClass({
  render: function() {
    return (
      <div className="col-md-12">
        {this.props.activeTab.name === 'Home' ? 
        <section className="">
          <h2>About React</h2>
          <p className="panel-body">Let's get the basics out of the way. React is not another MVC framework, or any other kind of framework. It's just a library for rendering your views. If you're coming from the MVC world, you need to realise that React is just the 'V', part of the equation, and you need to look elsewhere when it comes to defining your 'M' and 'C', otherwise you're going to end up with some really yucky React code. More on that later.</p>
          <p className="panel-body">No runtime libraries. No magic. Simply precompile your way to clear React code.
Easy syntax that's similar to HTML, supported by most IDEs.
Clear separation of presentation and logic - almost zero HTML in component files.
Declarative coding ensures that the HTML that you write and the HTML you inspect look nearly identical.
Supports AMD, CommonJS, ES6, Typescript and globals.</p>
         </section>
        :null} 
        {this.props.activeTab.name === 'Product' ? 
        <section className="">
          <h2 className="">Widget</h2>
          <p className="panel-body">React-widgets offers a set of html form inputs, built from scratch with React. The suite is based on the excellent work done by Kendo UI Core, and jQuery UI, but built as true components, and not library wrappers. By building each widget entirely in React, it can leverage all of the benefits of the React ecosystem and philosophy. A big thanks to both of these libraries for solving most of the difficult problems already.</p>
          <p className="panel-body">
In keeping with the React approach to form input components, each widget can be controlled or uncontrolled.
Some widgets can also be "bound" to a set of data (traditionally an array of models) through a data prop. While they work just as well with data primitives such as strings, numbers, and arrays, they really shine through the use of the valueField and textField props, which offer a quick way to display complex data structures.
Install.
<br/>
<span >npm install react-widgets --save</span></p>
        </section>
        :null} 
        {this.props.activeTab.name === 'Contact' ? 
        <section className="">
          <h2 className="">Contact</h2>
          <h4 className="panel-body">abemgi2@gmail.com</h4>
        </section>
        :null} 
      </div>
    );
  }
});
var App = React.createClass({
  getInitialState: function() {
    return {
      activeTab: tabData[0]
    }
  }, 
  handleClick: function(tab) {
    this.setState({activeTab: tab});
  },
  render: function() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} changeTab={this.handleClick} />
        <Content activeTab={this.state.activeTab} />
      </div>
    );
  }
});
React.render(
  <App />,
  document.getElementById('app')
);