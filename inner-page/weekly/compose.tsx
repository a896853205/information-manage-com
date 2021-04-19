import React, { useEffect, useState } from 'react';

import Show from 'inner-page/weekly/show';
import Mock from 'mockjs';

const Compose = () => {
  // FIXME: 本项目的表头不是变量, 不用useState, 应该直接在Show组件中写成常量的形式
  const [data, setData] = useState<PT.Weekly[]>([]); // data 页面当前显示数据
  // FIXME: 这个变量就需要放在Show组件里边
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
    // FIXME: 本项目的表头不是变量, 不用useState, 应该直接在Show组件中写成常量的形式
    setData(weeklyData);
  }, []);
  return (
    <>
      {/* <BreadcrumbList /> */}
      <Show data={data} />
    </>
  );
};

export default Compose;
