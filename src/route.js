import React from 'react';
import {HashRouter as Router , Route ,Switch,Redirect,} from 'react-router-dom';
import App from './App';
//平级关系的组件
import Login from './login';
import Admin from './admin';

//admin组件中的组件
import Home from './pages/home';
import Nomatch from './pages/nomatch';

//ui组件
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modal';
import Loadings from './pages/ui/loading';
import Notifications from './pages/ui/Notification';
import Messages from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Cards from './pages/ui/card';
import Carousels from './pages/ui/Carousel';

//表单
import Denglu from './pages/form/denglu';
import Zhuce from './pages/form/zhuce';

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
                <Route component={Modals}
                  path="/admin/ui/modals"
                />
                <Route component={Loadings}
                  path="/admin/ui/loadings"
                />
                <Route component={Notifications}
                  path="/admin/ui/notification"
                />
                <Route component={Messages}
                  path="/admin/ui/messages"
                />
                <Route component={Tabs}
                  path="/admin/ui/tabs"
                />
                <Route component={Cards}
                  path="/admin/ui/gallery"
                />
                <Route component={Carousels}
                  path="/admin/ui/carousel"
                />
                <Route component={Denglu}
                  path="/admin/form/login"
                />
                <Route component={Zhuce}
                  path="/admin/form/reg"
                />
                <Route component={Nomatch}/>
              </Switch>
            </Admin>
            }
        />
      </App>
    </Router>
  );
}
