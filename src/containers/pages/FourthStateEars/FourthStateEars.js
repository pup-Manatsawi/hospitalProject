import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Layout,
  Menu,
  message,
  InputNumber,
  Divider,
} from "antd";
import {
  UserOutlined,
  FormOutlined,
  PrinterOutlined,
  UploadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "./FourthStateEars.css";
import SubMenu from "antd/lib/menu/SubMenu";
import MenuBar from "../../menu/MenuBar";
import axios from "../../../config/axios";
import { useHistory } from "react-router-dom";

function onChange(value) {
  console.log("changed", value);
}

function FourthStateEars(props) {
  const { Header, Content, Sider } = Layout;
  const { TextArea } = Input;
  const history = useHistory();

  // ช่วงความถี่สื่อสาร 500 - 2000 Hz
  const [left500Hz, setLeft500Hz] = useState(0);
  const [left1000Hz, setLeft1000Hz] = useState(0);
  const [left2000Hz, setLeft2000Hz] = useState(0);
  const [right500Hz, setRight500Hz] = useState(0);
  const [right1000Hz, setRight1000Hz] = useState(0);
  const [right2000Hz, setRight2000Hz] = useState(0);
  // ช่วงความถี่สูง 3000 - 8000 Hz
  const [left3000Hz, setLeft3000Hz] = useState(0);
  const [left4000Hz, setLeft4000Hz] = useState(0);
  const [left6000Hz, setLeft6000Hz] = useState(0);
  const [left8000Hz, setLeft8000Hz] = useState(0);
  const [right3000Hz, setRight3000Hz] = useState(0);
  const [right4000Hz, setRight4000Hz] = useState(0);
  const [right6000Hz, setRight6000Hz] = useState(0);
  const [right8000Hz, setRight8000Hz] = useState(0);
  // สรุปผลการตรวจ
  const [leftResult, setLeftResult] = useState(0);
  const [rightResult, setRightResult] = useState(0);

  const onFinish = () => {
    const data = {
      // ช่วงความถี่สื่อสาร 500 - 2000 Hz
      left_500_Hz: left500Hz,
      left_1000_Hz: left1000Hz,
      left_2000_Hz: left2000Hz,
      right_500_Hz: right500Hz,
      right_1000_Hz: right1000Hz,
      right_2000_Hz: right2000Hz,
      // ช่วงความถี่สูง 3000 - 8000 Hz
      left_3000_Hz: left3000Hz,
      left_4000_Hz: left4000Hz,
      left_6000_Hz: left6000Hz,
      left_8000_Hz: left8000Hz,
      right_3000_Hz: right3000Hz,
      right_4000_Hz: right4000Hz,
      right_6000_Hz: right6000Hz,
      right_8000_Hz: right8000Hz,
      // สรุปผลการตรวจ
      left_result: leftResult,
      right_result: rightResult,
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
                ฐานที่ 4
              </Col>
            </Row>

            <Row justify="center">
              <Col
                style={{
                  fontSize: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                การทดสอบหู
              </Col>
            </Row>

            {/* ข้อมูลพื้นฐาน */}
            {/* <Row justify="center"
                     style={{
                        marginTop: "2rem",
                        fontSize: "1.50rem",
                        textAlign: "center"
                     }}> นภัสนันท์ คำทะเนตร </Row>
                  <Row style={{
                     fontSize: "1.25rem",
                     textAlign: "center"
                  }}>
                     <Col span={6}>
                        น้ำหนัก
                        48
                        กิโลกรัม
                     </Col>

                     <Col span={6}>
                        ส่วนสูง
                        158
                        เซนติเมตร
                     </Col>

                     <Col span={6}>
                        ความดันโลหิต
                        89
                        mmHg
                     </Col>

                     <Col span={6}>
                        รอบเอว
                        70
                        เซนติเมตร
                     </Col>
                  </Row> */}

            {/* ช่วงความถี่สื่อสาร 500 - 2000 Hz */}
            <Row
              style={{
                marginTop: "2rem",
                fontSize: "1.25rem",
              }}
            >
              {/* หูซ้าย */}
              <Col span={12}>
                {" "}
                หูซ้าย
                <Row> ช่วงความถี่สื่อสาร 500 - 2000 Hz </Row>
                <Row>
                  <Col span={6}> 500 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={left500Hz}
                      onChange={(value) => setLeft500Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}> 1000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={left1000Hz}
                      onChange={(value) => setLeft1000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}> 2000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={left2000Hz}
                      onChange={(value) => setLeft2000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
              </Col>

              {/* หูขวา */}
              <Col span={12}>
                {" "}
                หูขวา
                <Row> ช่วงความถี่สื่อสาร 500 - 2000 Hz </Row>
                <Row>
                  <Col span={6}> 500 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={right500Hz}
                      onChange={(value) => setRight500Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}> 1000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={right1000Hz}
                      onChange={(value) => setRight1000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}> 2000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={right2000Hz}
                      onChange={(value) => setRight2000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* ช่วงความถี่สูง 3000 - 8000 Hz */}
            <Row
              style={{
                marginTop: "2rem",
                fontSize: "1.25rem",
              }}
            >
              {/* หูซ้าย */}
              <Col span={12}>
                <Row> ช่วงความถี่สูง 3000 - 8000 Hz </Row>

                <Row>
                  <Col span={6}> 3000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={left3000Hz}
                      onChange={(value) => setLeft3000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col span={6}> 4000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={left4000Hz}
                      onChange={(value) => setLeft4000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col span={6}> 6000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={left6000Hz}
                      onChange={(value) => setLeft6000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col span={6}> 8000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={left8000Hz}
                      onChange={(value) => setLeft8000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
              </Col>

              {/* หูขวา */}
              <Col span={12}>
                <Row> ช่วงความถี่สูง 3000 - 8000 Hz </Row>

                <Row>
                  <Col span={6}> 3000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={right3000Hz}
                      onChange={(value) => setRight3000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col span={6}> 4000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={right4000Hz}
                      onChange={(value) => setRight4000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col span={6}> 6000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={right6000Hz}
                      onChange={(value) => setRight6000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col span={6}> 8000 Hz (&le; 25) </Col>
                  <Col span={6}>
                    <InputNumber
                      value={right8000Hz}
                      onChange={(value) => setRight8000Hz(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
              </Col>
              <Divider />

              {/* สรุปผลการตรวจ */}
              <Col span={12}>
                <Row> สรุปผลการตรวจ </Row>
                <Row> หูซ้าย </Row>
                <Row style={{ margin: "2rem" }}>
                  <TextArea
                    value={leftResult}
                    onChange={(e) => setLeftResult(e.target.value)}
                    placeholder="ผลการตรวจวินิจฉัย"
                    style={{
                      width: "30rem",
                      height: "10rem",
                      fontStyle: "italic",
                    }}
                  />
                </Row>
              </Col>

              <Col span={12}>
                <Row> สรุปผลการตรวจ </Row>
                <Row> หูขวา </Row>
                <Row style={{ margin: "2rem" }}>
                  <TextArea
                    value={rightResult}
                    onChange={(e) => setRightResult(e.target.value)}
                    placeholder="ผลการตรวจวินิจฉัย"
                    style={{
                      width: "30rem",
                      height: "10rem",
                      fontStyle: "italic",
                    }}
                  />
                </Row>
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
export default FourthStateEars;
