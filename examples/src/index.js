import React from 'react';
import { render} from 'react-dom';
import FullPagePrompt from '../../src';

const App = () => {
    return (
        <FullPagePrompt 
        promptDisplayClass='show'
        promptContent='This is just a test' // this can also be a component
        promptBackgroundColor='#ccc'
        />
    );
};

render(<App />, document.getElementById("root"));