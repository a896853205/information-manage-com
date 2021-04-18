import React from 'react';

import { Table, Popover, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface ShowProps {
  dataSource: Attendance[];
}

const DEFAULT_COLUMNS: ColumnsType<Attendance> = [
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

const Show: React.FC<ShowProps> = props => {
  let { dataSource } = props;

  return (
    <Table
      rowSelection={{
        type: 'checkbox',
      }}
      columns={DEFAULT_COLUMNS}
      dataSource={dataSource}
    />
  );
};

export default Show;
