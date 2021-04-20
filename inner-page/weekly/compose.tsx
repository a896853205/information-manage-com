import React, { useEffect, useState } from 'react';

import Mock from 'mockjs';

import Show from 'inner-page/weekly/show';
import Config from 'inner-page/weekly/config';
import { Key } from 'antd/es/table/interface';

const Compose = () => {
  const [data, setData] = useState<PT.Weekly[]>([]); // data 页面当前显示数据
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };
  useEffect(() => {
    const { weeklyData } = Mock.mock({
      'weeklyData|10': [
        {
          'key|+1': 1,
          'index|+1': 0,
          'projectName|+1': [
            '退役锂电材料短程循环与过程污染控制技术与评价方法研究',
            '电动汽车全生命周期分析与环境评价',
            '停车相关管理系统及平台',
            '大型复杂结构施工监控关键技术研究',
          ],
          'name|+1': ['jhx', 'jwy', 'lwm', 'ycc'],
          date: '@date()',
          status: '已完成',
          'level|+1': ['优秀', '合格', '不合格'],
        },
      ],
    });

    // 初始化数据属性
    setData(weeklyData);
  }, []);

  return (
    <>
      {/* <BreadcrumbList /> */}
      <Config selectedRowKeys={selectedRowKeys} />
      <Show rowSelection={rowSelection} data={data} />
    </>
  );
};

export default Compose;
