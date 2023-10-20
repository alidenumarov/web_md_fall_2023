import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import banner from './img/Screenshot_2.png';
import Header from './components/Header';
import Pizzas from './components/Pizzas';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          {/* <img src={banner} className="banner"/> */}
          <Header />
          <div className="header_menu">
            {/* <ul>
              <li>
                <Link to="/">Pizzas</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul> */}

            <Routes>
              <Route exact path="/" element={<Pizzas />} />
              <Route exact path="/contacts" element={<Contacts />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
