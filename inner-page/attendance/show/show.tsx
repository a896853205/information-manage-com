import React, { useState } from 'react';

import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useBoolean } from 'ahooks';

import Detail from './detail';

interface ShowProps {
  dataSource: PT.Attendance[];
}

const Show: React.FC<ShowProps> = ({ dataSource }) => {
  const [
    modalVisible,
    { setTrue: setModalVisible, setFalse: setModalHidden },
  ] = useBoolean(false);
  const [currentAttendance, setCurrentAttendance] = useState<PT.Attendance>();

  const DEFAULT_COLUMNS: ColumnsType<PT.Attendance> = [
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
      render: (_: unknown, record) => (
        <Button
          onClick={() => {
            setCurrentAttendance(record);
            setModalVisible();
          }}
        >
          操作
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        rowSelection={{
          type: 'checkbox',
        }}
        columns={DEFAULT_COLUMNS}
        dataSource={dataSource}
      />
      {currentAttendance ? (
        <Detail
          modalVisible={modalVisible}
          setModalHidden={setModalHidden}
          currentAttendance={currentAttendance}
        />
      ) : null}
    </>
  );
};

export default Show;
