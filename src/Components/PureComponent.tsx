import React  from 'react';
import {PureComponent} from 'react'

export default class PC extends PureComponent {
    
    render() {
        return  <div>
                    <div>PureComponent</div> 
                    <div>{this.props.children}</div> 
                </div> 
    }
}