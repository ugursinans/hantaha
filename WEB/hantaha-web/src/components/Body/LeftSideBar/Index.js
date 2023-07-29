import Sider from "antd/es/layout/Sider";

const AppLeftSideBar = () => {
  const siderStyle = {
    textAlign: 'center',
    color: '#000',
    borderRight: "1px solid #ccc",
    minHeight: '85vh',
    backgroundColor:"white"
  };
  return (
    <Sider style={siderStyle}>
      <div>LeftSideBar</div>
    </Sider>
  );
};

export default AppLeftSideBar;
