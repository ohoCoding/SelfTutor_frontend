import React, {useEffect, useRef ,useState ,useCallback} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import logo from '../../assets/images/LOGO.png';
import { FiMenu as MenuIcon, FiX as CloseIcon} from 'react-icons/fi';
import HomeIcon from '../../assets/images/navbar/home.png';
import TeacherIcon from '../../assets/images/navbar/teacher.png';
import ClassIcon from '../../assets/images/navbar/class.png';

const NavBar = (props) => {
  const {pathname} = props;
  useEffect(() => {
    console.log(props);
    console.log(pathname);
  })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const highMenuList = useRef([
    '홈',
    '선생님리스트',  
    '강의리스트',
  ]);
  const [highMenuState, setHighMenuState] = useState([true]);

  useEffect(() => {
    setHighMenuState((highMenuState) => 
    highMenuState.concat(
      Array(highMenuList.current.length - 1).fill(false)
    )
   );
  },[]);

  const MenuClick = useCallback (
    (url) => {
        props.push(url);
    },[props]
  );
  
  const UpperMenuClick = useCallback(
    (idx, url) => {
      setHighMenuState((higherMenuState) => higherMenuState.map((menu, index) =>
          index === idx ? menu === true ? (menu = false) : (menu = true): (menu = false)
        )
      );

      if (idx === 0 && url) MenuClick(url);
    },
    [MenuClick]
  );

  const LowMenuContainer = ({ index }) => {
      switch(index) {
        case 1:
          return(
            <LowMenuList isOpen = {highMenuState[index]}>
              <LowMenuItem
                className = "teacher"
                onClick = {() =>  <Link to="./pages/teacher/TeacherList"/>}
                // active={pathname.indexOf('/teacher') === 0}
              >  선생님 리스트
              </LowMenuItem> 
            </LowMenuList>
          );
       case 2:
          return(
            <LowMenuList isOpen = {highMenuState[index]}>
              <LowMenuItem
                className = "class"
                onClick = {() => MenuClick('/class/list')}
                // active={pathname.indexOf('/class') === 0}
              >  강의 리스트
              </LowMenuItem> 
            </LowMenuList>
          );
        default: return null;
      }
    };

    const MenuListContainer = () => {
      return(
        <>
         <MenuList>
            {highMenuList.current.map((menu, index) =>{
              return index === 0? (
                <MenuItem 
                  onClick ={() => UpperMenuClick(index, '/')}
                  active ={highMenuState[index]}
                  key={index}
                >
                  <img src={HomeIcon} alt ="" width="30" height="30"/>
                  <span>{menu}</span>
                </MenuItem>
              ) : (
                <React.Fragment key = {index}>
                  <MenuItem 
                    onClick ={() =>  UpperMenuClick(index)}
                    active = {highMenuState[index]}
                  >
                    {
                      {
                        1: <img src={TeacherIcon} alt="" width="30" height="30"/>,
                        2: <img src={ClassIcon} alt="" width="30" height="30"/>,
                      }[index]
                    }
                    <span>{menu}</span>
                  </MenuItem>
                  <LowMenuContainer
                    index ={highMenuState[index] ? index: null}
                  />
                </React.Fragment>
              )
            })}
        </MenuList>
      </>
      );
    };
  return(
    <>
      {isMobile ? (
        <MobileContainer>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
         {isMenuOpen ?(
           <MenuBtn onClick={(e) => setIsMenuOpen(false)}>
           <CloseIcon />
          </MenuBtn>
         ):(
          <MenuBtn onClick={(e) => setIsMenuOpen(true)}>
           <MenuIcon />
         </MenuBtn>
         )}
         {isMenuOpen && (
            <MobileMenu isMobile={isMobile}>
              <MenuListContainer />
            </MobileMenu>
          )}
        </MobileContainer>
      ):(
        <Container>
          <MenuLogo>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </MenuLogo>
          <MenuListContainer />
        </Container>
      )}
    </>
  );
};

const MobileContainer = styled.div`
  height: 4rem;
  width: 100%;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #2d373e;
  z-index: 1001;

  img {
    width: 7.625rem;
    height: 1.25rem;
  }
`;
 
const MobileMenu = styled.div`
  z-index: 1002;
  width: 100%;
  height: calc(100vh - 4rem);
  position: absolute;
  left: 0;
  top: 4rem;
  display: flex;
  flex-direction: column;
  background: #2d373e;
  overflow-y: ${(props) => props.isMobile && 'auto'};
`;

const MenuBtn = styled.div`
  cursor: pointer;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #ffffff;

    &:hover {
      color: #60bbff;
    }
  }
`;

const Container = styled.div`
  height: 100%;
  /* width: 12.5rem; */
  width: 220px;
  display: flex;
  flex-direction: column;
  position: fixed;
  background: #ffffff;
  z-index: 1001;
  border-right: 0.0625rem solid #eeeeee;
`;

const MenuLogo = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 7.625rem;
    height: 1.25rem;
  }
`;

 const LowMenuList = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 0 15px;
 `;
const LowMenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ active }) => (active ? '#2A91DF' : '#666666')};
  background-color: ${({ active }) =>
    active ? 'rgba(42, 145, 223, 0.1)' : '#ffffff'};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: ${({ active }) => !active && '#dddddd'};
  }
`;

const MenuList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const MenuItem = styled.div`
  width: 100%;
  display: flex;
  /* padding: 1.25rem 2.1875rem; */
  align-items: center;
  /* justify-content: center; */
  padding: 20px 0 20px 20px;
  color: ${(props) => (props.active ? '#2A91DF' : '#666666')};
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ active }) => !active && '#dddddd'};
  }

  & > span {
    width: 130px;
    /* width: 150px; */
  }

  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.625rem;

    path {
      fill: ${(props) => (props.active ? '#2A91DF' : '#666666')};
    }
  }
`;

export default connect(push)(React.memo(NavBar));