import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
