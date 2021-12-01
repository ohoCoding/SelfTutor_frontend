import React, {Component, useEffect} from "react";

import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import NavBar from "../common/NavBar";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Manager from "../layouts/Manager";

const Home = props => {
  useEffect(() => {
    console.log(props);
    console.log('hi');
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return(
      <>
      {/* <Container isMobile={isMobile}>
      
       </Container> */}
       <Manager/>
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


const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
});

export default connect(mapStateToProps, { push })(React.memo(Home));