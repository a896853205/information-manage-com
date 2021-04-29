import Image from 'next/image';

import Detail from 'inner-page/index/register/form';
import { LOGIN, REGISTER } from 'inner-page/index';
interface ShowProps {
  onChange: Function;
}
const Show: React.FC<ShowProps> = ({ onChange }) => {
  return (
    <>
      <div className="left-register-box">
        <Image
          src="/image/index/register.jpg"
          alt="login"
          layout="fill"
          objectFit="cover"
        />
        <div className="mask-box" />
      </div>
      <div className="right-register-box">
        <div className="logo-register-box">
          <Image src="/image/index/edu.svg" width={36} height={36} alt="logo" />
          <span className="logo-content">黑龙江研究生联合培养基地</span>
        </div>
        <div className="nav">
          <a onClick={() => onChange(LOGIN)} className="unfocus button">
            登录
          </a>
          <a onClick={() => onChange(REGISTER)} className="focus button">
            注册
          </a>
        </div>
        <div className="inner-form">
          <Detail />
        </div>
        <div className="inner-bottom">
          <span>已有账号？</span>
          <a onClick={() => onChange(REGISTER)}>点此登录</a>
        </div>
      </div>
    </>
  );
};

export default Show;
