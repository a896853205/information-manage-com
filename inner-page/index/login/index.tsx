import Image from 'next/image';

import Detail from 'inner-page/index/login/form';
import { LOGIN, REGISTER } from 'inner-page/index';

interface ShowProps {
  onChange: Function;
}

const Show: React.FC<ShowProps> = ({ onChange }) => {
  return (
    <>
      <div className="left-login-box">
        <Image
          src="/image/index/login.png"
          alt="login"
          layout="fill"
          objectFit="cover"
        />
        <div className="mask-box" />
      </div>
      <div className="right-login-box">
        <div className="logo-box">
          <Image src="/image/index/edu.svg" width={36} height={36} alt="logo" />
          <span className="logo-content">黑龙江研究生联合培养基地</span>
        </div>
        <div className="nav">
          <a onClick={() => onChange(LOGIN)} className="focus button">
            登录
          </a>
          <a onClick={() => onChange(REGISTER)} className="unfocus button">
            注册
          </a>
        </div>
        <div className="inner-form">
          <Detail />
        </div>
        <div className="inner-bottom">
          <span>没有账号？</span>
          <a onClick={() => onChange(REGISTER)}>点此注册</a>
        </div>
      </div>
    </>
  );
};

export default Show;
