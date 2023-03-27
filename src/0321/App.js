import React, { Component } from 'react';
import Child from './Child';
import Parent from './Parent';

class App extends Component {
    render() {
        return (
            <>
                <Child />
                <hr />
                <Parent />
            </>
        );
    }
}

export default App;