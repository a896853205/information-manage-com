import { Button, Space, Table } from 'antd';
import { useRequest } from 'ahooks';
import Column from 'antd/lib/table/Column';
import { useState } from 'react';

export default () => {
  const [projectList, setProjectList] = useState([]);
  // TODO:使用useRequest向后台获取项目信息
  return (
    <>
      <Table dataSource={projectList} size="small" rowClassName="dc3-table-row">
        <Column title="#" dataIndex="index" key="index" />
        <Column title="分组名称" dataIndex="name" key="name" />
        <Column title="分组ID" dataIndex="id" key="id" />
        <Column title="创建日期" dataIndex="createTime" key="createTime" />
        <Column
          title="操作"
          dataIndex="operation"
          key="operation"
          render={() => (
            <Space size="middle">
              <Button type="primary">查看</Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
};
