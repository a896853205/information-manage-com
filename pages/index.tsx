import { useBoolean } from 'ahooks';

import InnerLogin from 'inner-page/index/login';
import InnerRegister from 'inner-page/index/register';

import 'styles/index.css';

/**
 * login
 */
const Login = () => {
  const [isLogin, { setTrue, setFalse }] = useBoolean(true);
  // TODO: 暂时方便进入到不同权限页面, 后期加上登录

  return (
    <div className="index-box">
      <div className="index-inner-box">
        <div className="left-box">
          {isLogin ? (
            <img
              className="image-background"
              src="image/login.jpg"
              alt="login"
            />
          ) : (
            <>
              <div className="left-logo-box">
                <img src="image/edu.svg" className="logo-svg" />
                <span>黑龙江研究生联合培养基地</span>
              </div>
              <img
                className="image-background"
                src="image/register.png"
                alt="register"
              />
            </>
          )}
        </div>
        <div className="right-box">
          {isLogin ? (
            <div className="logo-box">
              <img src="image/edu.svg" className="logo-svg" />
              <span>黑龙江研究生联合培养基地</span>
            </div>
          ) : null}
          <div className="nav">
            <a
              onClick={setTrue}
              className={`${isLogin ? 'focus' : 'unfocus'} button`}
            >
              登录
            </a>
            <a
              onClick={setFalse}
              className={`${isLogin ? 'unfocus' : 'focus'} button`}
            >
              注册
            </a>
          </div>
          <div className="inner-form">
            {isLogin ? <InnerLogin /> : <InnerRegister />}
          </div>
          <div className="inner-bottom">
            {isLogin ? (
              <div>
                <span>没有账号？</span>
                <a onClick={setFalse}>点此注册</a>
              </div>
            ) : (
              <div>
                <span>已有账号？</span>
                <a onClick={setTrue}>点此登录</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
