import {
  Button,
  Checkbox,
  DatePicker,
  Popconfirm,
  Popover,
  Space,
  Table,
} from 'antd';
import React, { useEffect, useState } from 'react';
import {
  MinusOutlined,
  UnorderedListOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import Increase from './increase';
import { ColumnsType } from 'antd/es/table';

interface ShowProps {
  data: PT.Weekly[];
}
const Show = (props: ShowProps) => {
  const [columns, setColumns] = useState<ColumnsType<PT.Weekly>>([]); // columns 当前显示表格的行属性
  const [showModel, setShowModel] = useState(false); // showModel 是否显示详情的对话框
  const { data } = props;

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
  useEffect(() => {
    setColumns(columnsData);
  }, []);
  const setFalse = () => {
    setShowModel(false);
  };

  // 下拉框中多选框：用于选择表单显示项
  const menu = (
    <Checkbox.Group
      defaultValue={[
        'key',
        'name',
        'studentName',
        'status',
        'advice',
        'date',
        'action',
      ]}
      onChange={() => {}}
    >
      <Space direction="vertical">
        <Checkbox value="key">序号</Checkbox>
        <Checkbox value="studentName">学生名称</Checkbox>
        <Checkbox value="name">项目名称</Checkbox>
        <Checkbox value="date">日期</Checkbox>
        <Checkbox value="status">完成情况</Checkbox>
        <Checkbox value="advice">评价</Checkbox>
        <Checkbox value="action">操作</Checkbox>
      </Space>
    </Checkbox.Group>
  );
  return (
    <>
      {/*数据展示及操作模板*/}
      {/*左侧删除按钮及提示框*/}
      <Popconfirm
        title="一经删除将无法恢复数据,请确认是否进行删除"
        onConfirm={() => {}}
        okText="确定删除"
        cancelText="取消"
        icon={<WarningOutlined style={{ color: 'red' }} />}
      >
        <Button type="primary" danger={true}>
          <MinusOutlined />
          删除
        </Button>
      </Popconfirm>
      {/*右侧搜索栏目前只实现了搜索属性name也就是项目名称*/}
      <div style={{ float: 'right' }}>
        <Space>
          <Search placeholder="搜索" style={{ width: '200px' }} />
          <DatePicker picker={'month'} />
          <Popover placement="bottomRight" content={menu} trigger="click">
            <Button icon={<UnorderedListOutlined />} />
          </Popover>
        </Space>
      </div>
      {/*数据显示信息*/}
      <Table
        rowSelection={{ type: 'checkbox' }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 15 }}
        scroll={{ y: '52vh' }}
      />
      {/*查看周志模板*/}
      <Increase setFalse={setFalse} showModel={showModel} />
    </>
  );
};

export default Show;
