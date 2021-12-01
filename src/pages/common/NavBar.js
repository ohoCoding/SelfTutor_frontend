import React, {useEffect, useRef ,useState ,useCallback} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import HomeIcon from '../../assets/images/navbar/home.png';
import TeacherIcon from '../../assets/images/navbar/teacher.png';
import ClassIcon from '../../assets/images/navbar/class.png';
import logo from '../../assets/images/LOGO.png';
import { FiMenu as MenuIcon, FiX as CloseIcon} from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons  from 'react-icons/ai';


import { IconContext } from 'react-icons';


const NavBar = (props) => {
    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const SidebarData = [ 
      {
        title: '메인',
        path: '/home',
        icon:  HomeIcon,
        cName: 'nav-text'
      },
      {
        title: '선생님리스트',
        path: '/teacher/list',
        icon:  TeacherIcon,
        cName: 'nav-text'
      },
      {
        title: '강의리스트',
        path: '/class/list',
        icon:  ClassIcon,
        cName: 'nav-text'
      },
      // {
      //   title: 'Contact Us',
      //   path: '/Contact',
      //   icon: <BsIcons.BsEnvelopeFill />,
      //   cName: 'nav-text'
      // }
    ];
   
      return(
        <>
          <IconContext.Provider value ={{ color: '#fff'}}>
             <MenuBar>
              <Link to="#" component={MenuBars}>
                <FaIcons.FaBars onClick = {showSidebar} />
              </Link>
             </MenuBar>

             <nav className={sidebar ? <NavMenuActive/> : <NavMenu/>}>
                <NavMenuItems onClick={showSidebar}>
                  <NavToggle>
                    <Link to="#"  component={MenuBars}>
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </NavToggle>
                {/* SidebarData를 순서대로 담기*/}
                {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                  );
                })}
                </NavMenuItems>
              </nav>
             
          </IconContext.Provider>
        </>
      );
    };

    
    
    const MenuBar = styled.div`
      background-color: #060b26;
      height: 80px;
      display: flex;
      justify-items: center;
      align-items: center;
    `;

    const MenuBars = styled.div`
      margin-left: 2rem;
      font-size: 2rem;
      background:none;
    `;

    const NavMenu = styled.div`
      background-color: #060b26;
      width: 250px;
      height:100vh;
      display:flex;
      position:fixed;
      top:0;
      left:-100%;
      transition: 850ms;
    `;
    
   const NavMenuActive =styled.div`
      left: 0;
      transition: 350ms;
   `;
     
  
    
    // .nav-text a {
    //   text-decoration: none;
    //   color: #f5f5f5;
    //   font-size: 18px;
    //   width: 95%;
    //   height: 100%;
    //   display: flex;
    //   align-items: center;
    //   padding:0 16px;
    //   border-radius: 4px;
    // }
    // .nav-text a:hover{
    //   background-color: #1a83ff;
    // }
    const NavMenuItems = styled.div`
      width:100%;
    `;

    const NavToggle = styled.div`
      background-color: #060b26;
      width:100%;
      height: 80px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `;

export default NavBar;