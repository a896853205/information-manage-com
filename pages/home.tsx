import MyLayout from 'layouts/index';
import HomeContainer from 'inner-page/home/home';

/**
 * 角色：高校管理员
 * 系统欢迎页（以后更换，现用项目信息管理页面代替）
 */
const Home = () => {
  return (
    <>
      <HomeContainer />
    </>
  );
};
Home.Layout = MyLayout;

export default Home;
