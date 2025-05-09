import React, { useState } from 'react';
import { Typography, Layout, Row, Col, Select } from 'antd';
const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Option } = Select;
import BlogPost from '../components/PostForms/blogPost';
// import CodePost from '../components/PostForms/codePost';
import LinkPost from '../components/PostForms/linkPost';
const NewPost: React.FC = () => {
const [postType, setPostType] = useState<string>("blog");

const handlePostTypeChange = (value: string) => {
  setPostType(value);
}
    
    return (
       <Layout className="home" style={{ minHeight: "100vh", padding: "40px", background: "var(--primary)" }}>
         <Content className="page-section" style={{ textAlign: "center", maxWidth: 800, margin: "auto" }}>
           <Title level={1} style={{ color: "var(--tertiary)", fontFamily: "var(--font-header)", fontSize: "4rem" }}>Welcome to Byte-Me!</Title>    
           <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16 }} justify="center">
             <Col span={24}>
               <Paragraph style={{ color: "var(--secondary)", fontFamily: "var(--font-body)", fontSize: "1.5rem" }}>What would you like to share?</Paragraph>
               <Select defaultValue="blog" onChange={handlePostTypeChange} style={{ width: 120, background: "var(--secondary)", color: "var(--primary)", fontSize: "1.5rem" }}>
                 <Option value="blog">Blog Style</Option>
                 {/* <Option value="code">Code Snippet</Option> */}
                 <Option value="link">Link Share</Option>
               </Select>
             </Col>
           </Row>

           <Row gutter={16} justify="center">
             {postType === "blog" && <BlogPost />}
             {/* {postType === "code" && <CodePost />} */}
             {postType === "link" && <LinkPost />}
           </Row>
         </Content>
       </Layout>

    );
};

export default NewPost;