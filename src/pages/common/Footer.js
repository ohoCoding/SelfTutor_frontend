import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useMediaQuery } from 'react-responsive';

const Component = props => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Footer isMobile={isMobile}>
      <span>&copy; {dayjs().year()}, SQISoft Inc. All rights reserved.</span>
    </Footer>
  );
};

const Footer = styled.div`
  height: 1.8125rem;
  display: flex;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  justify-content: ${props => (props.isMobile ? 'center' : 'flex-end')};
  align-items: ${props => (props.isMobile ? 'flex-end' : 'center')};
  padding: ${props => (props.isMobile ? '0 1rem' : '0 2.5rem')};
  background-color: ${props => props.theme.bodyBg};
  color: #666666;
  font-weight: 400;
  font-size: 0.75rem;
`;

export default connect(null, { push })(React.memo(Component));
