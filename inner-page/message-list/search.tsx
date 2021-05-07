import { Form, Input, Button, Select } from 'antd';

import styles from './search.module.scss';

const { Option } = Select;
const Search = () => {
  return (
    <div className={styles['search-box']}>
      <Form layout="inline">
        <Form.Item label="Key" name="key">
          <Input />
        </Form.Item>

        <Form.Item label="Message" name="message">
          <Input />
        </Form.Item>

        <Form.Item label="Type">
          <Select>
            <Option value="information">information</Option>
            <Option value="success">success</Option>
            <Option value="alter">alter</Option>
            <Option value="error">error</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Search;
