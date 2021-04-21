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
    date: number;
    status: string;
  };
  /**
   * 研究生考勤类型用于展示类型
   */
  type DataShow = {
    id: string;
    name: string;
    projectName: string;
    date: string;
    status: string;
    dayInMonth: number;
  };
}
