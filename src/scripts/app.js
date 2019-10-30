import React from "react";
import { hot } from 'react-hot-loader/root';

// Modules
import Navbar from "./pages/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// Redux
import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(App);
