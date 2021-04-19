import { Button, DatePicker, Popconfirm, Popover, Space, Checkbox } from 'antd';
import {
  MinusOutlined,
  UnorderedListOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import 'moment/locale/zh-cn'; // FIXME: 没有用到可以删除
import Search from 'antd/lib/input/Search';

// FIXME: 目前整个增删改查的逻辑不用写, 因为后期链接后端后, 都是后端分页, 增加或删除都会导致当前分页直接重新请求, 而不是操作前端的数据. 有表单和表格的样式就好
const Increase = () => {
  // 下拉框中多选框：用于选择表单显示项
  const menu = (
    <Checkbox.Group
      defaultValue={[
        'key',
        'name',
        'studentName',
        'status',
        'advice',
        'date',
        'action',
      ]}
      onChange={() => {}}
    >
      <Space direction="vertical">
        <Checkbox value="key">序号</Checkbox>
        <Checkbox value="studentName">学生名称</Checkbox>
        <Checkbox value="name">项目名称</Checkbox>
        <Checkbox value="date">日期</Checkbox>
        <Checkbox value="status">完成情况</Checkbox>
        <Checkbox value="advice">评价</Checkbox>
        <Checkbox value="action">操作</Checkbox>
      </Space>
    </Checkbox.Group>
  );
  return (
    <>
      {/*数据展示及操作模板*/}
      {/*FIXME: 把这个数据展示和操作模板，和底下的table数据展示信息分开。把现在的这个作为increase，
      把table展示包括查看周志模板作为show组件。方便后期table数据获取和处理
      然后在compose组件中引入 */}
      {/*左侧删除按钮及提示框*/}
      <Popconfirm
        title="一经删除将无法恢复数据,请确认是否进行删除"
        onConfirm={() => {}}
        okText="确定删除"
        cancelText="取消"
        icon={<WarningOutlined style={{ color: 'red' }} />}
      >
        <Button type="primary" danger={true}>
          <MinusOutlined />
          删除
        </Button>
      </Popconfirm>
      {/*右侧搜索栏目前只实现了搜索属性name也就是项目名称*/}
      <Search
        placeholder="搜索"
        style={{ width: '200px', marginRight: '0.2vw' }}
      />
      <DatePicker picker={'month'} />
      <Popover placement="bottomRight" content={menu} trigger="click">
        <Button icon={<UnorderedListOutlined />} />
      </Popover>
    </>
  );
};

export default Increase;
