import React from 'react';
import Detail from 'inner-page/login/detail';

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
        <img className="image-background" src="image/login.png" alt="login" />
      </div>
      <div className="right-box">
        <div className="logo-box">
          <img src="image/edu.svg" className="logo-svg" />
          <span className="logo-content">黑龙江研究生联合培养基地</span>
        </div>
        <div className="nav">
          <a onClick={() => setPageState(LOGIN)} className="focus button">
            登录
          </a>
          <a onClick={() => setPageState(REGISTER)} className="unfocus button">
            注册
          </a>
        </div>
        <div className="inner-form">
          <Detail />
        </div>
        <div className="inner-bottom">
          <span>没有账号？</span>
          <a onClick={() => setPageState(REGISTER)}>点此注册</a>
        </div>
      </div>
    </>
  );
};

export default Show;
