import { Typography } from 'antd';

import Table from './table';
import Search from './search';

const { Title } = Typography;

const MessageList = () => {
  return (
    <Typography>
      <Title>message</Title>
      <Search />
      <Table />
    </Typography>
  );
};

export default MessageList;
