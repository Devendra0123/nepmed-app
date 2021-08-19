import React,{useEffect, useState} from "react";
import './App.css';
import Navbar from "./component/studentSection/Navbar";
import Sidebar from "./component/studentSection/Sidebar";
import Feed from "./component/studentSection/Feed";
import Widget from "./component/studentSection/Widget";
import {Switch,BrowserRouter as Router,Route} from "react-router-dom";
import Register from "./component/Register";
import Pusher from "pusher-js";
import axios from "axios";


function App() {
 return <div className="app">
       <Router>
         <Switch>
           <Route exact path="/">
            <Navbar />
            <div className="app_body">
             <Sidebar />
             <Feed />
             <Widget />
            </div>
           </Route>
           <Route path="/register">
             <Register />
           </Route>
         </Switch>
       </Router> 
    </div>;
  
}

export default App;
