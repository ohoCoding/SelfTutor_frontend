import React, { useState, useCallback, Suspense } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import HashLoader from 'react-spinners/HashLoader';
import { ToastContainer } from 'react-toastify';

const Header = React.lazy(() => import('../common/Header'));
const NavBar = React.lazy(() => import('../common/NavBar'));
// const Footer = React.lazy(() => import('../common/Footer'));

const loading = () => <div></div>;

const contentLoading = () => (
  <HashLoader
    css={{
      display: 'block',
      width: '100%',
      height: '100%',
      margin: '0 auto',
    }}
    color={'#41a1ea'}
    loading={true}
    size={100}
  />
);

const Manager = props => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const children = props.children || null;

  const onMenuToggle = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <Container isMobile={isMobile}>
      {(isMobile || isMenuOpen) && (
        <Suspense fallback={loading()}>
          <NavBar />
        </Suspense>
      )}
      <Content isMobile={isMobile} isMenuOpen={isMenuOpen}>
        <Suspense fallback={loading()}>
          <Header
            isMobile={isMobile}
            isMenuOpen={isMenuOpen}
            onMenuToggle={onMenuToggle}
          />
        </Suspense>
        <Suspense fallback={contentLoading()}>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
          />
        </Suspense>
        {/* <Suspense fallback={loading()}>
          <Footer />
        </Suspense> */}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
`;

const Content = styled.div`
  width: 100%;
  padding-top: ${props => (props.isMobile ? '4rem' : '0')};
  padding-left: ${props =>
    props.isMobile || !props.isMenuOpen ? '0' : '220px'};
  display: flex;
  flex-direction: column;
`;

export default Manager;
