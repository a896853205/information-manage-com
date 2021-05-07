import { Typography, Table, Button, Divider, Tag } from 'antd';

const { Column } = Table;

const { Title } = Typography;

const getTagColorFromType = (type: string) => {
  switch (type) {
    case 'information':
      return 'blue';
    case 'success':
      return 'green';
    case 'alter':
      return 'yellow';
    case 'error':
      return 'red';
    default:
      return 'gray';
  }
};
const MessageList = () => {
  // TODO: 上面有搜索，Key/Message查询，type有筛选，Action操作（删除与修改）
  const mockData = [
    {
      key: 23151,
      message: '注册成功，请等待审核',
      type: 'success',
    },
  ];
  return (
    <>
      <Typography>
        <Title>message-list</Title>
        <Table dataSource={mockData} size="small">
          <Column
            title="Type"
            dataIndex="type"
            key="type"
            render={text => <Tag color={getTagColorFromType(text)}>{text}</Tag>}
            width={100}
          />
          <Column title="Key" dataIndex="key" key="key" />
          <Column title="Message" dataIndex="message" key="message" />
          <Column
            title="Action"
            width={200}
            align="center"
            render={() => {
              return (
                <>
                  <Button type="link">alter</Button>
                  <Divider type="vertical" />
                  <Button type="link">delete</Button>
                </>
              );
            }}
          />
        </Table>
      </Typography>
    </>
  );
};

export default MessageList;
