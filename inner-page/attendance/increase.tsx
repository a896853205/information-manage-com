import {
  Button,
  DatePicker,
  Popover,
  Space,
  Checkbox,
  Table,
  Popconfirm,
  message,
} from 'antd';
import { MinusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { withRouter } from 'next/router';
import moment from 'moment';
import { useState, useRef } from 'react';
import Mock from 'mockjs';

let { data } = Mock.mock({
  'data|5': [
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
      state: '审批中',
    },
  ],
});
let defaultDataSource = data;

let timeSignal = '1980/0/0';

// 组件
let Increase: any = () => {
  // 表单数据
  let [dataSource, setDataSource] = useState(defaultDataSource);

  // 表单中选中的项的key数组
  let [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // 表示操作按钮的状态
  let [loading, setLoading] = useState(false);

  // 表格中是否有数据被选中
  let [hasSelected, setHasSelected] = useState(false);

  // 表示当前选择时间
  let currentTime = timeSignal;

  // DataPicker Ref
  let dataPickerRef: any = useRef();

  // 定义数据
  // 表单显示项
  let defaultColumns = [
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
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: '操作',
      dataIndex: 'control',
      key: 'control',
      render: (_: unknown, record: any) => (
        <Popover
          placement="bottomRight"
          content={
            <>
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  // 修改审核状态
                  let d = [...dataSource];
                  d.forEach((item: any) => {
                    if (item.key == record.key) {
                      item.state = '已审核';
                    }
                  });
                  // 筛时间
                  if (
                    !moment(currentTime, 'YYYY/MM/DD').isSame(timeSignal, 'day')
                  ) {
                    console.log('选了');
                    d = d.filter((item: any) => {
                      return moment(currentTime, 'YYYY/MM/DD').isSame(
                        item.date,
                        'month'
                      );
                    });
                  }

                  setDataSource(d);
                }}
              >
                批准
              </Button>
            </>
          }
          trigger="click"
        >
          <Button>操作</Button>
        </Popover>
      ),
    },
  ];

  // 表单显示项
  let [columns, setColumns] = useState(defaultColumns);

  // 表单中item项被选中调用的事件
  let onSelectChange = (keys: []) => {
    setSelectedRowKeys(keys);
    setHasSelected(keys.length != 0 ? true : false);
  };

  // 选中事件对象
  let rowSelection: any = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // 下拉框ref
  let dropDownRef: any = useRef();

  // 修改表单显示项
  function checkedChange(e: any) {
    let col = defaultColumns.filter(i => {
      return e.some((j: string) => i.key == j);
    });
    setColumns(col);
  }

  // 下拉框中多选框（组件）：用于选择表单显示项
  let checkboxMenu = (
    <Checkbox.Group
      onChange={checkedChange}
      defaultValue={['id', 'name', 'projectName', 'date', 'state']}
    >
      <Space direction="vertical">
        <Checkbox value="id">序号</Checkbox>
        <Checkbox value="name">学生名称</Checkbox>
        <Checkbox value="projectName">项目名称</Checkbox>
        <Checkbox value="date">日期</Checkbox>
        <Checkbox value="state">考勤状况</Checkbox>
      </Space>
    </Checkbox.Group>
  );

  // 获取选取时间的函数：用于筛选数据
  function getTime(data: any) {
    let d = [...defaultDataSource];
    if (data != null) {
      d = d.filter((item: any) => {
        return moment(item.date, 'YYYY/MM/DD').isSame(
          data.format('YYYY/MM/DD'),
          'month'
        );
      });
      let m = data.format('YYYY/MM/DD');
      currentTime = m;
    } else {
      currentTime = timeSignal;
    }
    setDataSource(d);
  }

  // 删除选中的项目
  let deleteData = () => {
    setLoading(true);
    let d: any = defaultDataSource;
    selectedRowKeys.forEach((i: any) => {
      d = d.filter((j: any) => {
        return j.key != i;
      });
    });
    setDataSource(d);
    setLoading(false);
  };

  function confirm() {
    deleteData();
    message.success('删除成功');
  }

  function cancel() {
    return;
  }

  return (
    <>
      <div
        className="attendance-increse"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Popconfirm
          title="你确定要删除这些信息么?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="是"
          cancelText="否"
        >
          <Button
            icon={<MinusOutlined />}
            danger
            type="primary"
            loading={loading}
            disabled={!hasSelected}
          >
            删除
          </Button>
        </Popconfirm>

        <Space>
          <span>日期：</span>
          <DatePicker
            onChange={getTime}
            picker="month"
            ref={dataPickerRef}
            placeholder="选择日期"
          />

          <Popover
            placement="bottomRight"
            content={checkboxMenu}
            trigger="click"
          >
            <Button icon={<UnorderedListOutlined />} ref={dropDownRef}></Button>
          </Popover>
        </Space>
      </div>
      <div className="attendance-table">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
        ></Table>
      </div>
    </>
  );
};

export default withRouter(Increase);
