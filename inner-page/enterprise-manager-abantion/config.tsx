import { Space, Menu } from 'antd';
import {
  PlusOutlined,
  UnorderedListOutlined,
  DownOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import React from 'react';
import { useBoolean } from 'ahooks';
import { Button, Form, Input, Modal, Dropdown } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const Config = () => {
  const [isShowAddModal, { setFalse, setTrue }] = useBoolean(false);
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        未通过
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        通过
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        全部
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {/*数据展示及操作模板*/}
      {/*左侧删除按钮及提示框*/}

      <Button
        type="primary"
        onClick={() => {
          setTrue();
        }}
      >
        <PlusOutlined />
        新增
      </Button>

      {/*右侧搜索栏目前只实现了搜索属性name也就是项目名称*/}
      <Space>
        <div>审批状态：</div>
        <Dropdown overlay={menu}>
          <Button>
            <DownOutlined />
          </Button>
        </Dropdown>
        <Search placeholder="搜索" style={{ width: '200px' }} />
        <Button icon={<SyncOutlined />} />
        <Button icon={<UnorderedListOutlined />} />
      </Space>
      <Modal
        centered={true}
        title="终止培养申请"
        visible={isShowAddModal}
        onCancel={setFalse}
        footer={
          <div>
            <Button type="primary">保存</Button>
            <Button type="primary">暂存</Button>
            <Button onClick={setFalse}>取消</Button>
          </div>
        }
        width={900}
      >
        {/*详情页面的表单结构*/}
        <Form
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 25 }}
          layout="horizontal"
          name="新增终止培养申请"
        >
          <Form.Item name="name" label="学生姓名">
            <Input />
          </Form.Item>
          <Form.Item label="手机号码">
            <Input />
          </Form.Item>
          <Form.Item label="所属学校">
            <Input disabled />
          </Form.Item>

          <Form.Item label="所属示范点">
            <Input disabled />
          </Form.Item>
          <Form.Item label="所属项目">
            <Input disabled />
          </Form.Item>
          <Form.Item label="申请原因">
            <Input />
          </Form.Item>

          <Form.Item label="备注说明">
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Config;
