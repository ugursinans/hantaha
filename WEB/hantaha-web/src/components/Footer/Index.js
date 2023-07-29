import { Footer } from "antd/es/layout/layout";

const AppFooter = () => {
  const footerStyle = {
    backgroundColor:"white",
    textAlign: 'center',
    color: '#000',
    borderTop: "1px solid #ccc",

  };
  
  return (
    <Footer style={footerStyle}>
       Footer
    </Footer>
  );
};

export default AppFooter;
