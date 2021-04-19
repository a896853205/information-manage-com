namespace PT {
  // weekly行属性类型
  type columnsData = (
    | { title: string; key: string; dataIndex: string; render: undefined }
    | {
        title: string;
        key: string;
        render: () => JSX.Element;
        dataIndex: undefined;
      }
  )[];
  // weekly数据属性
  type weeklyData={
    key: number,
    index: number,
    projectName:string,
    name: string,
    date: string,
    status: string,
    level: string,
  };
}
