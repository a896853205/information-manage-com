import { FC } from 'react';

import { Table, Button, Divider, Tag } from 'antd';

import { CopyOutlined } from '@ant-design/icons';

const { Column } = Table;

interface Props {
  setPage: (page: number) => void;
  messages: MC.Message[];
}
/**
 * 通过信息类型获取Tag颜色
 * @param type 信息类型
 * @returns Tag颜色字符串
 */
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
const MessageTable: FC<Props> = ({ setPage, messages }) => {
  return (
    <Table
      dataSource={messages}
      size="small"
      style={{ width: '100%' }}
      rowKey={record => record.code}
      pagination={{
        onChange: page => setPage(page),
      }}
    >
      <Column
        title="Type"
        dataIndex="type"
        key="type"
        render={text => <Tag color={getTagColorFromType(text)}>{text}</Tag>}
        width={100}
      />
      <Column title="Code" dataIndex="code" key="code" />
      <Column title="Message" dataIndex="message" key="message" />
      <Column
        title="Action"
        width={280}
        align="center"
        render={() => {
          return (
            <>
              <Button type="link">
                <CopyOutlined />
                copy
              </Button>
              <Divider type="vertical" />
              <Button type="link">alter</Button>
              <Divider type="vertical" />
              <Button type="link">delete</Button>
            </>
          );
        }}
      />
    </Table>
  );
};

export default MessageTable;
