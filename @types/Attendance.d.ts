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
  /**
   * 学生
   */
  type Student = {
    id: string;
    name: string;
    schoolName: string;
    grade: string;
    schoolTeacher: string;
    eduBackground: string;
    projectName: string;
    enterpriseTeacher: string;
    state: string;
  };
  /**
   * 高校导师
   */
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
