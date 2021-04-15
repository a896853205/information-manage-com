/**
 * 具体的项目信息弹窗
 */
import { Modal, Form, Input, Select, DatePicker } from 'antd';

// FIXME:所有选项框中的具体数据都需要通过后台请求得到
const selectOptions = {
  enterprise: ['enterprise1', 'enterprise2', 'enterprise3'],
  majors: ['应用统计', '税务', '国际商务', '电气工程', '计算机技术'],
  teachers: ['t1', 't2'],
};
export default (props: any) => {
  const { isShow, setFalse } = props.isShow;
  const onFinish = () => {};
  return (
    // FIXME: 这里项目新增表需要具体确认各种属性
    <>
      <Modal
        title="项目新增"
        visible={isShow}
        onOk={onFinish}
        onCancel={setFalse}
        cancelText="取消"
        okText="保存并发布"
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          title="项目信息"
        >
          <Form.Item label="项目名称" required>
            <Input placeholder="请输入项目名称" />
          </Form.Item>
          <Form.Item label="项目所属">
            <Select>
              {selectOptions.enterprise.map((items: any) => {
                return (
                  <Select.Option value={items} key={items}>
                    {items}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item label="项目年份">
            <Select>
              <Select.Option value="2018">2018</Select.Option>
              <Select.Option value="2019">2019</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="开始时间">
            <DatePicker />
          </Form.Item>
          <Form.Item label="结束时间">
            <DatePicker />
          </Form.Item>
          <Form.Item label="硕士生" required>
            <Input placeholder="硕士生个数" />
          </Form.Item>
          <Form.Item label="博士生" required>
            <Input placeholder="博士生个数" />
          </Form.Item>
          <Form.Item label="需求专业">
            <Select>
              <Select.Option value="2018">2018</Select.Option>
              <Select.Option value="2019">2019</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="项目简介">
            <Input.TextArea placeholder="项目简介" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
