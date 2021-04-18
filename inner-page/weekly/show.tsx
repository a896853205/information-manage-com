import React, { Component } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
  Popover,
  Radio,
  Space,
  Table,
  Checkbox,
} from 'antd';
import {
  MinusOutlined,
  UnorderedListOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import 'moment/locale/zh-cn';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';
import Search from 'antd/lib/input/Search';

class Show extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    let that = this;
    //初始化行属性
    const columns: any[] = [
      {
        title: '序号',
        key: 'key',
        dataIndex: 'key',
      },
      {
        title: '学生名称',
        key: 'studentName',
        dataIndex: 'studentName',
      },
      {
        title: '项目名称',
        key: 'name',
        dataIndex: 'name',
      },
      {
        title: '日期',
        key: 'date',
        dataIndex: 'date',
      },
      {
        title: '完成情况',
        key: 'status',
        dataIndex: 'status',
      },
      {
        title: '评价',
        key: 'advice',
        dataIndex: 'advice',
      },
      {
        title: '操作',
        key: 'action',
        render: function (_text: any, _record: any, _index: any) {
          return (
            <Space>
              <Button
                type={'primary'}
                onClick={() => {
                  that.setState({
                    selectIndex: _record.index,
                    showModel: true,
                  });
                }}
              >
                查看
              </Button>
            </Space>
          );
        },
      },
    ];
    // TODO:MOCK数据填充
    const projectList: any[] = [];
    for (let i = 0; i < 100; i++) {
      let randomMonth = Math.floor(Math.random() * 12);
      let randomYear = Math.floor(Math.random() * 20 + 2000);
      projectList.push({
        key: i,
        studentName: 'jhx' + i,
        name: '退役锂电材料短程循环与过程污染控制技术与评价方法研究' + i,
        date:
          randomYear +
          '/' +
          (randomMonth < 10 ? '0' + randomMonth : randomMonth),
        status: 'success',
        advice: 'null',
        index: i,
      });
    }
    /**
     * @param:data 页面当前显示数据
     * @param:dataAll 从后台获取的所有数据
     * @param:columns 当前显示表格的行属性
     * @param:selectedRowKeys 代表当前选择中的列
     * @param:loading 代表当前页面正在加载
     * @param:showModel 是否显示详情的对话框
     * @param:selectIndex 帮助获取详情对话框的具体参数
     * @param:selectValue 代表当前正在搜索的value
     * @param:selectDate 代表当前选择的日期,这里使用moment对象
     */
    this.state = {
      data: projectList,
      dataAll: projectList,
      columns: columns,
      defaultColumns: columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      showModel: false,
      selectIndex: 0,
      selectValue: '',
      selectDate: null,
    };
  }

  start = () => {
    this.setState({
      loading: true,
    });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  //选中列改变时调用
  onSelectChange = (selectedRowKeys: any) => {
    this.setState({
      selectedRowKeys,
    });
  };

  //删除选中项
  delete = () => {
    // @ts-ignore
    let { selectedRowKeys, dataAll } = this.state;
    for (let x of selectedRowKeys) {
      dataAll = dataAll.filter((_item: any, index: string | number) => {
        return dataAll[index].key != x;
      });
    }
    this.setState({
      dataAll,
      data: dataAll,
    });
  };

  //详情页面下载的时候使用
  downLoad = () => {
    // FileSaver.saveAs('111', Date.now() + '.docx');
  };

  //设置对话框是否显示
  setFalse = () => {
    this.setState({
      showModel: false,
    });
  };

  checkedChange = (e: any) => {
    // @ts-ignore
    const { defaultColumns } = this.state;
    let col = defaultColumns.filter((i: { key: any }) => {
      return e.some((j: any) => i.key == j);
    });
    this.setState({
      columns: col,
    });
  };

  render() {
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
        onChange={this.checkedChange}
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
    // @ts-ignore
    const { selectIndex, selectedRowKeys, columns } = this.state;
    // @ts-ignore
    const { data, showModel, dataAll, selectValue, selectDate } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        {/*数据展示及操作模板*/}
        <div style={{ marginBottom: '1vh' }}>
          {/*左侧删除按钮及提示框*/}
          <Popconfirm
            title="一经删除将无法恢复数据,请确认是否进行删除"
            onConfirm={this.delete}
            okText="确定删除"
            cancelText="取消"
            icon={<WarningOutlined style={{ color: 'red' }} />}
          >
            <Button type="primary" danger={true}>
              <MinusOutlined />
              删除
            </Button>
          </Popconfirm>
          <div style={{ float: 'right' }}>
            {/*右侧搜索栏目前只实现了搜索属性name也就是项目名称*/}
            <Search
              placeholder="搜索"
              onSearch={value => {
                //使用类似于stream的思想通过filter来剔除不符合条件的数据,剔除两次是因为有两个需要做filter的属性
                const dataFilter = dataAll
                  //剔除搜索框
                  .filter((_values: any, index: string | number, _a: any) => {
                    return dataAll[index].name
                      .toString()
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  })
                  //剔除日期选择栏
                  .filter((_values: any, index: string | number, _a: any) => {
                    if (selectDate) {
                      return (
                        selectDate.isSame(
                          moment(dataAll[index].date, 'YYYY/MM'),
                          'year'
                        ) &&
                        selectDate.isSame(
                          moment(dataAll[index].date, 'YYYY/MM'),
                          'month'
                        )
                      );
                    } else {
                      //如果没选择日期则返回false
                      return true;
                    }
                  });
                this.setState({
                  data: dataFilter,
                  selectValue: value,
                });
              }}
              style={{ width: '200px', marginRight: '0.2vw' }}
            />
            <DatePicker
              onChange={(date, _dateString) => {
                //同上面的onChange,逻辑上稍有不同
                const dataFilter = dataAll
                  .filter((_values: any, index: string | number, _a: any) => {
                    if (date) {
                      return (
                        date.isSame(
                          moment(dataAll[index].date, 'YYYY/MM'),
                          'year'
                        ) &&
                        date.isSame(
                          moment(dataAll[index].date, 'YYYY/MM'),
                          'month'
                        )
                      );
                    } else {
                      return true;
                    }
                  })
                  .filter((_values: any, index: string | number, _a: any) => {
                    return dataAll[index].name
                      .toString()
                      .toLowerCase()
                      .includes(selectValue.toLowerCase());
                  });
                this.setState({
                  data: dataFilter,
                  selectDate: date,
                });
              }}
              picker={'month'}
            />
            <div
              style={{
                display: 'inline-block',
                marginLeft: '0.2vw',
                marginRight: '1vw',
              }}
            >
              <Popover
                style={{
                  marginLeft: '1vh',
                  marginRight: '1vw',
                }}
                placement="bottomRight"
                content={menu}
                trigger="click"
              >
                <Button icon={<UnorderedListOutlined />} />
              </Popover>
            </div>
          </div>
        </div>
        {/*数据显示信息*/}
        <div style={{ width: '81vw' }}>
          <Table
            key={data.length}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 15 }}
            scroll={{ y: '52vh' }}
          />
        </div>
        {/*查看周志模板*/}
        <Modal
          title="查看周志"
          visible={showModel}
          onCancel={this.setFalse}
          footer={null}
          style={{ top: 20 }}
          width={1000}
        >
          {/*详情页面的表单结构*/}
          <>
            {data[selectIndex] ? (
              <Form
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 25 }}
                layout="horizontal"
              >
                <Form.Item name="studentName" label="姓名" required>
                  <Input placeholder={data[selectIndex].studentName} />
                </Form.Item>
                <Form.Item name="name" label="项目名称">
                  <Input placeholder={data[selectIndex].name} />
                </Form.Item>
                <Form.Item name="date" label="项目年份">
                  <DatePicker
                    defaultValue={moment(data[selectIndex].date, 'YYYY/MM')}
                    picker={'month'}
                  />
                </Form.Item>
                <Form.Item label="第一周">
                  <div style={{ width: 800, display: 'inline-block' }}>
                    <Input disabled={false} placeholder="社会实践报告.docx" />
                  </div>
                  <Button
                    style={{
                      marginLeft: '1vh',
                    }}
                    type="primary"
                    danger={true}
                    onClick={this.downLoad}
                  >
                    下载
                  </Button>
                </Form.Item>
                <Form.Item label="第二周">
                  <div style={{ width: 800, display: 'inline-block' }}>
                    <Input disabled={false} placeholder="社会实践报告.docx" />
                  </div>
                  <Button
                    style={{
                      marginLeft: '1vh',
                    }}
                    type="primary"
                    danger={true}
                    onClick={this.downLoad}
                  >
                    下载
                  </Button>
                </Form.Item>
                <Form.Item label="第三周">
                  <div style={{ width: 800, display: 'inline-block' }}>
                    <Input disabled={false} placeholder="社会实践报告.docx" />
                  </div>
                  <Button
                    style={{
                      marginLeft: '1vh',
                    }}
                    type="primary"
                    danger={true}
                    onClick={this.downLoad}
                  >
                    下载
                  </Button>
                </Form.Item>
                <Form.Item label="第四周">
                  <div style={{ width: 800, display: 'inline-block' }}>
                    <Input disabled={false} placeholder="社会实践报告.docx" />
                  </div>
                  <Button
                    style={{
                      marginLeft: '1vh',
                    }}
                    type="primary"
                    danger={true}
                    onClick={this.downLoad}
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
            ) : (
              <div style={{ color: 'red' }}>空数据异常请添加数据后重试</div>
            )}
          </>
        </Modal>
      </div>
    );
  }
}

export default Show;
