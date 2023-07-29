import AppContent from "./Content/Index";
import Content from "./Content/Index";
import AppLeftSideBar from "./LeftSideBar/Index";
import { Col, Layout, Row, Space } from "antd";

const AppBody = () => {
    return (
      <>
        <AppLeftSideBar>LEFT</AppLeftSideBar>
        <AppContent>Content</AppContent>
      </>
    );
  };
  
  export default AppBody;