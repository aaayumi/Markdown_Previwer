import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'aaaa'
        }
    this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({
        text: event.target.value  
        });
    }
    
    createMarkup() {
        var options = {sanitize: true};
        return{__html: marked(this.state.text, options)};
    }
    
    render(){
        return(
        	<div className="container-fluid">
            <div className="row">
            <div className="col-xs-12 col-sm-6">
            <h3 id="mark">Markdown Editor</h3>
             <textarea className="markdown" defaultValue={this.state.text} onChange={this.handleChange}></textarea>
             </div>
             <div className="col-xs-12 col-sm-6">
             <h3>Preview</h3>
						<div className="preview" dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
				    </div>
                </div>
            </div>	
           
        );
    }
}

ReactDOM.render(
<App />,
document.getElementById('root')
)
