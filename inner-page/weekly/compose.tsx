import React, { useEffect, useState } from 'react';

import Show from 'inner-page/weekly/show';
import Increase from 'inner-page/weekly/increase';
import Mock from 'mockjs';
import { Button, Space } from 'antd';

const Compose = () => {
  const [columns, setColumns] = useState<PT.columnsData>([]); // columns 当前显示表格的行属性
  const [data, setData] = useState<PT.weeklyData[]>([]); // data 页面当前显示数据
  const [showModel, setShowModel] = useState(false); // showModel 是否显示详情的对话框

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
    // 初始化行属性
    const columnsData = [
      {
        title: '序号',
        key: 'key',
        dataIndex: 'key',
      },
      {
        title: '学生名称',
        key: 'name',
        dataIndex: 'name',
      },
      {
        title: '项目名称',
        key: 'projectName',
        dataIndex: 'projectName',
      },
      {
        title: '日期',
        key: 'date',
        dataIndex: 'date',
      },
      {
        title: '完成情况',
        key: 'status',
        dataIndex: 'status',
      },
      {
        title: '评价',
        key: 'level',
        dataIndex: 'level',
      },
      {
        title: '操作',
        key: 'action',
        render: () => {
          return (
            <Space>
              <Button
                type={'primary'}
                onClick={() => {
                  setShowModel(true);
                }}
              >
                查看
              </Button>
            </Space>
          );
        },
      },
    ];
    setColumns(columnsData);
    setData(weeklyData);
  }, []);
  return (
    <>
      {/* <BreadcrumbList /> */}
      <Increase />
      <Show
        data={data}
        columns={columns}
        showModel={showModel}
        setShowModel={setShowModel}
      />
    </>
  );
};

export default Compose;
