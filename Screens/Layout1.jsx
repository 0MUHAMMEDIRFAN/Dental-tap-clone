import { Layout, Menu, theme } from "antd";
import { Outlet } from 'react-router-dom'
import Topbar from "../src/components/topbar";
import Footer from "../src/components/footer";

const { Header, Content, Sider } = Layout;
const Layout1 = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Topbar />
      <Layout
      >
        {/* this layout for main contents , / body contents after sidebar */}
        <Layout
        // style={{ marginTop: "146px" }}
          className={`site-layout custom-transition`}
        >
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </>
  )
}

export default Layout1