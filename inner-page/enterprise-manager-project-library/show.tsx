import { Table, Input } from 'antd';

const { Column } = Table;
const { Search } = Input;

interface ShowProps {
  projectDataSource: PT.Project[];
}
const Show: React.FC<ShowProps> = props => {
  const { projectDataSource } = props;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Search placeholder="搜索" style={{ width: '200px' }} />
      </div>
      <Table dataSource={projectDataSource} size="middle">
        <Column title="序号" dataIndex="id" key="id" />
        <Column title="项目名称" dataIndex="name" key="name" />
        <Column title="项目开始时间" dataIndex="startTime" key="startTime" />
        <Column title="学科专业" dataIndex="major" key="major" />
        <Column title="投资" dataIndex="invest" key="invest" />
        <Column title="所属示范点" dataIndex="enterprise" key="enterprise" />
        <Column
          title="高校导师"
          dataIndex="schoolTeacher"
          key="schoolTeacher"
        />
        <Column
          title="示范点导师"
          dataIndex="enterpriseTeacher"
          key="enterpriseTeacher"
        />
      </Table>
    </>
  );
};

export default Show;
