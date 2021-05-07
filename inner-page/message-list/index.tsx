import { Typography, Table } from 'antd';

const { Column } = Table;

const { Title } = Typography;
const MessageList = () => {
  // TODO: 上面有搜索，Key/Message查询，type有筛选，Action操作（删除与修改）
  return (
    <>
      <Typography>
        <Title>message-list</Title>
        <Table>
          <Column title="Key" dataIndex="key" key="key" />
          <Column title="Message" dataIndex="message" key="message" />
          <Column title="Type" dataIndex="type" key="type" />
          <Column title="Action" />
        </Table>
      </Typography>
    </>
  );
};

export default MessageList;
