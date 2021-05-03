import Image from 'next/image';

import Detail from 'inner-page/index/register/form';
import { LOGIN, REGISTER } from 'inner-page/index';
import styles from '../index.module.scss';

interface ShowProps {
  onPageStateChange: (pageState: string) => void;
}

const Show: React.FC<ShowProps> = ({ onPageStateChange }) => {
  return (
    <>
      <div className={styles['left-register-box']}>
        <Image
          src="/image/index/register.jpg"
          alt="login"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles['mask-box']} />
      </div>
      <div className={styles['right-register-box']}>
        <div className={styles['logo-register-box']}>
          <Image src="/image/index/edu.svg" width={36} height={36} alt="logo" />
          <span className={styles['logo-content']}>
            黑龙江研究生联合培养基地
          </span>
        </div>
        <div className={styles['nav']}>
          <a
            onClick={() => onPageStateChange(LOGIN)}
            className={styles['unfocus']}
          >
            登录
          </a>
          <a
            onClick={() => onPageStateChange(REGISTER)}
            className={styles['focus']}
          >
            注册
          </a>
        </div>
        <div className={styles['inner-form']}>
          <Detail />
        </div>
        <div className={styles['inner-bottom']}>
          <span>已有账号？</span>
          <a onClick={() => onPageStateChange(REGISTER)}>点此登录</a>
        </div>
      </div>
    </>
  );
};

export default Show;
