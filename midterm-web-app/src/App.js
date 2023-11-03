import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import Profile from './components/Profile';
import Feed from './components/Feed';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <div className="header_menu">
            <Routes>
              <Route exact path="/" element={<Profile />} />
              <Route exact path="/contacts" element={<Feed />} />
              <Route exact path="/contacts" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
