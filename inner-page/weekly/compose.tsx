import Increase from 'inner-page/weekly/increase';
import Show from 'inner-page/weekly/show';
import LocaleProvider from 'antd/es/locale-provider';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import React from 'react';

export default () => {
  return (
    <>
      {/* <BreadcrumbList /> */}
      {/*这里做了antd的本地化处理*/}
      <LocaleProvider locale={zh_CN}>
        <Increase />
        <Show />
      </LocaleProvider>
    </>
  );
};
