import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Layout, Row, Col, List } from 'antd';
import '../App.css';


// Destructure Ant Design components for cleaner use
const { Title, Paragraph } = Typography;
const { Content } = Layout;


//function to create the entry page
const Entry: React.FC = () => {
	return (
		<Layout className="home" style={{ minHeight: "100vh", padding: "40px", background: "var(--primary)" }}>
			<Content className="page-section" style={{ textAlign: "center", maxWidth: 800, margin: "auto" }}>

				<Row gutter={16} justify="center">
					<Col>
						<Link to="/signup">
							<Button type="primary" size="large" className="custom-menu-item" style={{ background: "var(--tertiary)", color: "var(--quaternary)", fontSize: "1.8rem" }}>Sign Up</Button>
						</Link>
					</Col>
					<Col>
						<Link to="/login">
							<Button type="primary" size="large" className="custom-menu-item" style={{ background: "var(--tertiary)", color: "var(--quaternary)", fontSize: "1.8rem" }}>Login</Button>
						</Link>
					</Col>
				</Row>
				<Title level={1} style={{ color: "var(--tertiary)", fontFamily: "var(--font-header)", fontSize: "3rem" }}>You're invited Sunday, April 20th at 5:30pm to a Spring BBQ!</Title>
				<Row gutter={[16, 16]} justify="center">
					<Col span={24}>
						<Paragraph style={{ color: "var(--secondary)", fontFamily: "var(--font-body)", fontSize: "1.5rem" }}>
							Come to 22W569 Winthrop Ave, Glendale Heights, IL 60139 and bring one simple thing like a pack or two of hot dogs, a bag of chips, or a few packs of buns.
						</Paragraph>
						<Paragraph style={{ color: "black", fontFamily: "var(--font-header)", fontSize: "2.75rem", padding: "0px", margin: "0px" }}>
							Make an account and let everyone know what you're bringing and that you'll be there!
						</Paragraph>
						<Paragraph style={{ color: "black", fontFamily: "var(--font-body)", fontSize: "2rem", padding: "0px" }}>
							Take a look at the posts from other people and see what they are bringing to the table to plan accordingly. (We'll handle the grill materials, firewood, and plating. There will be some brats and enough drinks to get us started also.)
						</Paragraph>
						<List style={{ fontFamily: "var(--font-body)", fontSize: "1.5rem", textAlign: "left" }}>
							What to bring:
							<List.Item>
								- Hot dogs
							</List.Item>
							<List.Item>
								- Burgers/ground beef
							</List.Item>
							<List.Item>
								- Buns for both
							</List.Item>
							<List.Item>
								- Chips
							</List.Item>
							<List.Item>
								- Drinks (alcohol, soda or other soft drinks all welcome)
							</List.Item>
						</List>
					</Col>
				</Row>
			</Content>
		</Layout >
	);
};

export default Entry;