import "./App.less";
import Head from "./layout/Head";
import Main from "./layout/Main";
import FooterPage from "./layout/Footer";
import { Layout } from "antd";

function App() {
  return (
    <Layout className="container">
      <Head />
      <Main />
      <FooterPage />
    </Layout>
  );
}

export default App;
