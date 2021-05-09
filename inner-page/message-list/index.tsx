import { useState, useEffect } from 'react';

import { Typography, Form } from 'antd';

import TypedSpan from 'components/typed-span';
import Table from './table';
import Search from './search';

const { Title } = Typography;

const MessageList = () => {
  const [form] = Form.useForm();

  /**
   * 此处状态不是form表单最终提交的状态，此处是用户输入的状态值
   */
  const [code, setCode] = useState<number>();
  const [message, setMessage] = useState<string>();
  const [type, setType] = useState<string>();

  const [messages, setMessages] = useState<MC.Message[]>([
    {
      id: 1,
      uuid: '123456789asdasd',
      code: 23151,
      message: '注册成功，请等待审核',
      type: 'success',
    },
  ]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const values = await form.validateFields();
        console.log(values);

        // TODO: run()
        // TODO: setMessages
      } catch (errorInfo) {
        console.error('Failed:', errorInfo);
      }
    })();
  }, [code, message, type, page]);

  return (
    <Typography>
      <Title>
        <TypedSpan strings="Message" />
      </Title>
      <Search
        form={form}
        setCode={setCode}
        setMessage={setMessage}
        setType={setType}
      />
      <Table setPage={setPage} messages={messages} />
    </Typography>
  );
};

export default MessageList;
