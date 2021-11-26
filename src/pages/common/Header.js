import React from 'react';
import styled from 'styled-components';

import { FiMenu as MenuIcon } from 'react-icons/fi';
import ProfileBtn from './ProfileBtn';

const Header = props => {
  return (
    <Container>
      <LeftSide>
        {!props.isMobile && (
          <MenuBtn
            onClick={() => {
              props.onMenuToggle();
            }}
          >
            <MenuIcon />
          </MenuBtn>
        )}
      </LeftSide>
      <RightSide>
        <ProfileBtn />
      </RightSide>
    </Container>
  );
};

const Container = styled.div`
  height: 4rem;
  padding: 0 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.0625rem 0.625rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const LeftSide = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RightSide = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuBtn = styled.div`
  padding: 0 0.625rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default React.memo(Header);
