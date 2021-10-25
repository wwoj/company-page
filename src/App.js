
import {HashRouter, Route } from "react-router-dom";
import Home from "./View/home"
import './App.css';

function App() {
  return (
    <HashRouter>
    <div className="global-container">
   
      <Route exact path="/" component={Home} />
      <Route path ="/Informations" component={Home} />
      <Route path ="/Experience" component={Home} />
      <Route path ="/Contact" component={Home} />
      <Route path ="/Recommendations" component={Home} />>
    </div>
  </HashRouter>
  );
}

export default App;
