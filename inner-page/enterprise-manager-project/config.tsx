import {
  Button,
  Input,
  Modal,
  Select,
  Space,
  Popover,
  Checkbox,
  Card,
  Divider,
  Form,
  Col,
  Row,
  DatePicker,
  Radio,
} from 'antd';
import { CopyOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';

const { Search, TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;
const Config = () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const [form] = Form.useForm();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <Button
          onClick={setTrue}
          type="primary"
          style={{ marginRight: 10 }}
          icon={<CopyOutlined />}
        >
          新增
        </Button>
        <Space>
          <Search placeholder="搜索" style={{ width: 200 }} />
          <Popover
            placement="bottomRight"
            content={
              <Checkbox.Group
                defaultValue={[
                  'id',
                  'name',
                  'needStudent',
                  'major',
                  'group',
                  'state',
                  'operation',
                ]}
              >
                <Space direction="vertical">
                  <Checkbox value="id">序号</Checkbox>
                  <Checkbox value="name">项目名称</Checkbox>
                  <Checkbox value="needStudent">需求学生(个)</Checkbox>
                  <Checkbox value="major">学科专业</Checkbox>
                  <Checkbox value="group">发布组织</Checkbox>
                  <Checkbox value="state">项目状态</Checkbox>
                  <Checkbox value="operation">操作</Checkbox>
                </Space>
              </Checkbox.Group>
            }
            trigger="click"
          >
            <Button icon={<UnorderedListOutlined />} />
          </Popover>
        </Space>
      </div>
      <Modal
        visible={isShow}
        title="项目新增"
        onOk={setTrue}
        onCancel={setFalse}
        footer={
          <Space>
            {/*FIXME: 去掉没有必要的大括号 */}
            <Button type={'primary'}>暂存</Button>
            <Button type={'primary'}>保存并发布</Button>
            <Button>返回</Button>
          </Space>
        }
        width={'60vw'}
        style={{ top: 15 }}
      >
        {/*FIXME: 修改form样式，对齐*/}
        <Form form={form} layout="horizontal" labelAlign="right" colon>
          <Row>
            <Col span={24}>
              <Form.Item label="项目名称" name="projectName">
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="项目所属" name="projectOwner">
                <Select defaultValue={'佛山佛塑科技集团股份有限公司'}>
                  <Option value="佛山佛塑科技集团股份有限公司">
                    佛山佛塑科技集团股份有限公司
                  </Option>
                  <Option value="佛山佛塑科技集团股份有限公司1">
                    佛山佛塑科技集团股份有限公司1
                  </Option>
                  <Option value="佛山佛塑科技集团股份有限公司2">
                    佛山佛塑科技集团股份有限公司2
                  </Option>
                  <Option value="佛山佛塑科技集团股份有限公司3">
                    佛山佛塑科技集团股份有限公司3
                  </Option>
                </Select>
              </Form.Item>
            </Col>

            <Col offset={4} span={10}>
              <Form.Item label="项目年份" name="projectDuration">
                <Select defaultValue={'2018'}>
                  <Option value="2018">2018</Option>
                  <Option value="2019">2019</Option>
                  <Option value="2020">2020</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="开始时间" name="beginTime">
                <RangePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>

            <Col span={10}>
              <Form.Item label="硕士生" name="masterStudent">
                <Input addonAfter={<span>个</span>}></Input>
              </Form.Item>
            </Col>

            <Col offset={4} span={10}>
              <Form.Item label="博士生" name="doctoralStudent">
                <Input addonAfter={<span>个</span>}></Input>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="需求专业" name="major">
                <Input></Input>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="示范点老师" name="teacher">
                <Select>
                  {/* 
                      FIXME 此处建议value为老师的唯一ID值 
                    */}
                  <Option value="lidahang">李大行</Option>
                  <Option value="wangdanian">王大年</Option>
                  <Option value="zhangchulan">张楚岚</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={10}>
              <Form.Item label="投资项目" name="fund">
                <Input addonAfter={<span>万元</span>}></Input>
              </Form.Item>
            </Col>

            <Col offset={4} span={10}>
              <Form.Item label="是否公开" name="ifPublic">
                <Radio.Group>
                  <Radio value={1}>是</Radio>
                  <Radio value={0}>否</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="简介" name="introduce">
                <TextArea style={{ resize: 'none' }}></TextArea>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default Config;
