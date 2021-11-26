import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// import { authAction, authSelector } from '../../modules/authSlice';
// import { accountSelector, accountAction } from '../../modules/accountSlice';

import { FaSpinner as LoadingIcon } from 'react-icons/fa';
import { FiChevronDown as DownArrowIcon } from 'react-icons/fi';
import { BsPersonLinesFill as ProfileIcon } from 'react-icons/bs';
import { FiPower as LogoutIcon } from 'react-icons/fi';

import ClickOutside from '../../components/ClickOutside';

const ProfileBtn = (props) => {
  const dispatch = useDispatch();
  // const loginInfo = useSelector(authSelector.loginInfo);
  // const authStatus = useSelector(authSelector.status);
  // const status = useSelector(accountSelector.status);

  const [isShow, setIsShow] = useState(false);

  // useEffect(() => {
  //   if (authStatus.actionResult === 'TOKEN_OK') {
  //     dispatch(authAction.actionResultClear());
  //   } else if (authStatus.actionResult === 'TOKEN_ERR') {
  //     dispatch(authAction.actionResultClear());
  //     props.push('/auth/login');
  //   }
  // }, [dispatch, props, authStatus]);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     // 30분 마다 토근 검사 실행
  //     dispatch(authAction.token());
  //   }, 1000 * 60 * 30);

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [dispatch]);

  // if (status.isLoading) {
  //   return <LoadingIcon />;
  // }

  return (
    <>
      <ClickOutside onClickOutside={() => setIsShow(false)}>
        <Container>
          <SelectBtn onClick={() => setIsShow(!isShow)}>
            <SelectLogo>
              {/* {loginInfo.imagePath ? (
                <img
                  src={`${window.location.origin}/data${loginInfo.imagePath}`}
                  alt=""
                />
              ) : (
                <span>
                  {loginInfo.accountEmail?.substring(0, 2).toUpperCase()}
                </span>
              )} */}
            </SelectLogo>
            {/* <SelectTitle>{loginInfo.accountNm}</SelectTitle> */}
            <DownArrowIcon />
          </SelectBtn>
          <OptionWrapper
            style={isShow ? { display: 'block' } : { display: 'none' }}
          >
            <OptionList>
              <OptionItem
                key={'profile'}
                onClick={() => {
                  setIsShow(false);
                  props.push('/profile');
                }}
              >
                <ProfileIcon />내 계정
              </OptionItem>
              <OptionItem
                key={'logout'}
                onClick={() => {
                  setIsShow(false);
                  props.push('/auth/logout');
                }}
              >
                <LogoutIcon />
                로그아웃
              </OptionItem>
            </OptionList>
          </OptionWrapper>
        </Container>
      </ClickOutside>
    </>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const SelectBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  outline: 0;

  & > svg {
    margin-left: 0.375rem;
  }
`;

const SelectLogo = styled.div`
  position: relative;
  width: 1.875rem;
  height: 1.875rem;
  border: 0.0625rem solid #999999;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.375rem;

  & > img {
    position: absolute;
    max-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 0.8rem;
    color: #333333;
  }
`;

const SelectTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #666666;
`;

const OptionWrapper = styled.div`
  width: 10.875rem;
  position: absolute;
  display: flex;
  right: 0.625rem;
  top: 2.5rem;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 0.375rem;
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const OptionItem = styled.li`
  height: 2.8125rem;
  padding: 0.625rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  color: #999999;
  line-height: 1.375rem;
  cursor: pointer;

  &:not(:first-child) {
    border-top: 0.0625rem solid rgba(60, 60, 67, 0.36);
  }

  & > svg {
    margin-right: 0.625rem;
  }

  &:hover {
    background: #dddddd;
  }
`;

export default connect(null, { push })(React.memo(ProfileBtn));
