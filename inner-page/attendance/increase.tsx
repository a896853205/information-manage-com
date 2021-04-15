import { Button, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';

import Content from 'inner-page/attendance/content';
// import Mock from 'mockjs';

const { Search } = Input;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);

  return (
    <>
      <Button
        onClick={setTrue}
        type="primary"
        style={{ marginRight: 10 }}
        icon={<PlusOutlined />}
      >
        新增
      </Button>
      <Content isShow={isShow} setFalse={setFalse} />
      <Search placeholder="搜索" style={{ width: 200 }} />
    </>
  );
};
