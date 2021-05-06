import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

/**
 * show
 */
const Show = () => {
  return (
    <Button type="primary" icon={<GithubOutlined />} size="large" shape="round">
      login
    </Button>
  );
};

export default Show;
