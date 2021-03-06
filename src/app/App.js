import React  from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
// import Teacher from './pages/teacher/TeacherList.js';
// import Class from './pages/class/ClassList.js';
// import Home from './pages/Home.js';
// import Register from './pages/Register.js';
// import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from '../pages/common/Header';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Home from '../pages/home/Home';
import TeacherList from '../pages/teacher/TeacherList';
import TeacherAdd from '../pages/teacher/TeacherAdd';
import TeacherDetail from '../pages/teacher/TeacherDetail';
import NavBar from '../pages/common/NavBar';
// const theme = {
//   white: '#fff',
//   black: '#000',
//   grayBackground: '#dfdfdf',
//   disabled: '#f7f7f7',
//   gray100: '#f1f1f1',
//   gray200: '#eee',
//   gray300: '#ccc',
//   gray400: '#aaa',
//   gray500: '#999',
//   gray600: '#777',
//   gray700: '#555',
//   gray800: '#333',
//   gray900: '#111',
//   blue: '#41a1ea',
//   indigo: '#727cf5',
//   purple: '#6b5eae',
//   pink: '#ff679b',
//   red: '#f05b5b',
//   orange: '#fd7e14',
//   yellow: '#ffbc00',
//   green: '#0acf97',
//   teal: '#02a8b5',
//   cyan: '#39afd1',
//   bodyBg: '#f4f5f6',
// };

// const GlobalStyle = createGlobalStyle`
//   /* @charset "utf-8"; */

//   html {
//     width: 100%;
//     height: 100%;
//     font-size: 16px;
//   }

//   body {
//     width: 100%;
//     height: 100%;
//     font-family: 'Roboto', 'Noto Sans KR', sans-serif !important;
//     box-sizing: border-box;

//     #root {
//       width: 100%;
//       height: 100%;
//     }
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//   }

//   button {
//     cursor: pointer;
//     border: none;

//     &:focus {
//       outline: none;
//     }
//   }

//   button, input, textarea {
//     font: inherit;
//   }

//   * {
//     box-sizing: inherit;
//   }

//   *:not(input, textarea) {
//     /* ????????? ?????? css */
//     -webkit-touch-callout: none; /* iOS Safari */
//     -webkit-user-select: none; /* Safari */
//     -khtml-user-select: none; /* Konqueror HTML */
//     -moz-user-select: none; /* Old versions of Firefox */
//     -ms-user-select: none; /* Internet Explorer/Edge */
//     user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
//   }

//   /* ????????? ??? placeholder ????????? in <input>, <textarea> */
//   input:focus::-webkit-input-placeholder,
//   textarea:focus::-webkit-input-placeholder { /* WebKit browsers */
//     color: transparent;
//   } 
//   input:focus:-moz-placeholder,
//   textarea:focus:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
//     color:transparent;
//   }
//   input:focus::-moz-placeholder,
//   textarea:focus::-moz-placeholder { /* Mozilla Firefox 19+ */
//     color:transparent;
//   }
//   input:focus:-ms-input-placeholder,
//   textarea:focus:-ms-input-placeholder { /* Internet Explorer 10+ */
//     color:transparent;
//   }

//   .designed-scroll::-webkit-scrollbar {
//     width: 6px;
//   }
//   .designed-scroll::-webkit-scrollbar-thumb {
//     background-color: #cccccc;
//     border-radius: 2.5px;
//   }
//   .designed-scroll::-webkit-scrollbar-thumb:hover {
//     background-color: #aaaaaa;
//   }

//   .viewer {
//     overflow: hidden;
//     -ms-user-select: none;
//     -moz-user-select: -moz-none;
//     -webkit-user-select: none;
//     -khtml-user-select: none;
//     user-select:none;
//   }
//   .viewer::-webkit-scrollbar {
//     display: none;
//   }

//   .label-vertical-center {
//     padding-top: calc(.45rem + 1px);
//     padding-bottom: calc(.45rem + 1px);
//     line-height: 1.5;
//   }
// `;

function App() {

    return (
      // <ThemeProvider theme={theme}>
      //   <GlobalStyle />
        <Router>
             <NavBar/>
              {/* <Header/> */}
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path ="/teacher/list" component={TeacherList} />
                <Route exact path ="/teacher/add" component={TeacherAdd} />
                <Route exact path ="/teacher/detail" component={TeacherDetail}/>
              </Switch>
              {/* <Routes/> */}
        </Router>
      // </ThemeProvider>
    );  
};


export default (React.memo(App));
