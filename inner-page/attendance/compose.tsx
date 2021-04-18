import Increase from 'inner-page/attendance/increase';
import Show from 'inner-page/attendance/show';
import Mock from 'mockjs';
import { useState } from 'react';
import { Popover, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

export interface Student {
  key: number;
  id: number;
  name: string;
  projectName: string;
  data: string;
  status: string;
}

let defaultDataSource: Student[] = Mock.mock({
  'defaultDataSource|5-100': [
    {
      'key|+1': 1,
      'id|+1': 1,
      name: '@name',
      'projectName|+1': [
        '退役锂电材料短程循环与过程污染控制技术与评价方法研究',
        '电动汽车全生命周期分析与环境评价',
        '停车相关管理系统及平台',
        '大型复杂结构施工监控关键技术研究',
      ],
      date: '@date("yyyy/MM/dd")',
      status: '审批中',
    },
  ],
}).defaultDataSource;

// 定义数据
// 表单显示项
let defaultColumns: ColumnsType<Student> = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '学生名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '项目名称',
    dataIndex: 'projectName',
    key: 'projectName',
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '考勤状况',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    dataIndex: 'control',
    key: 'control',
    render: () => (
      <Popover
        placement="bottomRight"
        content={
          <Button type="primary" size="small">
            批准
          </Button>
        }
        trigger="click"
      >
        <Button>操作</Button>
      </Popover>
    ),
  },
];

export default () => {
  // 表单数据
  let [dataSource] = useState<Student[]>(defaultDataSource);
  // 表单显示项
  let [columns] = useState<ColumnsType<Student>>(defaultColumns);

  return (
    <>
      {/* <BreadcrumbList /> */}
      <Increase />
      <Show dataSource={dataSource} columns={columns} />
    </>
  );
};
