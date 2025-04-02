import React from 'react';
import { Typography } from 'antd';
import '../../App.css';

const { Title } = Typography;

//function to create the Header
const Header: React.FC = () => {
  return (
    <Title level={1} style={{color: "var(--quaternary)", background: "var(--tertiary)", marginTop: "0px", marginBottom: "0px", padding: "0px", paddingBottom: "8px", fontFamily: "var(--font-header)", fontSize: "4rem" }}>
      Byte-Me
    </Title>
  );
}

export default Header;