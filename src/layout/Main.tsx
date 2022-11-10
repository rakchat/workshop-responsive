import { Button, Col, Divider, Input, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

export default function Main() {
  return (
    <>
      <Content
        className="container-padding"
        style={{
          marginTop: 64,
          background: "#002d2d",
        }}
      >
        <div style={{ paddingTop: 24 }}>
          <Row>
            <Col xs={24} md={12} lg={12} className="col-container-banner">
              <div className="contain-banner">
                <div className="banner-text-left-1">
                  If you can dream it, you can sell it with Shopify
                </div>
                <div className="banner-text-left-2">
                  Build your business here. Take it anywhere.
                </div>
                <Row gutter={16}>
                  <Col xs={24} md={24} lg={16}>
                    <Input
                      size="large"
                      placeholder="Enter your email address"
                      style={{
                        marginRight: "8px",
                        width: "100%",
                        height: "50px",
                        marginBottom: "8px",
                      }}
                    />
                  </Col>
                  <Col xs={24} md={24} lg={8}>
                    <Button
                      size="large"
                      type="primary"
                      style={{ width: "100%", height: "50px" }}
                    >
                      Start free trail
                    </Button>
                  </Col>
                </Row>
                <div
                  style={{
                    marginTop: "16px",
                    color: "#ffffff",
                    fontSize: "0.75em",
                  }}
                >
                  Try Shopify free for 3 days, no credit card required. By
                  entering your email, you agree to receive marketing emails
                  from Shopify.
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={12}>
              <div>
                <img
                  style={{ display: "block", maxWidth: "100%" }}
                  width="100%"
                  height="auto"
                  src={"/banner-right.png"}
                  alt="logo"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <div className="content-padding" style={{ backgroundColor: "#ffffff" }}>
        {/* ~1 */}
        <div>
          <div className="content-1" style={{ marginBottom: 80 }}>
            Discover why millions of entrepreneurs choose Shopify to build their
            business—from Hello World to IPO.
          </div>
          <div className="content-1-img">
            <img className="img-1" src={"/content-1.png"} alt="logo" />
          </div>
        </div>
        {/* ~2 */}
        <div style={{ paddingBottom: "6em" }}>
          <Row gutter={16}>
            <Col xs={24} md={8} lg={8}>
              <Divider style={{ backgroundColor: "#000000" }} />
              <div className="content-2">Store builder</div>
              <div style={{ marginBottom: "1em" }}>
                Bring your vision to life with our easy-to-use store creator. No
                coding expertise required—just your next big idea.
              </div>
              <span className="content-ul">
                Build the brand you want
                <ArrowRightOutlined style={{ paddingLeft: 4 }} />
              </span>
            </Col>
            <Col xs={24} md={8} lg={8}>
              <Divider />
              <div className="content-2">Themes</div>
              <div style={{ marginBottom: "1em" }}>
                Select from hundreds of customizable templates crafted by a
                community of world-class designers.
              </div>
              <span className="content-ul">
                Explore more Themes
                <ArrowRightOutlined style={{ paddingLeft: 4 }} />
              </span>
            </Col>
            <Col xs={24} md={8} lg={8}>
              <Divider />
              <div className="content-2">App store</div>
              <div style={{ marginBottom: "1em" }}>
                Add more features and functionality to your online store with
                app extensions from trusted Shopify partners.
              </div>
              <span className="content-ul">
                There’s an app for that
                <ArrowRightOutlined style={{ paddingLeft: 4 }} />
              </span>
            </Col>
          </Row>
        </div>
        {/* ~3 */}
        <div>
          <Row className="flow-reverse">
            <Col xs={24} md={12} lg={12} className="container-3">
              <div>
                <div className="content-3">
                  Connect with customers everywhere
                </div>
                <div style={{ marginBottom: "1em" }}>
                  Sell online, in person, or both with the marketing tools,
                  social integrations, and sales channels you need to get your
                  products in front of customers—and out the door.
                </div>
                <span className="content-ul">
                  Marketing made easy
                  <ArrowRightOutlined style={{ paddingLeft: 4 }} />
                </span>
              </div>
            </Col>
            <Col xs={24} md={12} lg={12}>
              <div>
                <div
                  className="content-3-img"
                  style={{
                    backgroundColor: "#fff8f6",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ display: "block" }}
                    width="100%"
                    height="auto"
                    src={"/content-3.png"}
                    alt="logo"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* ~4 */}
        <div className="p-content-4">
          <Row>
            <Col xs={24} md={12} lg={12}>
              <div>
                <div
                  className="content-4-img"
                  style={{
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ display: "block" }}
                    width="100%"
                    height="auto"
                    src={"/content-4.png"}
                    alt="logo"
                  />
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} className="container-4">
              <div>
                <div className="content-4">Everything you need to succeed</div>
                <div style={{ marginBottom: "1em" }}>
                  Manage inventory, track payments, and view real-time business
                  insights from a single dashboard. We’ve built all the tools
                  you need, so you can focus on building your business.
                </div>
                <span className="content-ul">
                  Do more from day one
                  <ArrowRightOutlined style={{ paddingLeft: 4 }} />
                </span>
              </div>
            </Col>
          </Row>
        </div>
        {/* ~5 */}
        <div className="p-content-4">
          <Row>
            <Col xs={24} md={24} lg={24}>
              <div>
                <div
                  className="content-5-img"
                  style={{
                    alignItems: "center",
                  }}
                >
                  <div className="content-5" style={{}}>
                    Empowering entrepreneurs everywhere
                  </div>
                  <img
                    // style={{ display: "block" }}
                    width="100%"
                    height="auto"
                    src={"/global.png"}
                    alt="logo"
                  />
                  <div className="contain-padding">
                    <Row gutter={16}>
                      <Col xs={12} md={6}>
                        <div className="content-5-ul">Millions</div>
                        <div className="content-5-li">
                          of merchants worldwide
                        </div>
                      </Col>
                      <Col xs={12} md={6}>
                        <div className="content-5-ul">175</div>
                        <div className="content-5-li">countries on Shopify</div>
                      </Col>
                      <Col xs={12} md={6}>
                        <div className="content-5-ul">5M</div>
                        <div className="content-5-li">
                          jobs supported in 2021
                        </div>
                      </Col>
                      <Col xs={12} md={6}>
                        <div className="content-5-ul">$444B+</div>
                        <div className="content-5-li">
                          global economic activity
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* ~6 */}
        <div>
          <Row className="flow-reverse" style={{ marginBottom: 26 }}>
            <Col xs={24} md={12}>
              <div>
                <div className="content-6-title">
                  Meet the merchants who chose Shopify
                </div>
                <div className="content-6-medium">
                  “We’ve been able to build something in 3 years that a lot of
                  brands haven’t actually gotten to in 10 years.”
                </div>
                <div className="content-6-bottom">
                  Chioma | Co-Founder & CEO
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div
                className="content-6-img"
                style={{
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <img
                  style={{ display: "block" }}
                  width="80%"
                  height="auto"
                  src={"/content-6.png"}
                  alt="logo"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={12} style={{ alignSelf: "center" }}>
              <div className="icon-hide">
                <ArrowLeftOutlined
                  className="icon-content-6"
                  style={{ color: "#ffffff", marginRight: 20 }}
                />
                <ArrowRightOutlined
                  className="icon-content-6"
                  style={{ color: "#ffffff" }}
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div
                className="content-6-img-logo "
                style={{
                  alignItems: "center",
                }}
              >
                <img
                  style={{ display: "block" }}
                  width="30%"
                  height="auto"
                  src={"/content-6-logo.svg"}
                  alt="logo"
                />
              </div>
            </Col>
          </Row>
        </div>
        {/* ~7 */}
        <div className="p-content-7">
          <Row>
            <Col xs={24} md={12} lg={12}>
              <div>
                <div
                  style={{
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ display: "block" }}
                    width="100%"
                    height="auto"
                    src={"/content-7.png"}
                    alt="logo"
                  />
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} className="container-7">
              <div>
                <div className="content-7">Shopify Editions</div>
                <div style={{ marginBottom: "1em" }}>
                  Welcome to Shopify Editions, where twice a year we pull back
                  the curtain and show you the hundreds of updates we’re making
                  as we go all-in on the Connect to Consumer era of business.
                </div>
                <span className="content-ul">
                  Take a peek
                  <ArrowRightOutlined style={{ paddingLeft: 4 }} />
                </span>
              </div>
            </Col>
          </Row>
        </div>
        {/* ~8 */}
        <div>
          <Row className="flow-reverse-8">
            <Col md={24} lg={12} className="container-8">
              <div>
                <Row>
                  <div className="content-8-title">
                    The help you need, when you need it
                  </div>
                </Row>
                <Row gutter={16}>
                  <Col className="mb-content-8" xs={24} md={12}>
                    <div>
                      <div className="content-8">Shopify Blog</div>
                      <div style={{ marginBottom: "1em" }}>
                        Get all the marketing and business strategy tips you
                        need to help you run an online business.
                      </div>
                      <span className="content-ul">
                        Read
                        <ArrowRightOutlined style={{ paddingLeft: 4 }} />
                      </span>
                    </div>
                  </Col>
                  <Col className="mb-content-8" xs={24} md={12}>
                    <div>
                      <div className="content-8">Online Courses</div>
                      <div style={{ marginBottom: "1em" }}>
                        Learn from the best with instant access to lessons from
                        successful entrepreneurs around the world.
                      </div>
                      <span className="content-ul">
                        Learn
                        <ArrowRightOutlined style={{ paddingLeft: 4 }} />
                      </span>
                    </div>
                  </Col>
                  <Col className="mb-content-8" xs={24} md={12}>
                    <div>
                      <div className="content-8">Our Community</div>
                      <div style={{ marginBottom: "1em" }}>
                        Connect with a community of brands, partners, and fellow
                        merchants who understand Shopify.
                      </div>
                      <span className="content-ul">
                        Connect
                        <ArrowRightOutlined style={{ paddingLeft: 4 }} />
                      </span>
                    </div>
                  </Col>
                  <Col className="mb-content-8" xs={24} md={12}>
                    <div>
                      <div className="content-8">Help Center</div>
                      <div style={{ marginBottom: "1em" }}>
                        Find answers in a flash with your dedicated resource for
                        articles and videos from our Support team.
                      </div>
                      <span className="content-ul">
                        Get Help
                        <ArrowRightOutlined style={{ paddingLeft: 4 }} />
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={24} lg={12}>
              {/* image */}{" "}
              <div>
                <div
                  style={{
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                    }}
                    width="100%"
                    height="auto"
                    src={"/content-8.png"}
                    alt="logo"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* ~9 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginBlock: 40,
          }}
        >
          <div>
            <div className="title-9">Grow your business here</div>
            <div className="medium-9">
              Whether you want to sell products down the street or around the
              world, we have all the tools you need.
            </div>
            <Button
              size="large"
              type="primary"
              style={{ width: "200px", height: "50px" }}
            >
              Start free trail
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
