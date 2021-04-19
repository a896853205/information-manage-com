import { useState } from 'react';
import {
  Button,
  DatePicker,
  Modal,
  Radio,
  Space,
  Table,
  Divider,
  Form,
  Input,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import 'moment/locale/zh-cn'; // FIXME: 没有用到可以删除
import Mock from 'mockjs';

interface dataInterface {
  // FIXME: 数据类型说明这一块可以单独摘出去，建一个文件比如说叫types.d.ts。方便以后属性的管理。
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
  // FIXME: 周志管理对照文档把具体的属性再改一下
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
      studentName: 'jhx', // FIXME: 这名字别都一样吧...
      date: '@date("yyyy/MM")',
      status: 'false', // FIXME: 完成情况：已完成/未完成
      advice: 'with out advice', // FIXME: 已评价/未评价
    },
  ],
});

// FIXME: 目前整个增删改查的逻辑不用写, 因为后期链接后端后, 都是后端分页, 增加或删除都会导致当前分页直接重新请求, 而不是操作前端的数据. 有表单和表格的样式就好
const Show = () => {
  // FIXME: useState的位置必须是函数组件最顶层
  const [showModel, setShowModel] = useState(false); // showModel 是否显示详情的对话框
  // 设置对话框是否显示
  const setFalse = () => {
    setShowModel(false);
  };

  // 初始化行属性
  const columnsData = [
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
        // FIXME:  没有用到的属性可以删除
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
  return (
    <>
      {/*数据显示信息*/}
      <Table
        rowSelection={{ type: 'checkbox' }}
        columns={columnsData}
        dataSource={weeklyData}
        pagination={{ pageSize: 15 }}
        scroll={{ y: '52vh' }}
      />
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
          <Form
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 25 }}
            layout="horizontal"
          >
            <Form.Item name="studentName" label="姓名">
              <div>
                <Input value={'jhx'} disabled={true} />
              </div>
            </Form.Item>
            <Form.Item name="name" label="项目名称">
              <div>
                <Input
                  value="退役锂电材料短程循环与过程污染控制技术与评价方法研究"
                  disabled={true}
                />
              </div>
            </Form.Item>
            <Form.Item name="date" label="项目年份">
              <DatePicker picker={'month'} disabled={true} />
            </Form.Item>
            <Form.Item label="第一周">
              <div style={{ width: 500, display: 'inline-block' }}>
                <Input
                  disabled={false} // FIXME: 如果想表示这个input不可操作，disable的属性值应该是true不是false。
                  value="社会实践报告.docx"
                  aria-disabled={false} // FIXME:删除
                />
              </div>
              <Button
                style={{
                  marginLeft: '1vh',
                }}
                type="primary"
                danger={true}
              >
                下载
              </Button>
            </Form.Item>
            <Form.Item label="第二周">
              <div style={{ width: 500, display: 'inline-block' }}>
                <Input
                  disabled={false} // FIXME: 如果想表示这个input不可操作，disable的属性值应该是true不是false。
                  value="社会实践报告.docx"
                  aria-disabled={false} // FIXME:删除
                />
              </div>
              <Button
                style={{
                  marginLeft: '1vh',
                }}
                type="primary"
                danger={true}
              >
                下载
              </Button>
            </Form.Item>
            <Form.Item label="第三周">
              <div style={{ width: 500, display: 'inline-block' }}>
                <Input
                  disabled={false} // FIXME: 如果想表示这个input不可操作，disable的属性值应该是true不是false。
                  value="社会实践报告.docx"
                  aria-disabled={false} // FIXME: 删除
                />
              </div>
              <Button
                style={{
                  marginLeft: '1vh',
                }}
                type="primary"
                danger={true}
              >
                下载
              </Button>
            </Form.Item>
            <Form.Item label="第四周">
              <div style={{ width: 500, display: 'inline-block' }}>
                <Input
                  disabled={false} // FIXME: 如果想表示这个input不可操作，disable的属性值应该是true不是false。
                  value="社会实践报告.docx"
                  aria-disabled={false} // FIXME:删除
                />
              </div>
              <Button
                style={{
                  marginLeft: '1vh',
                }}
                type="primary"
                danger={true}
              >
                下载
              </Button>
            </Form.Item>
            <div
              style={{
                fontSize: 'large',
                marginLeft: '2vh',
              }}
            >
              填写评论
            </div>
            <Divider />
            <Form.Item name="advice">
              <Radio.Group defaultValue={2}>
                <Radio value={1}>优秀</Radio>
                <Radio value={2}>合格</Radio>
                <Radio value={3}>不合格</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="周志评测" name="textAdvice">
              <TextArea rows={1} cols={8} />
            </Form.Item>
            <Form.Item style={{ float: 'right' }}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
            <Form.Item />
          </Form>
        </>
      </Modal>
    </>
  );
};

export default Show;
