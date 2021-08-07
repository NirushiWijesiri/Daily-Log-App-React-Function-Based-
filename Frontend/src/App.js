import React from 'react';
import Header from './layout/header/Header';
import DailyLog from './component/dailylog/DailyLog';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddDailylog from './component/dailylog/AddDailylog/AddDailylog';
import EditDailylog from './component/dailylog/EditDailylog/EditDailylog';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <br></br>
      <Switch>
        <Route exact path = "/">
          <div className="container">
            <div className ="col-6">
              <DailyLog />
            </div>
          </div>
        </Route>
        <Route exact path = "/add">
          <AddDailylog />
        </Route>
        <Route exact path = "/edit/:id">
          <EditDailylog />
        </Route>
      </Switch>
      
      
      </Router>
    </div>
    
    
  );
}

export default App;
