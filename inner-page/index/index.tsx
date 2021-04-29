import { useState } from 'react';

import Login from 'inner-page/index/login';
import Register from 'inner-page/index/register';

import 'styles/index.css';

// FIXME: 常量需要有适当的备注
export const LOGIN = 'login';
export const REGISTER = 'register';

/**
 * show
 */
const Show = () => {
  const [pageState, setPageState] = useState(LOGIN);

  // FIXME: 这里可以看一下useCallback, 你判断一下是不是需要进行优化, 对于setPageState这个参数
  return (
    <div className="index-box">
      <div className="index-inner-box">
        {pageState === LOGIN ? <Login setPageState={setPageState} /> : null}
        {pageState === REGISTER ? (
          <Register setPageState={setPageState} />
        ) : null}
      </div>
    </div>
  );
};

export default Show;
