import { Menu, MenuProps, Row, Col, Button, Divider } from "antd";
import { Header } from "antd/lib/layout/layout";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

export default function Head() {
  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  };

  const itemsOne: MenuItem[] = [
    getItem("Start", "sub1", <DownOutlined />, [
      getItem("Start your business", "1"),
    ]),
    getItem("Sell", "sub2", <DownOutlined />, [
      getItem("Sell everywhere", "sub3", null, [
        getItem("Option 1", "1"),
        getItem("Option 2", "2"),
        getItem("Option 3", "3"),
        getItem("Option 4", "4"),
      ]),
    ]),
    getItem("Market", "sub4", <DownOutlined />, [
      getItem("Marget your business", "1"),
    ]),
    getItem("Manage", "sub5", <DownOutlined />, [
      getItem("Manage everything", "1"),
    ]),
  ];
  const itemsTwo: MenuItem[] = [
    getItem("Pricing", "sub1", []),
    getItem("Learn", "sub2", <DownOutlined />, [
      getItem("Help center", "sub3", null, [
        getItem("Option 1", "1"),
        getItem("Option 2", "2"),
      ]),
    ]),
    getItem("Log in", "sub4", null),
  ];

  return (
    <Header
      className="container-padding"
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        height: "70px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "20px", paddingBottom: "10px" }}>
          <img
            width="auto"
            height="40px"
            src={"/Shopify-Logo.png"}
            alt="logo"
          />
        </div>
        {/* Menu */}

        <div className="menu-mobile">
          <MenuOutlined />
        </div>

        <Row style={{ width: "100%" }} className="head-menu">
          <Col xs={12} style={{ alignSelf: "center" }}>
            <Menu
              style={{ color: "#ffffff", fontSize: 18 }}
              mode="horizontal"
              items={itemsOne}
              selectable={false}
            />
          </Col>
          <Col xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Menu
                style={{ color: "#ffffff", fontSize: 18, paddingRight: 20 }}
                mode="horizontal"
                items={itemsTwo}
                selectable={false}
              />
              <Button size="large" type="primary">
                Start free trail
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Header>
  );
}
