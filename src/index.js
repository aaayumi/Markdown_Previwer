import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
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
