import React, { Component } from 'react';
import './style.css'

class FullPagePrompt extends Component {
render(){
    const { 
        promptDisplayClass,
        promptContent,
        promptBackgroundColor
    } = this.props;
    return (
        <div 
        className={`prompt-wrapper ${promptDisplayClass}`}
        style={{backgroundColor: promptBackgroundColor}}
        >
            <div>{promptContent}</div>
        </div>
        );
    }
}

export default FullPagePrompt;