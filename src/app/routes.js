import React, { useEffect } from 'react';
import { Switch ,Route, Redirect} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Manager from '../pages/layouts/Manager';
import {allFlattenRoutes as routes} from './routeSwitch';


// const Layout = props => {
//   // const pathname = props.pathname;

//   // if (pathname.indexOf('/player/rnd') === 0) {
//   //   return <RndBackground {...props} />;
//   // } else if (pathname.indexOf('/player/context') === 0) {
//   //   return <ContextBackground {...props} />;
//   // } else if (pathname === '/' || pathname.indexOf('/auth') === 0) {
//   //   return <AuthLayout {...props} />;
//   // } else if (props.isLogin) {
//     return <ManagerLayout {...props} />;
//   // }

//   // return <AuthLayout {...props} />;
// };


const Routes = props => {
  const pathname = props.pathname;
  const history = createBrowserHistory();
  useEffect(() => {
    console.log(pathname);
    console.log(props.history);
    console.log(history);
  },[props,pathname,history]);

  return (
     <ConnectedRouter history={history}>
        <Switch>
          {routes.map((route, index ) => {
            return (
              !route.children && (
                <route.route 
                  key = {index}
                  path = {route.path}
                  pathname = {route.pathname}
                  exact= {route.exact}
                  component={route.component}
                ></route.route>
              )
            );
          })}
          <Route render={() => <Redirect to="/home" />}></Route>
         </Switch>
     </ConnectedRouter>
      
  );
};


export default (React.memo(Routes));
