import React, { useState } from "react";
import "./FifthState.css";
import { Button, Col, Input, Layout, Menu, message, Row, Upload } from "antd";
import MenuBar from "../../menu/MenuBar";
import axios from "../../../config/axios";
import { useHistory } from "react-router-dom";

const { TextArea } = Input;
const { SubMenu } = Menu;
function FifthState(props) {
  const { Header, Content, Footer, Sider } = Layout;
  const [diagnose, setDiagnose] = useState("");
  const history = useHistory();

  const onFinish = () => {
    const data = {
      diagnose: diagnose,
      patient_id: props.inputHN,
    };

    axios.post("/health-checks", data).then((res) => {
      props.setInputHN("");
      history.push("/");
    });
  };

  return (
    <Layout>
      <MenuBar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ backgroundColor: "#D187FF", padding: 0 }}>
          <Row className="RowLogo" justify="right">
            <Col>
              <img
                style={{ maxHeight: "55px", margin: "2px" }}
                src="http://dnrh.go.th/v4/asset/img/logo_green.png"
                alt="logo"
              />
            </Col>
            <Col style={{ marginRight: "16px" }} span={12}>
              หมายเลข HN :{props.inputHN}
            </Col>
          </Row>
        </Header>

        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 10, textAlign: "right" }}>
            <Row justify="center">
              <Col
                style={{
                  backgroundColor: "#D187FF",
                  width: "9rem",
                  height: "3rem",
                  borderRadius: "20rem",
                  textAlign: "center",
                  padding: "0",
                  fontSize: "1.5rem",
                }}
              >
                ฐานที่ 5
              </Col>
            </Row>
            <Row style={{ marginTop: "50px" }}></Row>
            <Row justify="left" style={{ padding: "20px" }}>
              <Col style={{ textAlign: "left", fontSize: "20px" }}>
                พบแพทย์ :
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <TextArea
                  value={diagnose}
                  onChange={(e) => setDiagnose(e.target.value)}
                  rows={12}
                  cols={20}
                />
              </Col>
            </Row>

            <Row
              justify="center"
              style={{
                marginTop: "5rem",
              }}
            >
              <Col span={6}>
                <Button
                  style={{
                    backgroundColor: "#5F0099",
                    borderColor: "#5F0099",
                    fontSize: "20px",
                    width: "15rem",
                    height: "3rem",
                    boxShadow: "0px 0px 18px -8px #555555",
                    marginRight: "40px",
                  }}
                  type="primary"
                  shape="round"
                  onClick={onFinish}
                >
                  Save
                </Button>
              </Col>
              <Col span={6}>
                <Button
                  style={{
                    backgroundColor: "#979797",
                    borderColor: "#979797",
                    fontSize: "20px",
                    width: "15rem",
                    height: "3rem",
                    boxShadow: "0px 0px 18px -8px #555555",
                  }}
                  type="primary"
                  shape="round"
                  onClick={() => {
                    props.setInputHN("");
                    history.push("/");
                  }}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
}

export default FifthState;
