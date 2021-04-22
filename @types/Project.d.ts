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
    enterprise?: string;
    invest?: number;
    needStudent: number;
    createTime?: Date;
    startTime?: Date;
    endTime?: Date;
    state: string;
  };
}
