/**
 * 研究生培养命名空间
 */
namespace PT {
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
  /**
   * 高校导师
   */
  // FIXME: 决定teacher是否需要单独拿出去（看一下数据库）
  type Teacher = {
    id: string;
    name: string;
    schoolName: string;
    tel: string;
    applyDoctorNums: number;
    applyPostgraduateNums: number;
    checkDoctorNums: number;
    checkPostgraduateNums: number;
    FirstDoctorNums: number;
    FirstPostgraduateNums: number;
    secondDoctorNums: number;
    secondPostgraduateNums: number;
    description: string;
    state: string;
  };
}
