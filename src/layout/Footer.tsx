import { Col, Row } from "antd";
import { Footer } from "antd/lib/layout/layout";

export default function FooterPage() {
  return (
    <Footer
      style={{
        backgroundColor: "#004c3f",
        paddingInline: 80,
      }}
    >
      <Row>
        <Col xs={24}>
          <div>
            <span>About</span>
            <span>Careers</span>
            <span>Press and Media</span>
            <span>Shopify Plus</span>
            <span>Sitemap</span>
          </div>
        </Col>
      </Row>
    </Footer>
  );
}
