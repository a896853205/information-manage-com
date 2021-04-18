import { Button, DatePicker, Form, Input, Radio } from 'antd';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';

const Content = (props: any) => {
  const { data, selectIndex } = props;
  // 详情页面下载的时候使用
  const downLoad = () => {};
  return (
    <>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 25 }}
        layout="horizontal"
      >
        <Form.Item name="studentName" label="姓名">
          <div>
            <Input
              value={data[selectIndex].studentName}
              aria-disabled={false}
            />
          </div>
        </Form.Item>
        <Form.Item name="name" label="项目名称">
          <div>
            <Input aria-disabled={false} value={data[selectIndex].name} />
          </div>
        </Form.Item>
        <Form.Item name="date" label="项目年份">
          <DatePicker
            defaultValue={moment(data[selectIndex].date, 'YYYY/MM')}
            picker={'month'}
            disabled={true}
          />
        </Form.Item>
        <Form.Item label="第一周">
          <div style={{ width: '50vw', display: 'inline-block' }}>
            <Input
              disabled={false}
              value="社会实践报告.docx"
              aria-disabled={false}
            />
          </div>
          <Button
            style={{
              marginLeft: '1vh',
            }}
            type="primary"
            danger={true}
            onClick={downLoad}
          >
            下载
          </Button>
        </Form.Item>
        <Form.Item label="第二周">
          <div style={{ width: '50vw', display: 'inline-block' }}>
            <Input
              disabled={false}
              value="社会实践报告.docx"
              aria-disabled={false}
            />
          </div>
          <Button
            style={{
              marginLeft: '1vh',
            }}
            type="primary"
            danger={true}
            onClick={downLoad}
          >
            下载
          </Button>
        </Form.Item>
        <Form.Item label="第三周">
          <div style={{ width: '50vw', display: 'inline-block' }}>
            <Input
              disabled={false}
              value="社会实践报告.docx"
              aria-disabled={false}
            />
          </div>
          <Button
            style={{
              marginLeft: '1vh',
            }}
            type="primary"
            danger={true}
            onClick={downLoad}
          >
            下载
          </Button>
        </Form.Item>
        <Form.Item label="第四周">
          <div style={{ width: '50vw', display: 'inline-block' }}>
            <Input
              disabled={false}
              value="社会实践报告.docx"
              aria-disabled={false}
            />
          </div>
          <Button
            style={{
              marginLeft: '1vh',
            }}
            type="primary"
            danger={true}
            onClick={downLoad}
          >
            下载
          </Button>
        </Form.Item>
        <div
          style={{
            fontSize: 'large',
            marginLeft: '2vh',
          }}
        >
          填写评论
        </div>
        <hr />
        <Form.Item name="advice">
          <Radio.Group defaultValue={2}>
            <Radio value={1}>优秀</Radio>
            <Radio value={2}>合格</Radio>
            <Radio value={3}>不合格</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="周志评测" name="textAdvice">
          <TextArea rows={1} cols={8} />
        </Form.Item>
        <Form.Item style={{ float: 'right' }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
        <Form.Item />
      </Form>
    </>
  );
};

export default Content;
