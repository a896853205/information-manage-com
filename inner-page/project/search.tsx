import { Key } from 'react';
import { Button, Input, Table, Space, Modal } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import Mock from 'mockjs';

import Show from 'inner-page/project/show';

const { Search } = Input;
const { Column } = Table;

const rowSelection = {
  onchange: (selectedRowKeys: Key[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`);
  },
};
const SearchComponent = () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const { data } = Mock.mock({
    'data|10': [
      {
        'key|+1': 1,
        'index|+1': 1,
        'name|+1': [
          '退役锂电材料短程循环与过程污染控制技术与评价方法研究',
          '电动汽车全生命周期分析与环境评价',
          '停车相关管理系统及平台',
          '大型复杂结构施工监控关键技术研究',
        ],
        'enterprise|+1': [
          '广东邦普循环科技有限公司',
          '广东艾科智泊科技股份有限公司',
          '佛山市顺德区高新技术企业协会	',
          '广东施泰宝医疗科技有限公司',
        ],
        'invest|10-100': 1,
        'needStudent|1-20': 1,
        createTime: '@date("yyyy")',
        startTime: '@date("yyyy-MM-dd")',
        endTime: '@date("yyyy-MM-dd")',
        state: '指标招生',
      },
    ],
  });

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
        title="项目查看"
        visible={isShow}
        onCancel={setFalse}
        footer={
          <Button key="back" onClick={setFalse}>
            返回
          </Button>
        }
      >
        <Show />
      </Modal>
      <Search placeholder="搜索" style={{ width: 200 }} />
      <Table
        dataSource={data}
        size="small"
        rowClassName="dc3-table-row"
        rowSelection={{ type: 'checkbox', ...rowSelection }}
      >
        <Column title="序号" dataIndex="index" key="index" />
        <Column title="项目名称" dataIndex="name" key="name" />
        <Column title="所属示范点" dataIndex="enterprise" key="enterprise" />
        <Column title="投资金额（万元）" dataIndex="invest" key="invest" />
        <Column title="需求学生" dataIndex="needStudent" key="needStudent" />
        <Column title="项目年份" dataIndex="createTime" key="createTime" />
        <Column title="开始时间" dataIndex="startTime" key="startTime" />
        <Column title="结束时间" dataIndex="endTime" key="endTime" />
        <Column title="项目状态" dataIndex="state" key="state" />
        <Column
          title="操作"
          dataIndex="operation"
          key="operation"
          render={() => (
            <Space size="middle">
              <Button type="primary" onClick={setTrue}>
                查看
              </Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default SearchComponent;
