import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/home/Home'));
const Register = React.lazy(() => import('../pages/Register'));
const TeacherList = React.lazy(() => import('../pages/teacher/TeacherList'));
const TeacherAdd = React.lazy(() => import('../pages/teacher/TeacherAdd'));
const TeacherDetail = React.lazy(() => import('../pages/teacher/TeacherDetail'));

const rootRoute = {
  path: '/home',
  exact: true,
  component: () => <Redirect to="/home" />,
  route: Route,
};


const homeRoutes = {
  path: '/home',
  name: 'Home',
  component: Home,
  route: Route,
  roles: ['Admin', 'User'],
};
const teacherRoutes = {
  path: '/teacher',
  name: 'Teacher',
  children: [
    
    {
      path: '/teacher/list',
      name: 'TeacherList',
      component: TeacherList,
      route: Route,
      roles: ['Admin'],
    },
    {
      path: '/teacher/add',
      name: 'TeacherAdd',
      component: TeacherAdd,
      route: Route,
      roles: ['Admin'],
    },
    {
      path: '/teacher/detail',
      name: 'TeacherDetail',
      component: TeacherDetail,
      route: Route,
      roles: ['Admin'],
    }
  ],
};

const flattenRoutes = (routes) => {
  let flatRoutes = [];

  routes = routes || [];
  routes.forEach((item) => {
    flatRoutes.push(item);

    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });

  return flatRoutes;
};
const allRoutes = [
  rootRoute,
  homeRoutes,
  teacherRoutes,
];


const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, allFlattenRoutes };