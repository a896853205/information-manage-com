import { Space, Button } from 'antd';
import { useRouter } from 'next/router';

/**
 * login
 */
const Login = () => {
  const router = useRouter();
  // TODO: 暂时方便进入到不同权限页面, 后期加上登录
  const handleClick = (role: number) => {
    localStorage.setItem('Role', role.toString());
    router.push('/home');
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            handleClick(1);
          }}
        >
          高校管理员
        </Button>
        <Button
          type="primary"
          onClick={() => {
            handleClick(2);
          }}
        >
          高校导师
        </Button>
        <Button
          type="primary"
          onClick={() => {
            handleClick(3);
          }}
        >
          企业管理员
        </Button>
      </Space>
    </>
  );
};

export default Login;
