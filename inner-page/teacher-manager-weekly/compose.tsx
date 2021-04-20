import React, { useEffect, useState } from 'react';

import Mock from 'mockjs';

import Show from '@inner-page/teacher-manager-weekly/show';
import Config from '@inner-page/teacher-manager-weekly/config';

const Compose = () => {
  const [data, setData] = useState<PT.Weekly[]>([]); // data 页面当前显示数据

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
          date: '@date("yyyy/MM")',
          status: '已完成',
          level: '优秀',
        },
      ],
    });

    // 初始化数据属性
    setData(weeklyData);
  }, []);

  return (
    <>
      {/* <BreadcrumbList /> */}
      <Config />
      <Show data={data} />
    </>
  );
};

export default Compose;
