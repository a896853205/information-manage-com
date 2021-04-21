import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
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
  const [currentDataShow, setCurrentDataShow] = useState<PT.DataShow>();

  //把后端传过来的带有时间戳的数据转化成具体的年和月
  const datasToShows = (dataSource: PT.Attendance[]): PT.DataShow[] => {
    let res: PT.DataShow[] = dataSource.map(item => {
      let d: Dayjs = dayjs.unix(item.date);
      return {
        ...item,
        date: `${d.year()}/${d.month() + 1}`,
        dayInMonth: d.daysInMonth(),
      };
    });
    return res;
  };

  const DEFAULT_COLUMNS: ColumnsType<PT.DataShow> = [
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
            setCurrentDataShow(record);
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
        dataSource={datasToShows(dataSource)}
      />
      {currentDataShow ? (
        <Detail
          modalVisible={modalVisible}
          setModalHidden={setModalHidden}
          currentDataShow={currentDataShow}
        />
      ) : null}
    </>
  );
};

export default Show;
