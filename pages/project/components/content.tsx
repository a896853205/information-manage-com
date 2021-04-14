/**
 * 具体的项目信息弹窗
 */
import { Modal, Form, Input } from 'antd';
export default (props: any) => {
  const { isShow, setFalse } = props.isShow;
  const onFinish = () => {};
  return (
    // FIXME: 这里项目新增表需要具体确认各种属性
    <>
      <Modal>
        <Modal
          title="项目新增"
          visible={isShow}
          onOk={onFinish}
          onCancel={setFalse}
          cancelText="取消"
          okText="确定"
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            layout="horizontal"
          >
            <Form.Item label="分组名称" required>
              <Input placeholder="请输入分组名称" />
            </Form.Item>
            <Form.Item label="分组描述">
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Modal>
      </Modal>
    </>
  );
};
