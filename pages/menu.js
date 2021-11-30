import React, {Component} from 'react';
import Link from "next/link";

class Menu extends Component {
    render() {
        return (
            <div>
                
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href={{ pathname: '/about', query: {firstName: 'Sreebash Kumar', lastName: 'Das'}}}>About</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;