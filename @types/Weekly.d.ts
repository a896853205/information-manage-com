namespace PT {
  //weekly行属性类型
  // FIXME: 这里可以参考Attendance的类型编写, 如果将列这样的单独定义类型的话它几乎是没有重用的可能
  // FIXME: 然后这个 dataIndex?: undefined. ?:就已经代表undefined了. 可以去看一下ts的官网的类型定义.
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
