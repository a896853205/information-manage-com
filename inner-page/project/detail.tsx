/**
 * 具体的项目信息弹窗
 */
import { Key } from 'react';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Card,
  Table,
  Row,
  Col,
} from 'antd';
import Mock from 'mockjs';

const { Column, ColumnGroup } = Table;

const selectOptions = {
  enterprise: ['enterprise1', 'enterprise2', 'enterprise3'],
  majors: ['应用统计', '税务', '国际商务', '电气工程', '计算机技术'],
  teachers: ['t1', 't2'],
};

const { teacherData } = Mock.mock({});
const Detail = () => {
  const rowSelection = {
    onchange: (selectedRowKeys: Key[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`);
    },
  };
  return (
    <>
      <Card title="项目信息">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          title="项目信息"
        >
          <Form.Item label="项目名称">
            <Input
              placeholder="请输入项目名称"
              disabled={true}
              defaultValue="退役锂电材料短程循环与过程污染控制技术与评价方法研究"
            />
          </Form.Item>

          <Form.Item label="项目所属">
            <Select disabled={true}>
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
            <Select disabled={true}>
              <Select.Option value="2018">2018</Select.Option>
              <Select.Option value="2019">2019</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="开始时间">
            <DatePicker disabled={true} />
          </Form.Item>
          <Form.Item label="结束时间">
            <DatePicker disabled={true} />
          </Form.Item>
          <Form.Item label="硕士生" required>
            <Input placeholder="硕士生个数" disabled={true} defaultValue="1" />
          </Form.Item>
          <Form.Item label="博士生" required>
            <Input placeholder="博士生个数" disabled={true} defaultValue="1" />
          </Form.Item>
          <Form.Item label="需求专业">
            <Select disabled={true}>
              <Select.Option value="2018">2018</Select.Option>
              <Select.Option value="2019">2019</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="项目投资" required>
            <Input placeholder="项目投资" disabled={true} defaultValue="20" />
          </Form.Item>
          <Form.Item label="是否公开">
            <Radio.Group disabled={true} defaultValue="public">
              <Radio value="public">是</Radio>
              <Radio value="private">否</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="项目简介">
            <Input.TextArea placeholder="项目简介" disabled={true} />
          </Form.Item>
        </Form>
      </Card>
      <Card title="对接导师">
        <Table
          dataSource={teacherData}
          size="small"
          rowSelection={{ type: 'checkbox', ...rowSelection }}
        >
          <Column title="选择" dataIndex="id" key="id" />
          <Column title="序号" dataIndex="index" key="index" />
          <Column title="导师名称" dataIndex="teacherName" key="teacherName" />
          <Column title="所属高校" dataIndex="schoolName" key="schoolName" />
          <Column title="联系电话" dataIndex="tel" key="tel" />
          <ColumnGroup title="高校导师申请对接数">
            <Column title="博士生" dataIndex="doctorNums" key="doctorNum" />
            <Column
              title="硕士生"
              dataIndex="postgraduateNums"
              key="postgraduateNums"
            />
          </ColumnGroup>
          <ColumnGroup title="企业确认对接数">
            <Column title="博士生" dataIndex="doctorNums" key="doctorNums" />
            <Column
              title="硕士生"
              dataIndex="postgraduateNums"
              key="postgraduateNums"
            />
          </ColumnGroup>
          <ColumnGroup title="第一次分配指标">
            <Column title="博士生" dataIndex="doctorNums" key="doctorNums" />
            <Column
              title="硕士生"
              dataIndex="postgraduateNums"
              key="postgraduateNums"
            />
          </ColumnGroup>
          <Column title="备注" dataIndex="age" key="age" />
          <ColumnGroup title="第二次分配指标">
            <Column title="博士生" dataIndex="doctorNums" key="doctorNums" />
            <Column
              title="硕士生"
              dataIndex="postgraduateNums"
              key="postgraduateNums"
            />
          </ColumnGroup>
          <Column title="备注" dataIndex="description" key="description" />
          <Column title="高校审批" dataIndex="status" key="status" />
        </Table>
      </Card>
      <Card title="学生管理">
        <Table
          dataSource={teacherData}
          size="small"
          rowSelection={{ type: 'checkbox', ...rowSelection }}
        >
          <Column title="" dataIndex="id" key="id" />
          <Column title="序号" dataIndex="index" key="index" />
          <Column title="学生姓名" dataIndex="name" key="name" />
          <Column title="联系电话" dataIndex="tel" key="tel" />
          <Column title="所属高校" dataIndex="school" key="school" />
          <Column
            title="高校导师"
            dataIndex="schoolTeacher"
            key="schoolTeacher"
          />
          <Column title="学届" dataIndex="grade" key="grade" />
          <Column title="学位" dataIndex="eduBackground" key="eduBackground" />
          <Column title="参与项目" dataIndex="project" key="project" />
          <Column
            title="企业导师"
            dataIndex="enterpriseTeacher"
            key="enterpriseTeacher"
          />
          <Column title="学生状态" dataIndex="status" key="status" />
        </Table>
      </Card>
    </>
  );
};

export default Detail;
