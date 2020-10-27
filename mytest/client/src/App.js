import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Labeler from './components/Labeler.js'

// import { json } from 'express';
function Home(){
    return <h1>this is home</h1>
}
function About(){
    return <h1>this is about</h1>
}
function Staff(){
    return <h1>this is staff</h1>
}
function App() {

  
  return (
    <div className="App">
      

    {/* <button 
        onClick={() => {
            fetch('try').then(res => res.json()).then(data => console.log(data));
        }}>
        click me
    </button> */}

    <Labeler categoryName="football"></Labeler>
    {/* <Router>
    <header>this is my navbar

    <Switch>
            <Route path="/about">
                <About></About>
            </Route>

            <Route path="/staff">
                <Staff></Staff>
            </Route>

            <Route path="/">
            <Labeler categoryName="football"></Labeler>
            </Route>
        </Switch>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/staff">staff</Link></li>
        </ul>

        
    </header>
    </Router> */}
      
    

    </div>
  );
}

export default App;
