import React, {Component} from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom"; 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/pokemon/:pokemonIndex"  element={<Pokemon />} />
            </Routes>
            </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
