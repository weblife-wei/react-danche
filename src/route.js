import React from 'react';
import {HashRouter as Router , Route ,Switch,Redirect,} from 'react-router-dom';
import App from './App';
//平级关系的组件
import Login from './login';
import Admin from './admin';

//admin组件中的组件
import Home from './pages/home';
import Nomatch from './pages/nomatch';
import  Buttons from './pages/ui/buttons';

export default function RouteApp() {
  return (
    <Router>
      <App>
        <Route component={Login}
          exact
          path="/"
        />
        <Route
          path="/admin"
          render={()=>
            <Admin>
              <Redirect to="/admin/home"/>
              <Switch>
                <Route component={Home}
                  exact
                  path="/admin/home"
                ></Route>
                <Route component={Buttons}
                  exact
                  path="/admin/ui/buttons"
                ></Route>
                <Route component={Nomatch}/>
              </Switch>
            </Admin>
            }
        />
      </App>
    </Router>
  );
}
