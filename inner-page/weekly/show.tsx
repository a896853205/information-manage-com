import {
  Button,
  DatePicker,
  Modal,
  Radio,
  Table,
  Divider,
  Form,
  Input,
  Space,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { Dispatch, SetStateAction } from 'react';

// FIXME: 组件FC类型的props, 直接参考Attendance分支
const Show = (props: {
  data: PT.weeklyData[];
  columns: PT.columnsData;
  showModel: boolean;
  setShowModel: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, columns, showModel, setShowModel } = props;
  // 设置对话框是否显示
  const setFalse = () => {
    setShowModel(false);
  };
  const WeeklyView = () => {
    return (
      <Modal
        title="查看周志"
        visible={showModel}
        onCancel={setFalse}
        footer={null}
        style={{ top: 10 }}
        width={1000}
      >
        {/*详情页面的表单结构*/}
        <Form
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 25 }}
          layout="horizontal"
        >
          <Form.Item name="name" label="姓名">
            {/* 这里为了不让其调用表单的onFinish和onChange所以单独隔离出来 */}
            <div>
              <Input value={'jhx'} />
            </div>
          </Form.Item>
          <Form.Item name="projectName" label="项目名称">
            <div>
              <Input value="退役锂电材料短程循环与过程污染控制技术与评价方法研究" />
            </div>
          </Form.Item>
          <Form.Item name="date" label="项目年份">
            <DatePicker picker={'month'} disabled={false} />
          </Form.Item>
          <Form.Item label="第一周">
            <Space>
              <Input value="社会实践报告.docx" />
              <Button
                style={{
                  // FIXME： 使用Space， 代替marginLeft。
                  marginLeft: '1vh',
                }}
                type="primary"
                danger={true}
              >
                下载
              </Button>
            </Space>
          </Form.Item>
          <Form.Item label="第二周">
            <Space>
              <Input value="社会实践报告.docx" />
              <Button
                style={{
                  // FIXME： 使用Space， 代替marginLeft。
                  marginLeft: '1vh',
                }}
                type="primary"
                danger={true}
              >
                下载
              </Button>
            </Space>
          </Form.Item>
          <Form.Item label="第三周">
            <Space>
              <Input value="社会实践报告.docx" />
              <Button
                style={{
                  // FIXME： 使用Space， 代替marginLeft。
                  marginLeft: '1vh',
                }}
                type="primary"
                danger={true}
              >
                下载
              </Button>
            </Space>
          </Form.Item>
          <Form.Item label="第四周">
            <Space>
              <Input value="社会实践报告.docx" />
              <Button
                style={{
                  // FIXME： 使用Space， 代替marginLeft。
                  marginLeft: '1vh',
                }}
                type="primary"
                danger={true}
              >
                下载
              </Button>
            </Space>
          </Form.Item>
          <div
            style={{
              // FIXME： 使用Space， 代替marginLeft。
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
          {/* FIXME: Modal自带footer, 不用自己写 */}
          <Form.Item style={{ float: 'right' }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
          <Form.Item />
        </Form>
      </Modal>
    );
  };
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
      <WeeklyView />
    </>
  );
};

export default Show;
