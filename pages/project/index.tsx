/**
 * 角色：企业管理员
 * 项目对接管理
 */
import dynamic from 'next/dynamic';

const Project = dynamic(() => import('./components/compose'));
export default () => <Project />;
