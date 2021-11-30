import React, {Component} from 'react';
import Menu from "./menu";

class About extends Component {
    
    static getInitialProps({query}) {
        return {query}
    }
    
    render() {
        return (
            <div>
                <Menu/>
                
                <h1>About Page {JSON.stringify(this.props.query)}</h1>
            
            </div>
        );
    }
}

export default About;