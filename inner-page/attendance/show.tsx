import { Button, Space, Table } from 'antd';
import { useRequest } from 'ahooks';
import Column from 'antd/lib/table/Column';
import { useState } from 'react';

const Show = () => {
  const [projectList, setProjectList] = useState([]);
  // TODO:使用useRequest向后台获取项目信息
  return (
    <>
      <Table dataSource={projectList} size="small" rowClassName="dc3-table-row">
        考勤管理
      </Table>
    </>
  );
};
export default Show;
