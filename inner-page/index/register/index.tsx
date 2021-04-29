import Image from 'next/image';

import Detail from 'inner-page/index/register/form';
import { LOGIN, REGISTER } from 'inner-page/index';

interface ShowProps {
  setPageState: Function;
}
const Show: React.FC<ShowProps> = ({ setPageState }) => {
  return (
    <>
      <div className="left-register-box">
        <Image
          src="/image/register.jpg"
          alt="login"
          layout="fill"
          objectFit="cover"
        />
        <div className="mask-box" />
      </div>
      <div className="right-register-box">
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
