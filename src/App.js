// import { Route, Switch } from "react-router-dom";
import FsMenu from "./FsMenu";
import FsHeader from "./FsHeader";
// import FindAssets from "./components/assets/find/FindAssets";
import { Layout } from "antd";
import "antd/dist/antd.css";
// import FindCompanies from "./components/company/find/FindCompany";
import FindUnits from "./components/unit/find/FindUnit";

function App() {
  const { Header, Sider, Content } = Layout;
  return (
    <>
      <Layout>
        <Sider theme="light" trigger={null}>
          <div className="logo" />
          <FsMenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <FsHeader />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {/* <Switch>
              <Route path="/find-assets"> */}
            <FindUnits />
            {/* </Route>
            </Switch> */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
