import Increase from '@inner-page/weekly/content';
import Show from '@inner-page/weekly/show';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import React from 'react';

export default () => {
  return (
    <>
      {/* <BreadcrumbList /> */}
      {/*这里做了antd的本地化处理*/}
      <ConfigProvider locale={zhCN}>
        <Increase />
        <Show />
      </ConfigProvider>
    </>
  );
};
