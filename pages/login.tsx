/**
 * login
 */
import { Space, Button } from 'antd';

const Login = () => {
  const handleClick = (role: number) => {
    localStorage.setItem('ROLE', role.toString());
  };
  return (
    <>
      <Space>
        <Button
          onClick={() => {
            handleClick(0);
          }}
        >
          高校管理员
        </Button>
        <Button
          onClick={() => {
            handleClick(1);
          }}
        >
          高校导师
        </Button>
        <Button
          onClick={() => {
            handleClick(2);
          }}
        >
          企业管理员
        </Button>
      </Space>
    </>
  );
};

export default Login;
