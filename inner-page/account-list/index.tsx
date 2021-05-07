import { Typography } from 'antd';

import Table from './table';
import Search from './search';

const { Title } = Typography;

const AccountList = () => {
  return (
    <Typography>
      <Title>account</Title>
      <Search />
      <Table />
    </Typography>
  );
};

export default AccountList;
