import React from 'react';
import styled from 'styled-components';

const Wrapper = (props) => {
  return (
    <Wrap>
      <Header>{props.title}</Header>
      {props.children}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 32px 50px 42px;
  background-color: white;
`;

const Header = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  margin-bottom: 30px;
`;

export default Wrapper;