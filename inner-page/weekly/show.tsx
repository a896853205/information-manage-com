import React, { useState } from 'react';

import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useBoolean } from 'ahooks';

import Detail from './detail';

interface ShowProps {
  data: PT.Weekly[];
}
const Show = ({ data }: ShowProps) => {
  // columns 当前显示表格的行属性
  const [columns] = useState<ColumnsType<PT.Weekly>>([
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
      render: (_text, _render) => (
        <Button
          type={'primary'}
          onClick={() => {
            setTrue();
            setSelectData(_render);
          }}
        >
          查看
        </Button>
      ),
    },
  ]);
  const [isShowDetailModal, { setFalse, setTrue }] = useBoolean(false);
  const [selectData, setSelectData] = useState<PT.Weekly>(data[0]);
  return (
    <>
      {/*数据显示信息*/}
      <Table
        rowSelection={{ type: 'checkbox' }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 15 }}
      />
      {/*查看周志模板*/}
      <Detail
        selectData={selectData}
        setFalse={setFalse}
        showModel={isShowDetailModal}
      />
    </>
  );
};

export default Show;
