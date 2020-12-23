import React, { useState } from "react";
import "./FourthStateEyes.css";
import { Button, Col, Input, Layout, Menu, message, Row, Upload } from "antd";

import MenuBar from "../../menu/MenuBar";
import axios from "../../../config/axios";
import { useHistory } from "react-router-dom";

function FourthStateEyes(props) {
  const { Header, Content, Footer, Sider } = Layout;
  const [muscles, setMuscles] = useState("");
  const [farVision, setFarVision] = useState("");
  const [farVisionLeft, setFarVisionLeft] = useState("");
  const [farVisionRight, setFarVisionRight] = useState("");
  const [farDepthPerception, setFarDepthPerception] = useState("");
  const [colorVision, setColorVision] = useState("");
  const [farVertical, setFarVertical] = useState("");
  const [farLateral, setFarLateral] = useState("");
  const [nearVision, setNearVision] = useState("");
  const [nearVisionLeft, setNearVisionLeft] = useState("");
  const [nearVisionRight, setNearVisionRight] = useState("");
  const [visualField, setVisualField] = useState("");
  const [nearLateral, setNearLateral] = useState("");
  const history = useHistory();

  const onFinish = () => {
    const data = {
      muscles: muscles,
      far_vision: farVision,
      far_vision_left: farVisionLeft,
      far_vision_right: farVisionRight,
      far_depth_perception: farDepthPerception,
      color_vision: colorVision,
      far_vertical: farVertical,
      far_lateral: farLateral,
      near_vision: nearVision,
      near_vision_left: nearVisionLeft,
      near_vision_right: nearVisionRight,
      near_lateral: nearLateral,
      visual_field: visualField,
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
                ฐานที่ 4
              </Col>
            </Row>
            <Row
              justify="center"
              style={{ marginTop: "50px", fontSize: "30px" }}
            >
              การทดสอบสายตา
            </Row>
            <Row justify="left"></Row>
            <Row justify="left" style={{ padding: "20px" }}>
              {/* <Row>
                <Col span={4}>หมายเลข HN :</Col>
                <Col span={2}>{props.inputHN}</Col>
              </Row> */}
              <Col style={{ textAlign: "left", fontSize: "20px" }}>
                ระยะไกล :
              </Col>
            </Row>
            <Row justify="left" style={{ marginTop: "50px" }}>
              <Col span={5} style={{ marginRight: "10px", paddingTop: "2px" }}>
                การทำงานของกล้ามเนื้อ :
              </Col>
              <Col span={5} style={{ marginRight: "10px" }}>
                <Input
                  value={muscles}
                  onChange={(e) => setMuscles(e.target.value)}
                  placeholder="การทำงานของกล้ามเนื้อ"
                />
              </Col>
              <Col span={5} style={{ marginRight: "10px", paddingTop: "2px" }}>
                การมองเห็นภาพระยะไกล :
              </Col>
              <Col span={5} style={{ marginRight: "10px" }}>
                <Input
                  value={farVision}
                  onChange={(e) => setFarVision(e.target.value)}
                  placeholder=" การมองเห็นภาพระยะไกล"
                />
              </Col>
            </Row>
            <Row justify="left" style={{ marginTop: "50px" }}>
              <Col span={5} style={{ marginRight: "5px", paddingTop: "2px" }}>
                ( การมองเห็นภาพระยะไกล )
              </Col>

              <Col span={1} style={{ marginRight: "5px", paddingTop: "2px" }}>
                ซ้าย :
              </Col>
              <Col span={5} style={{ marginRight: "5px" }}>
                <Input
                  value={farVisionLeft}
                  onChange={(e) => setFarVisionLeft(e.target.value)}
                  placeholder=" ซ้าย"
                />
              </Col>
              <Col span={1} style={{ marginRight: "5px", paddingTop: "2px" }}>
                ขวา :
              </Col>
              <Col span={5} style={{ marginRight: "5px" }}>
                <Input
                  value={farVisionRight}
                  onChange={(e) => setFarVisionRight(e.target.value)}
                  placeholder=" ขวา"
                />
              </Col>
            </Row>
            <Row justify="left" style={{ marginTop: "50px" }}>
              <Col span={5} style={{ marginRight: "10px", paddingTop: "2px" }}>
                การมองเห็นภาพชัดลึก :
              </Col>
              <Col span={5} style={{ marginRight: "10px" }}>
                <Input
                  value={farDepthPerception}
                  onChange={(e) => setFarDepthPerception(e.target.value)}
                  placeholder="การมองเห็นภาพชัดลึก"
                />
              </Col>
              <Col span={5} style={{ marginRight: "10px", paddingTop: "2px" }}>
                การมองเห็นสี :
              </Col>
              <Col span={5} style={{ marginRight: "10px" }}>
                <Input
                  value={colorVision}
                  onChange={(e) => setColorVision(e.target.value)}
                  placeholder=" การมองเห็นสี"
                />
              </Col>
            </Row>

            <Row justify="left" style={{ marginTop: "50px" }}>
              <Col span={5} style={{ marginRight: "5px", paddingTop: "2px" }}>
                สมดุลตา :
              </Col>

              <Col span={5} style={{ marginRight: "5px" }}>
                <Input
                  value={farVertical}
                  onChange={(e) => setFarVertical(e.target.value)}
                  placeholder=" แนวดิ่ง"
                />
              </Col>

              <Col span={5} style={{ marginRight: "5px" }}>
                <Input
                  value={farLateral}
                  onChange={(e) => setFarLateral(e.target.value)}
                  placeholder=" แนวนอน"
                />
              </Col>
            </Row>
            <Row justify="left" style={{ padding: "20px" }}>
              <Col style={{ textAlign: "left", fontSize: "20px" }}>
                ระยะใกล้ :
              </Col>
            </Row>
            <Row justify="left" style={{ marginTop: "50px" }}>
              <Col span={5} style={{ marginRight: "10px", paddingTop: "2px" }}>
                การมองเห็นภาพระยะใกล้ :
              </Col>
              <Col span={5} style={{ marginRight: "10px" }}>
                <Input
                  value={nearVision}
                  onChange={(e) => setNearVision(e.target.value)}
                  placeholder=" การมองเห็นภาพระยะใกล้"
                />
              </Col>
            </Row>
            <Row justify="left" style={{ marginTop: "50px" }}>
              <Col span={5} style={{ marginRight: "5px", paddingTop: "2px" }}>
                ( การมองเห็นภาพระยะใกล้ )
              </Col>

              <Col span={1} style={{ marginRight: "5px", paddingTop: "2px" }}>
                ซ้าย :
              </Col>
              <Col span={5} style={{ marginRight: "5px" }}>
                <Input
                  value={nearVisionLeft}
                  onChange={(e) => setNearVisionLeft(e.target.value)}
                  placeholder=" ซ้าย"
                />
              </Col>
              <Col span={1} style={{ marginRight: "5px", paddingTop: "2px" }}>
                ขวา :
              </Col>
              <Col span={5} style={{ marginRight: "5px" }}>
                <Input
                  value={nearVisionRight}
                  onChange={(e) => setNearVisionRight(e.target.value)}
                  placeholder=" ขวา"
                />
              </Col>
            </Row>

            <Row justify="left" style={{ marginTop: "50px" }}>
              <Col span={5} style={{ marginRight: "5px", paddingTop: "2px" }}>
                สมดุลตา :
              </Col>

              <Col span={5} style={{ marginRight: "5px" }}>
                <Input
                  value={nearLateral}
                  onChange={(e) => setNearLateral(e.target.value)}
                  placeholder=" แนวนอน"
                />
              </Col>
            </Row>
            <Row justify="left" style={{ marginTop: "50px" }}>
              <Col span={5} style={{ marginRight: "5px", paddingTop: "2px" }}>
                ตรวจลาน :
              </Col>

              <Col span={5} style={{ marginRight: "5px" }}>
                <Input
                  value={visualField}
                  onChange={(e) => setVisualField(e.target.value)}
                  placeholder=" ตรวจลาน"
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

export default FourthStateEyes;
