namespace PT {
  // weekly数据属性
  type Weekly = {
    key: number;
    index: number;
    projectName: string; // 项目的名字
    name: string; // 学生的姓名
    date: string; // date的值是一个YYYY-MM-DD字符串
    status: string; // 周志的完成状况(应该指的是周志评价的完成情况,或者周志的完成情况)
    level: number; // level的值分别为1-3,1代表优秀,2代表及格,3代表不及格
  };
}
