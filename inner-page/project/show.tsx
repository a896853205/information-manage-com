/**
 * 具体的项目信息弹窗
 */
import { Form, Input, Select, DatePicker } from 'antd';

const selectOptions = {
  enterprise: ['enterprise1', 'enterprise2', 'enterprise3'],
  majors: ['应用统计', '税务', '国际商务', '电气工程', '计算机技术'],
  teachers: ['t1', 't2'],
};
const Show = () => {
  return (
    // TODO:这里需要确定项目的具体属性
    <>
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
    </>
  );
};

export default Show;
