import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';

import Main from './components/Main';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const App = () => (
    <div>
        <Main/>
    </div>
);


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//             TEST
//             <button onClick={ () => { history.push('/new') }}>CLICK</button>
//       </div>
//     );
//   }
// }

export default App;
