import React, { useState } from 'react';
import { PT } from '../../../@types/Attendance';
import { Table, Modal, Button, Input, Row, Col, Divider, Select } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Calendar from './calendar';

const { Option } = Select;

interface ShowProps {
  dataSource: PT.Attendance[];
}

const Show: React.FC<ShowProps> = props => {
  let { dataSource } = props;
  const [modalVisible, setModal1Visible] = useState<boolean>(false);
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
            setModal1Visible(true);
            setCurrentAttendance(record);
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
      <Modal
        title="考勤管理"
        centered
        visible={modalVisible}
        onOk={() => {
          // TODO 向后端提交数据
          setModal1Visible(true);
        }}
        onCancel={() => setModal1Visible(false)}
        width={'60vw'}
      >
        <div>
          <Row align={'middle'} gutter={[0, 16]}>
            <Col span={2}>
              <span>姓名:</span>
            </Col>
            <Col span={22}>
              <Input disabled value={currentAttendance?.name}></Input>
            </Col>

            <Col span={2}>
              <span>项目:</span>
            </Col>
            <Col span={22}>
              <Input disabled value={currentAttendance?.projectName}></Input>
            </Col>

            <Col span={2}>
              <span>年份:</span>
            </Col>
            <Col span={6}>
              <Input disabled value="2018"></Input>
            </Col>

            <Col offset={8} span={2}>
              <span>月份:</span>
            </Col>
            <Col span={6}>
              <Input disabled value="一月"></Input>
            </Col>
          </Row>
          <Calendar attendance={currentAttendance}></Calendar>
          <h3 style={{ margin: '0' }}>添加评价</h3>
          <Divider></Divider>
          <Select style={{ width: '100%' }} defaultValue={'通过'}>
            <Option value="通过">通过</Option>
            <Option value="不通过">不通过</Option>
          </Select>
        </div>
      </Modal>
    </>
  );
};

export default Show;
