import React from 'react';
import Detail from 'inner-page/register/detail';

const LOGIN = 'login';
const REGISTER = 'register';

interface ShowProps {
  setPageState: Function;
}
const Show = ({ setPageState }: ShowProps) => {
  return (
    <>
      <div className="left-box">
        <div className="mask-box" />
        <img
          className="image-background"
          src="image/register.jpg"
          alt="register"
        />
      </div>
      <div className="right-box">
        <div className="logo-register-box">
          <img src="image/edu.svg" className="logo-svg" />
          <span className="logo-content">黑龙江研究生联合培养基地</span>
        </div>
        <div className="nav">
          <a onClick={() => setPageState(LOGIN)} className="unfocus button">
            登录
          </a>
          <a onClick={() => setPageState(REGISTER)} className="focus button">
            注册
          </a>
        </div>
        <div className="inner-form">
          <Detail />
        </div>
        <div className="inner-bottom">
          <span>已有账号？</span>
          <a onClick={() => setPageState(REGISTER)}>点此登录</a>
        </div>
      </div>
    </>
  );
};

export default Show;
