import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import './index.css';
import NotFound from './Pages/NotFound';
import Video from './Pages/Video'
import reportWebVitals from './reportWebVitals';
//:id
ReactDOM.render(<Router>
  <Switch>
    <Route exact="exact" path="/"><Redirect to="/video/9Il5H51_37o" /></Route>
    <Route path="/video/:index"><Video/></Route>
    <Route><NotFound/></Route>
  </Switch>
</Router>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
