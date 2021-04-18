import { Table } from 'antd';
import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Student } from './compose';

interface Show {
  columns: ColumnsType<Student>;
  dataSource: Student[];
}

const Show: React.FC<Show> = props => {
  let { columns, dataSource } = props;
  return (
    <>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  );
};
export default Show;
