import React from 'react';

import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Space,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';

interface IncreaseProps {
  showModel: boolean;
  setFalse: () => void;
}

const Increase = ({ showModel, setFalse }: IncreaseProps) => {
  return (
    <Modal
      title="查看周志"
      visible={showModel}
      onCancel={setFalse}
      footer={
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      }
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
          <Input value="jhx" disabled />
        </Form.Item>
        <Form.Item name="projectName" label="项目名称">
          <Input
            value="退役锂电材料短程循环与过程污染控制技术与评价方法研究"
            disabled
          />
        </Form.Item>
        <Form.Item name="date" label="项目年份">
          <DatePicker picker="month" />
        </Form.Item>
        <Form.Item label="第一周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="第二周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="第三周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="第四周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Divider orientation="left">填写评论</Divider>
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
      </Form>
    </Modal>
  );
};

export default Increase;
