import { useEffect, useState } from 'react';

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
import Mock from 'mockjs';

// FIXME: 整体逻辑是数据从compose传到show组件来, 可以参考attendance分支
const Show = () => {
  const [showModel, setShowModel] = useState(false); // showModel 是否显示详情的对话框
  // FIXME: 这个项目中的行属性是固定的, 所以直接使用常量就好
  const [columns, setColumns] = useState<PT.columnsData>(); // columns 当前显示表格的行属性
  const [data, setData] = useState(); // data 页面当前显示数据

  useEffect(() => {
    const { weeklyData } = Mock.mock({
      'weeklyData|10': [
        {
          'key|+1': 1,
          'index|+1': 1,
          'projectName|+1': [
            '退役锂电材料短程循环与过程污染控制技术与评价方法研究',
            '电动汽车全生命周期分析与环境评价',
            '停车相关管理系统及平台',
            '大型复杂结构施工监控关键技术研究',
          ],
          'name|+1': ['jhx', 'jwy', 'lwm', 'ycc'],
          date: '@date("yyyy/MM")',
          status: '已完成',
          level: '优秀',
        },
      ],
    });
    // 初始化行属性
    // FIXME: 这个项目中的行属性是固定的, 所以直接使用常量就好
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
    setColumns(columnsData);
    setData(weeklyData);
  }, []);
  // 设置对话框是否显示
  const setFalse = () => {
    setShowModel(false);
  };
  // FIXME: 其中的vh或vw尽可能的不要用, 可以使用antd中的Space或Row+Col. 这样单独写数值的话很难做到大家调整的一致
  return (
    <>
      {/*数据显示信息*/}
      <Table
        rowSelection={{ type: 'checkbox' }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 15 }}
        scroll={{ y: '52vh' }}
      />
      {/*查看周志模板*/}
      {/* FIXME: 此处可以单独出组件, 方便以后的交互操作编写 */}
      <Modal
        title="查看周志"
        visible={showModel}
        onCancel={setFalse}
        footer={null}
        style={{ top: 10 }}
        width={1000}
      >
        {/*详情页面的表单结构*/}
        {/* FIXME: 删除不必要的标签 */}
        <>
          <Form
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 25 }}
            layout="horizontal"
          >
            <Form.Item name="name" label="姓名">
              {/* FIXME: 删除不必要的标签 */}
              <div>
                <Input value={'jhx'} />
              </div>
            </Form.Item>
            <Form.Item name="projectName" label="项目名称">
              {/* FIXME: 删除不必要的标签 */}
              <div>
                <Input value="退役锂电材料短程循环与过程污染控制技术与评价方法研究" />
              </div>
            </Form.Item>
            <Form.Item name="date" label="项目年份">
              <DatePicker picker={'month'} disabled={false} />
            </Form.Item>
            <Form.Item label="第一周">
              {/* FIXME: 可以仔细看一下antd的组件, Row+Col或Space */}
              <div style={{ width: 500, display: 'inline-block' }}>
                <Input value="社会实践报告.docx" />
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
              {/* FIXME: 可以仔细看一下antd的组件, Row+Col或Space */}
              <div style={{ width: 500, display: 'inline-block' }}>
                <Input value="社会实践报告.docx" />
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
              {/* FIXME: 可以仔细看一下antd的组件, Row+Col或Space */}
              <div style={{ width: 500, display: 'inline-block' }}>
                <Input value="社会实践报告.docx" />
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
              {/* FIXME: 可以仔细看一下antd的组件, Row+Col或Space */}
              <div style={{ width: 500, display: 'inline-block' }}>
                <Input value="社会实践报告.docx" />
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
