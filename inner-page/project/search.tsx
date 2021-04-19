import { Button, Input, Modal, Select, Space } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';

const { Search } = Input;
const { Option } = Select;

const SearchComponent = () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  return (
    <>
      <Button
        onClick={setTrue}
        type="primary"
        style={{ marginRight: 10 }}
        icon={<CopyOutlined />}
      >
        导出
      </Button>
      <Modal
        title="选择需要导出的类型"
        visible={isShow}
        onCancel={setFalse}
        okText="确认"
        cancelText="取消"
      >
        <Space>
          选择导出的类型：
          <Select defaultValue="研究生联合培养项目高校导师对接表">
            <Option value="type1">研究生联合培养项目高校导师对接表</Option>
          </Select>
        </Space>
      </Modal>
      <Search placeholder="搜索" style={{ width: 200 }} />
    </>
  );
};

export default SearchComponent;
