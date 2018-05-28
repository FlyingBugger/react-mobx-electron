import React from 'react';
import ReactDOM from 'react-dom';
import APP from '../components/App';
import Login from '../components/login';
import Menu from '../common/Menu'

import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
export default ()=>{

  return(

        <Router basename="/">
            <div>
        <Menu/>
          <Switch>
               <Route exact path="/" component={Login}/>
               <Route exact path="/APP"  component={APP} />
               <Redirect to="/" />
           </Switch>
                   </div>
        </Router>

  )
}
