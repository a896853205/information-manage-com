import { useRef, useEffect } from 'react';

import { Typography } from 'antd';
import Typed from 'typed.js';

import Table from './table';
import Search from './search';

const { Title } = Typography;

const AccountList = () => {
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let typed: Typed | null = null;
    if (titleRef?.current) {
      typed = new Typed(titleRef.current, {
        strings: ['account'],
        typeSpeed: 50,
      });
    }

    return () => {
      typed?.destroy();
    };
  }, [titleRef]);

  return (
    <Typography>
      <Title>
        <span ref={titleRef} />
      </Title>
      <Search />
      <Table />
    </Typography>
  );
};

export default AccountList;
