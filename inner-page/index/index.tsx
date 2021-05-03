import { useCallback, useState } from 'react';

import Login from 'inner-page/index/login';
import Register from 'inner-page/index/register';

import styles from './index.module.scss';

/** index页处于登录状态 */
export const LOGIN = 'login';
/** index页处于注册状态 */
export const REGISTER = 'register';

/**
 * show
 */
const Show = () => {
  const [pageState, setPageState] = useState(LOGIN);
  const onPageStateChange = useCallback<(pageState: string) => void>(
    pageState => {
      setPageState(pageState);
    },
    []
  );

  return (
    <div className={styles['index-box']}>
      <div className={styles['index-inner-box']}>
        {pageState === LOGIN ? (
          <Login onPageStateChange={onPageStateChange} />
        ) : null}
        {pageState === REGISTER ? (
          <Register onPageStateChange={onPageStateChange} />
        ) : null}
      </div>
    </div>
  );
};

export default Show;
