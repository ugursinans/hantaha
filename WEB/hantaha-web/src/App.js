import React from "react";
import "./App.css";
import { Col, Layout, Row} from "antd";
import AppHeader from "./components/Header/Index";
import AppBody from "./components/Body/Index";
import AppFooter from "./components/Footer/Index";

const App = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <Layout>
          <AppHeader/>
          <Layout>
            <AppBody/>
          </Layout>
          <AppFooter/>
        </Layout>
      </Col>
    </Row>
  );
};

export default App;
