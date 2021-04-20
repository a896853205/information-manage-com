import { Modal, Input, Row, Col, Divider, Select } from 'antd';

import Calendar from './calendar';

const { Option } = Select;

interface DetailProps {
  modalVisible: boolean;
  setModalHidden: () => void;
  currentAttendance: PT.Attendance;
}

const Detail: React.FC<DetailProps> = ({
  modalVisible,
  setModalHidden,
  currentAttendance,
}) => {
  return (
    <Modal
      title="考勤管理"
      centered
      visible={modalVisible}
      onOk={() => {
        // TODO 向后端提交数据
        setModalHidden();
      }}
      onCancel={() => setModalHidden()}
      width={'60vw'}
    >
      <Row align={'middle'} gutter={[0, 16]}>
        <Col span={2}>
          <span>姓名:</span>
        </Col>
        <Col span={22}>
          <Input disabled value={currentAttendance?.name ?? '-'}></Input>
        </Col>

        <Col span={2}>
          <span>项目:</span>
        </Col>
        <Col span={22}>
          <Input disabled value={currentAttendance?.projectName ?? '-'}></Input>
        </Col>

        <Col span={2}>
          <span>年份:</span>
        </Col>
        <Col span={6}>
          <Input disabled value="2018"></Input>
        </Col>

        <Col offset={8} span={2}>
          <span>月份:</span>
        </Col>
        <Col span={6}>
          <Input disabled value="一月"></Input>
        </Col>
      </Row>
      {/* FIXME: 这里有点造轮子了,不过写的还可以, 直接使用RangePicker 然后open属性打开就好.antd中有很多细节的处理, 而且即使造轮子是不是这里应该之传入日期更好一点 */}
      <Calendar date={currentAttendance.date} />
      <h3 style={{ margin: '0' }}>添加评价</h3>
      <Divider />
      <Select style={{ width: '100%' }} defaultValue={'通过'}>
        <Option value="通过">通过</Option>
        <Option value="不通过">不通过</Option>
      </Select>
    </Modal>
  );
};

export default Detail;
