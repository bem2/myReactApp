/*var Combobox = React.createClass({
        render: function() {
          return (
           <section className='{this.props.section}'>{this.props.section}</section>
            
              
          )
        }
      });
    
React.render(
    <div>
  <Combobox section='header' />
  <Combobox section='container' />
  <Combobox section='footer' />
    </div>,
  document.getElementById('greeting-div')
);*/



var Layout = React.createClass({
        render: function() {
          return (
           <section className='{this.props.section}'>{this.props.section}</section>
          )
        }
      });
    
ReactDOM.render(
    <div>
  <Layout section='header' />
  <Layout section='container'>
        </Layout>
  <Layout section='footer' />
    </div>,
  document.getElementById('layout-Div')
);