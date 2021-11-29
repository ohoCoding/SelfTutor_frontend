import React, {Component} from "react";

import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import NavBar from "../common/NavBar";

const Home = props => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return(
      <>
      {/* <Container isMobile={isMobile}>
      
       </Container> */}
       <NavBar/>
      </>
    ) 
  
};
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.isMobile ? '0.625rem' : '1.875rem 2.1875rem')};
  background-color: ${(props) => props.theme.bodyBg};

  & > :not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;
const Header = styled.div`
  height: 6.25rem;
  display: flex;
  align-items: center;
`;
export default Home;