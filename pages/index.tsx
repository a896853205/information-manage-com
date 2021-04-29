import { useState } from 'react';

// import InnerLogin from 'inner-page/index/login';
// import InnerRegister from 'inner-page/index/register';
import Login from 'inner-page/login/show';
import Register from 'inner-page/register/show';

import 'styles/index.css';

const LOGIN = 'login';

/**
 * index
 */
const Index = () => {
  const [pageState, setPageState] = useState(LOGIN);
  // TODO: 暂时方便进入到不同权限页面, 后期加上登录

  return (
    <div className="index-box">
      <div className="index-inner-box">
        {pageState === LOGIN ? (
          <Login setPageState={setPageState} />
        ) : (
          <Register setPageState={setPageState} />
        )}
      </div>
    </div>
  );
};

export default Index;
