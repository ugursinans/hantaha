import { Content } from "antd/es/layout/layout";

const AppContent = () => {

  const contentStyle = {
    textAlign: 'center',
    color: '#000',
    minHeight: '85vh',
    backgroundColor:"white"

  };

  return (
    <Content style={contentStyle}>
      <div>Content</div>
    </Content>
  );
};

export default AppContent;
