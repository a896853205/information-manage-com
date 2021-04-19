namespace PT {
  // FIXME: antd的列属性官方给了, 不用自己编写, 参考Attendance分支修改
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
  // FIXME: 命名参考Attendance
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
