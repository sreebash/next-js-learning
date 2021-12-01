import React, {Component} from 'react';
import Menu from "./menu";


export async function getStaticProps() {
    return {
        props: {
            APIKEY: process.env.APIKEY
        }
    }
}

class Index extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <h1>Index Page</h1>
                <h1>API KEY: {this.props.APIKEY}</h1>
            </div>
        );
    }
}

export default Index;