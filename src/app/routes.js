import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useSelector } from 'react-redux';
import Home from '../pages/home/Home';
// import { allFlattenRoutes as routes } from './routeSwitch';
// const Home = React.lazy(() => import('../pages/home/Home'));
const Register = React.lazy(() => import('../pages/Register'));
const TeacherList = React.lazy(() => import('../pages/teacher/TeacherList'));
const TeacherAdd = React.lazy(() => import('../pages/teacher/TeacherAdd'));
const TeacherDetail = React.lazy(() => import('../pages/teacher/TeacherDetail'));

// import AuthLayout from '../pages/layouts/Auth';
// import ManagerLayout from '../pages/layouts/Manager';


// import RndBackground from '../pages/player/rnd/Background';
// import ContextBackground from '../pages/player/context/Background';

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

const Routes = () => {
  
  return (
    
       
        <Switch>
          <Route exact path ='/' component ={Home}/>
          <Route exact path ='/register' component ={Register} />
          <Route exact path ='/teacher/list' component={TeacherList}/>
          <Route exact path ='/teacher/teacheradd' component={TeacherAdd}/>
          <Route exact path ='/teacher/teacherdetail' component={TeacherDetail}/>
        </Switch>
      
    
     
  );
 
  
};

export default Routes;
