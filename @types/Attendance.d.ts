/**
 * 研究生培养命名空间
 */
namespace PT {
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
  /**
   * 项目类型
   */
  type Project = {
    id: string;
    name: string;
    enterprise: string;
    invest: number;
    needStudent: number;
    createTime: Date;
    startTime: Date;
    endTime: Date;
    state: string;
  };
}
