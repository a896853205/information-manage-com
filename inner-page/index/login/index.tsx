import Image from 'next/image';

import Detail from 'inner-page/index/login/form';
import { LOGIN, REGISTER } from 'inner-page/index';

interface ShowProps {
  setPageState: Function;
}

const Show: React.FC<ShowProps> = ({ setPageState }) => {
  return (
    <>
      <div className="left-login-box">
        <Image
          src="/image/login.png"
          alt="login"
          layout="fill"
          objectFit="cover"
        />
        <div className="mask-box" />
      </div>
      <div className="right-login-box">
        <div className="logo-box">
          {/* FIXME: 图片 */}
          {/* FIXME: 图片的路径名应与本文件的路径一致 */}
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
