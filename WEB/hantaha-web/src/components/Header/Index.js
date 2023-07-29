import { Button, Layout, Space } from "antd";
const { Header } = Layout;

const AppHeader = () => {
  const headerStyle = {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    borderBottom: "1px solid #ccc",
    backgroundColor: "white",
  };
  return (
    <Header style={headerStyle}>
      <Space>
        <Button>Giriş Yap</Button>
        <Button>Üye Ol</Button>
      </Space>
    </Header>
  );
};

export default AppHeader;
