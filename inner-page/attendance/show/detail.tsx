import { Modal, Input, Row, Col, Divider, Select, DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useState, useEffect } from 'react';

const { Option } = Select;

interface DetailProps {
  modalVisible: boolean;
  setModalHidden: () => void;
  currentDataShow: PT.DataShow;
}

interface DateRenderStyle {
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  background?: string;
}

/**
 * 解决加入antd-dayjs-webpack-plugin后ts声明文件还是moment的问题
 */
type Moment = Dayjs;

const Detail: React.FC<DetailProps> = ({
  modalVisible,
  setModalHidden,
  currentDataShow: currentDataShow,
}) => {
  // 储存dayjs对象，默认为父组件传入的日期，可通过选择框事件修改
  // TODO 增加选择框修改年和月的事件
  const [year] = useState<string>(currentDataShow.date.split('/')[0]);
  const [month] = useState<string>(currentDataShow.date.split('/')[1]);

  // TODO 用月份和年份，从后端获取该月的出勤数据
  const [attendedDays, setAttendedDays] = useState<boolean[]>([]);

  // FIXME 设置假的出勤数据,当后台有数据后要把此处删掉
  const mockAttendedDays: boolean[] = [];
  for (let i = 0; i < currentDataShow.dayInMonth; i++) {
    mockAttendedDays.push(Math.random() < 0.7 ? true : false);
  }
  //
  useEffect(() => {
    setAttendedDays(mockAttendedDays);
  }, []);

  const onChange = (): void => {};

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
      <Row align={'middle'} gutter={[0, 16]} style={{ marginBottom: '16px' }}>
        <Col span={2}>
          <span>姓名:</span>
        </Col>
        <Col span={22}>
          <Input disabled value={currentDataShow?.name ?? '-'}></Input>
        </Col>

        <Col span={2}>
          <span>项目:</span>
        </Col>
        <Col span={22}>
          <Input disabled value={currentDataShow?.projectName ?? '-'}></Input>
        </Col>
        <Col span={2}>
          <span>考勤:</span>
        </Col>
        <Col span={22}>
          <DatePicker
            style={{ width: '100%' }}
            placeholder={'选择要查看的月份'}
            inputReadOnly={true}
            format={'YYYY-MM'}
            dateRender={(current: Dayjs) => {
              const style: DateRenderStyle = {};
              // 学生出勤就加一个圆圈代表出勤
              if (
                attendedDays &&
                current.isBefore(dayjs()) &&
                attendedDays[current.date()]
              ) {
                style.background = 'yellowGreen';
              }
              return (
                <div className="ant-picker-cell-inner" style={style}>
                  {current.date()}
                </div>
              );
            }}
            showTime={false}
          />
        </Col>
      </Row>

      <Divider />
      <Select style={{ width: '100%' }} defaultValue={'通过'}>
        <Option value="通过">通过</Option>
        <Option value="不通过">不通过</Option>
      </Select>
    </Modal>
  );
};

export default Detail;
