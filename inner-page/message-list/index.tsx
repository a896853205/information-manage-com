import { Typography, Space } from 'antd';

import Table from './table';
import Search from './search';

const { Title } = Typography;

const MessageList = () => {
  // TODO: 上面有搜索，Key/Message查询，type有筛选，Action操作（删除与修改）

  return (
    <>
      <Typography>
        <Title>message-list</Title>
        <Search />
        <Table />
      </Typography>
    </>
  );
};

export default MessageList;
