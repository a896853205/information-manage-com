import { Key, useEffect, useState } from 'react';
import {
  Button,
  DatePicker,
  Modal,
  Popconfirm,
  Popover,
  Space,
  Table,
  Checkbox,
} from 'antd';
import {
  MinusOutlined,
  UnorderedListOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import 'moment/locale/zh-cn';
import Search from 'antd/lib/input/Search';
import Mock from 'mockjs';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

import Content from 'inner-page/weekly/content';

interface dataInterface {
  key: number;
  index: number;
  name: string;
  studentName: string;
  date: string;
  status: string;
  advice: string;
  state: string;
}
const { weeklyData } = Mock.mock({
  'weeklyData|10': [
    {
      'key|+1': 1,
      'index|+1': 1,
      'name|+1': [
        '退役锂电材料短程循环与过程污染控制技术与评价方法研究',
        '电动汽车全生命周期分析与环境评价',
        '停车相关管理系统及平台',
        '大型复杂结构施工监控关键技术研究',
      ],
      studentName: 'jhx',
      date: '@date("yyyy/MM")',
      status: 'false',
      advice: 'with out advice',
      state: '指标招生',
    },
  ],
});
let columnsData: (
  | { title: string; key: string; dataIndex: string; render?: undefined }
  | {
      title: string;
      key: string;
      render: (
        _text: object,
        _record: dataInterface,
        _index: number
      ) => JSX.Element;
      dataIndex?: undefined;
    }
)[];
const Show = () => {
  const [data, setData] = useState(weeklyData); // data 页面当前显示数据
  const [dataAll, setdataAll] = useState(weeklyData); // dataAll 从后台获取的所有数据
  const [columns, setColumns] = useState(columnsData); // columns 当前显示表格的行属性
  const [defaultColumns, setdefaultColumns] = useState(columnsData); //
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]); // selectedRowKeys 代表当前选择中的列
  const [showModel, setShowModel] = useState(false); // showModel 是否显示详情的对话框
  const [selectIndex, setSelectIndex] = useState<number>(0); // selectIndex 帮助获取详情对话框的具体参数
  const colClickChange = (_record: dataInterface) => {
    setSelectIndex(_record.index), setShowModel(true);
  };

  //初始化行属性
  columnsData = [
    {
      title: '序号',
      key: 'key',
      dataIndex: 'key',
    },
    {
      title: '学生名称',
      key: 'studentName',
      dataIndex: 'studentName',
    },
    {
      title: '项目名称',
      key: 'name',
      dataIndex: 'name',
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
      key: 'advice',
      dataIndex: 'advice',
    },
    {
      title: '操作',
      key: 'action',
      render: (_text: object, _record: dataInterface, _index: number) => {
        return (
          <Space>
            <Button
              type={'primary'}
              onClick={() => {
                colClickChange(_record);
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
    console.log(111);
    setColumns(columnsData);
    setdefaultColumns(columnsData);
  }, []);
  // 删除选中项
  const deleteWeekly = () => {
    let remainData = dataAll;
    console.log(selectedRowKeys);
    for (let x of selectedRowKeys) {
      remainData = remainData.filter(
        (_item: unknown, index: string | number) => {
          return remainData[index].key != x;
        }
      );
    }
    setdataAll(remainData), setData(remainData);
  };

  // 设置对话框是否显示
  const setFalse = () => {
    setShowModel(false);
  };

  const checkedChange = (selectedList: CheckboxValueType[]) => {
    let col = defaultColumns.filter(i => {
      return selectedList.some((j: CheckboxValueType) => i.key == j);
    });
    setColumns(col);
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
      onChange={checkedChange}
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
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      // 选中列改变时调用
      setSelectedRowKeys(selectedRowKeys);
    },
  };
  return (
    <div>
      {/*数据展示及操作模板*/}
      <div style={{ marginBottom: '1vh' }}>
        {/*左侧删除按钮及提示框*/}
        <Popconfirm
          title="一经删除将无法恢复数据,请确认是否进行删除"
          onConfirm={deleteWeekly}
          okText="确定删除"
          cancelText="取消"
          icon={<WarningOutlined style={{ color: 'red' }} />}
        >
          <Button type="primary" danger={true}>
            <MinusOutlined />
            删除
          </Button>
        </Popconfirm>
        <div style={{ float: 'right' }}>
          {/*右侧搜索栏目前只实现了搜索属性name也就是项目名称*/}
          <Search
            placeholder="搜索"
            style={{ width: '200px', marginRight: '0.2vw' }}
          />
          <DatePicker picker={'month'} />
          <div
            style={{
              display: 'inline-block',
              marginLeft: '0.2vw',
              marginRight: '1vw',
            }}
          >
            <Popover
              style={{
                marginLeft: '1vh',
                marginRight: '1vw',
              }}
              placement="bottomRight"
              content={menu}
              trigger="click"
            >
              <Button icon={<UnorderedListOutlined />} />
            </Popover>
          </div>
        </div>
      </div>
      {/*数据显示信息*/}
      <div style={{ width: '81vw' }}>
        <Table
          rowSelection={{ type: 'checkbox', ...rowSelection }}
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 15 }}
          scroll={{ y: '52vh' }}
        />
      </div>
      {/*查看周志模板*/}
      <Modal
        title="查看周志"
        visible={showModel}
        onCancel={setFalse}
        footer={null}
        style={{ top: 20 }}
        width={1000}
      >
        {/*详情页面的表单结构*/}
        <>
          {data[selectIndex] ? (
            <Content data={data} selectIndex={selectIndex} />
          ) : (
            <div style={{ color: 'red' }}>空数据异常请添加数据后重试</div>
          )}
        </>
      </Modal>
    </div>
  );
};

export default Show;
