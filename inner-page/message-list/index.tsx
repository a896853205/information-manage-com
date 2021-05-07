import { Typography } from 'antd';

import TypedSpan from 'components/typed-span';
import Table from './table';
import Search from './search';

const { Title } = Typography;

const MessageList = () => {
  return (
    <Typography>
      <Title>
        <TypedSpan strings="Message" />
      </Title>
      <Search />
      <Table />
    </Typography>
  );
};

export default MessageList;
