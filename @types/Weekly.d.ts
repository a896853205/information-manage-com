namespace PT {
  //weekly行属性类型
  type columnsData = (
    | { title: string; key: string; dataIndex: string; render?: undefined }
    | {
        title: string;
        key: string;
        render: () => JSX.Element;
        dataIndex?: undefined;
      }
  )[];
}
