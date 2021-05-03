import Image from 'next/image';

import Detail from 'inner-page/index/login/form';
import { LOGIN, REGISTER } from 'inner-page/index';
import styles from '../index.module.scss';
interface ShowProps {
  onPageStateChange: (pageState: string) => void;
}

const Show: React.FC<ShowProps> = ({ onPageStateChange }) => {
  return (
    <>
      <div className={styles['left-login-box']}>
        <Image
          src="/image/index/login.png"
          alt="login"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles['mask-box']} />
      </div>
      <div className={styles['right-login-box']}>
        <div className={styles['logo-box']}>
          <Image src="/image/index/edu.svg" width={36} height={36} alt="logo" />
          <span className={styles['logo-content']}>
            黑龙江研究生联合培养基地
          </span>
        </div>
        <div className={styles['nav']}>
          <a
            onClick={() => onPageStateChange(LOGIN)}
            className={styles['focus']}
          >
            登录
          </a>
          <a
            onClick={() => onPageStateChange(REGISTER)}
            className={styles['unfocus']}
          >
            注册
          </a>
        </div>
        <div className={styles['inner-form']}>
          <Detail />
        </div>
        <div className={styles['inner-bottom']}>
          <span>没有账号？</span>
          <a onClick={() => onPageStateChange(REGISTER)}>点此注册</a>
        </div>
      </div>
    </>
  );
};

export default Show;
