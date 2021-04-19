import { Row, Col, Card } from 'antd';
import React from 'react';
import { PT } from '../../../@types/Attendance';

interface Calendar {
  attendance: PT.Attendance | undefined;
}
//
const calendar: React.FC<Calendar> = props => {
  // 获取当前时间
  const { attendance } = props;

  if (attendance !== undefined) {
    //TODO: 此处根据attendance中的date对象动态获取该月有几天，并判断1号是周几
    let dayItem: JSX.Element[] = [];
    for (let i = 1; i <= 30; i++) {
      if (i % 7 == 1) dayItem.push(<Col span={1}></Col>);
      dayItem.push(
        <Col key={i} span={3}>
          <div
            style={{
              background: 'white',
              width: '100%',
              height: '7vh',
              textAlign: 'center',
              lineHeight: '7vh',
              borderRadius: '5px',
            }}
          >
            <h4>{i}</h4>
          </div>
        </Col>
      );
      if (i % 7 == 0) dayItem.push(<Col span={2}></Col>);
    }

    return (
      <div>
        <Card
          style={{
            background: '#eee',
            margin: '3vh 0',
          }}
        >
          <Row justify={'center'}>
            <Col>
              <span>{attendance?.date}</span>
            </Col>
          </Row>
          <Row style={{ marginTop: '10px', textAlign: 'center' }}>
            <Col span={1}></Col>
            <Col span={3}>
              <span>日</span>
            </Col>
            <Col span={3}>
              <span>一</span>
            </Col>
            <Col span={3}>
              <span>二</span>
            </Col>
            <Col span={3}>
              <span>三</span>
            </Col>
            <Col span={3}>
              <span>四</span>
            </Col>
            <Col span={3}>
              <span>五</span>
            </Col>
            <Col span={3}>
              <span>六</span>
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row gutter={[4, 4]}>{dayItem}</Row>
        </Card>
      </div>
    );
  } else {
    return <h1>数据获取失败</h1>;
  }
};
export default calendar;
