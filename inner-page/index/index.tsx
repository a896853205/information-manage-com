import { useCallback, useState } from 'react';

import Login from 'inner-page/index/login';
import Register from 'inner-page/index/register';

import 'styles/index.css';

// 登录和注册状态
export const LOGIN = 'login';
export const REGISTER = 'register';

/**
 * show
 */
const Show = () => {
  const [pageState, setPageState] = useState(LOGIN);
  const onChange = useCallback(pageState => {
    setPageState(pageState);
  }, []);

  // FIXME: 这里可以看一下useCallback, 你判断一下是不是需要进行优化, 对于setPageState这个参数
  return (
    <div className="index-box">
      <div className="index-inner-box">
        {pageState === LOGIN ? <Login onChange={onChange} /> : null}
        {pageState === REGISTER ? <Register onChange={onChange} /> : null}
      </div>
    </div>
  );
};

export default Show;
