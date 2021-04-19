/**
 * 研究生培养命名空间
 */
export namespace PT {
  /**
   * 研究生考勤类型
   */
  type Attendance = {
    id: string;
    name: string;
    projectName: string;
    date: Date;
    status: string;
  };
}
