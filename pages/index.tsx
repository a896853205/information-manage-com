import MyLayout from 'layouts/index';
import Compose from 'inner-page/project/compose'; // FIXME:暂时用project内容代替系统首页

/**
 * 角色：高校管理员
 * 系统欢迎页（以后更换，现用项目信息管理页面代替）
 */
const Home = () => <Compose />;
Home.Layout = MyLayout;

export default Home;
