import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Divider,
  Layout,
  Menu,
  InputNumber,
} from "antd";
import { UserOutlined, FormOutlined, PrinterOutlined } from "@ant-design/icons";
import "./FirstState.css";
import MenuBar from "../../menu/MenuBar";
import axios from "../../../config/axios";
import { useHistory } from "react-router-dom";

function onChange(value) {
  console.log("changed", value);
}

function FirstState(props) {
  const { Header, Content, Sider } = Layout;
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bloodPressure, setBloodPressure] = useState(0);
  const [waist, setWaist] = useState(0);
  const history = useHistory();

  const onFinish = () => {
    const data = {
      weight: weight,
      height: height,
      blood_pressure: bloodPressure,
      waist: waist,
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
        <Header
          className="site-layout-background"
          style={{ backgroundColor: "#D187FF", padding: 0 }}
        >
          <Row className="RowLogo" justify="right">
            <Col>
              <img
                style={{ maxHeight: "55px", margin: "2px" }}
                src="http://dnrh.go.th/v4/asset/img/logo_green.png"
                alt="logo"
              />
            </Col>
          </Row>
        </Header>

        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div style={{ padding: 24, textAlign: "left" }}>
            <Row justify="center">
              <Col
                style={{
                  backgroundColor: "#D187FF",
                  width: "9rem",
                  height: "3rem",
                  borderRadius: "20rem",
                  textAlign: "center",
                  padding: "0.25rem",
                  fontSize: "1.5rem",
                }}
              >
                ฐานที่ 1
              </Col>
            </Row>

            {/* น้ำหนัก */}
            <Row style={{ marginTop: "2rem" }}>
              <Col
                span={8}
                style={{
                  fontSize: "1.25rem",
                  textAlign: "right",
                }}
              >
                น้ำหนัก :
              </Col>
              <Col span={8}>
                <Row justify="center">
                  <InputNumber
                    value={weight}
                    onChange={(value) => setWeight(value)}
                    size="large"
                    min={1}
                    max={100000}
                    defaultValue={1}
                  />
                </Row>
              </Col>
              <Col
                span={8}
                style={{
                  fontSize: "1.25rem",
                  textAlign: "left",
                }}
              >
                กิโลกรัม
              </Col>
            </Row>

            {/* ส่วนสูง */}
            <Row style={{ marginTop: "1rem" }}>
              <Col
                span={8}
                style={{
                  fontSize: "1.25rem",
                  textAlign: "right",
                }}
              >
                ส่วนสูง :
              </Col>
              <Col span={8}>
                <Row justify="center">
                  <InputNumber
                    value={height}
                    onChange={(value) => setHeight(value)}
                    size="large"
                    min={1}
                    max={100000}
                    defaultValue={1}
                  />
                </Row>
              </Col>
              <Col
                span={8}
                style={{
                  fontSize: "1.25rem",
                }}
              >
                เซนติเมตร
              </Col>
            </Row>

            {/* ความดันโลหิต */}
            <Row style={{ marginTop: "1rem" }}>
              <Col
                span={8}
                style={{
                  fontSize: "1.25rem",
                  textAlign: "right",
                }}
              >
                ความดันโลหิต :
              </Col>
              <Col span={8}>
                <Row justify="center">
                  <InputNumber
                    value={bloodPressure}
                    onChange={(value) => setBloodPressure(value)}
                    size="large"
                    min={1}
                    max={100000}
                    defaultValue={1}
                  />
                </Row>
              </Col>
              <Col
                span={8}
                style={{
                  fontSize: "1.25rem",
                }}
              >
                mmHg
              </Col>
            </Row>

            {/* รอบเอว */}
            <Row style={{ marginTop: "1rem" }}>
              <Col
                span={8}
                style={{
                  fontSize: "1.25rem",
                  textAlign: "right",
                }}
              >
                รอบเอว :
              </Col>
              <Col span={8}>
                <Row justify="center">
                  <InputNumber
                    value={waist}
                    onChange={(value) => setWaist(value)}
                    size="large"
                    min={1}
                    max={100000}
                    defaultValue={1}
                  />
                </Row>
              </Col>
              <Col
                span={8}
                style={{
                  fontSize: "1.25rem",
                }}
              >
                เซนติเมตร
              </Col>
            </Row>

            {/* ปุ่ม */}
            <Row
              justify="center"
              style={{
                marginTop: "5rem",
              }}
            >
              <Col span={6}>
                <Button
                  setState
                  style={{
                    backgroundColor: "#5F0099",
                    borderColor: "#5F0099",
                    fontSize: "20px",
                    width: "15rem",
                    height: "3rem",
                    boxShadow: "0px 0px 18px -8px #555555",
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
      </Layout>
    </Layout>
  );
}
export default FirstState;
