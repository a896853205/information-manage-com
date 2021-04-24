/**
 * 研究生培养命名空间
 */
namespace PT {
  /**
   * 项目类型
   */
  type Project = {
    key?: number;
    id: number;
    name: string;
    enterpriseTeacher: string;
    invest: number;
    needStudent: number;
    enterprise?: string;
    invest?: number;
    needStudent: number;
    createTime?: Date;
    startTime?: Date;
    endTime?: Date;
    state: string;
    major: string;
    schoolTeacher: string[];
  };
  /**
   * 企业管理员-> 项目库管理用于展示类型
   */
  interface ProjectShow extends Project {
    formatedYearAndMonthAndDay: string; // 'YYYY/MM/DD'
  }
}
