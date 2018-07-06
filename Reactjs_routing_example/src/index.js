import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Submit from './Submit';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

ReactDOM.render(
    <Router>
        <div className="container-fluid">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                        <a className="navbar-brand" href="#">ROUTING</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>n
                            <li><NavLink activeClassName="activeNav" to="/submit">Submit</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/submit" component={Submit} />
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
