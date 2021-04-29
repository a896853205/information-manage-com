import { useState } from 'react';

import Login from 'inner-page/index/login';
import Register from 'inner-page/index/register';

import 'styles/index.css';

export const LOGIN = 'login';
export const REGISTER = 'register';

/**
 * show
 */
const Show = () => {
  const [pageState, setPageState] = useState(LOGIN);

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
