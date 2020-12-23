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
} from "@ant-design/icons";
import "./FourthStateLungs.css";
import SubMenu from "antd/lib/menu/SubMenu";
import MenuBar from "../../menu/MenuBar";
import axios from "../../../config/axios";
import { useHistory } from "react-router-dom";

function onChange(value) {
  console.log("changed", value);
}

function FourthStateLungs(props) {
  const { Header, Content, Sider } = Layout;
  const { TextArea } = Input;
  // FVC
  const [FVC_MEAS, setFVC_MEAS] = useState(0);
  const [FVC_PRED, setFVC_PRED] = useState(0);
  const [FVC_PERCENT_PRED, setFVC_PERCENT_PRED] = useState(0);
  // FVC1
  const [FVC1_MEAS, setFVC1_MEAS] = useState(0);
  const [FVC1_PRED, setFVC1_PRED] = useState(0);
  const [FVC1_PERCENT_PRED, setFVC1_PERCENT_PRED] = useState(0);
  // FVC/FVC1
  const [FVC_and_FVC1_MEAS, setFVC_and_FVC1_MEAS] = useState(0);
  // Result
  const [lungsResult, setLungsResult] = useState("");
  const history = useHistory();

  const onFinish = () => {
    const data = {
      // FVC
      FVC_MEAS: FVC_MEAS,
      FVC_PRED: FVC_PRED,
      FVC_PERCENT_PRED: FVC_PERCENT_PRED,
      // FVC1
      FVC1_MEAS: FVC1_MEAS,
      FVC1_PRED: FVC1_PRED,
      FVC1_PERCENT_PRED: FVC1_PERCENT_PRED,
      // FVC/FVC1
      FVC_and_FVC1_MEAS: FVC_and_FVC1_MEAS,
      // Result
      lungs_result: lungsResult,
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
                การทดสอบปอด
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

            {/* FVC */}
            <Row
              style={{
                marginTop: "2rem",
                fontSize: "1.25rem",
              }}
            >
              {/* FVC */}
              <Col span={12}>
                {" "}
                FVC
                <Row>
                  <Col span={6}> MEAS </Col>
                  <Col span={6}>
                    <InputNumber
                      value={FVC_MEAS}
                      onChange={(value) => setFVC_MEAS(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}> PRED. </Col>
                  <Col span={6}>
                    <InputNumber
                      value={FVC_PRED}
                      onChange={(value) => setFVC_PRED(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}> %PRED </Col>
                  <Col span={6}>
                    <InputNumber
                      value={FVC_PERCENT_PRED}
                      onChange={(value) => setFVC_PERCENT_PRED(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
              </Col>

              {/* FVC 1 */}
              <Col span={12}>
                {" "}
                FVC 1
                <Row>
                  <Col span={6}> MEAS </Col>
                  <Col span={6}>
                    <InputNumber
                      value={FVC1_MEAS}
                      onChange={(value) => setFVC1_MEAS(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}> PRED. </Col>
                  <Col span={6}>
                    <InputNumber
                      value={FVC1_PRED}
                      onChange={(value) => setFVC1_PRED(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}> %PRED </Col>
                  <Col span={6}>
                    <InputNumber
                      value={FVC1_PERCENT_PRED}
                      onChange={(value) => setFVC1_PERCENT_PRED(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider />

            {/* FVC / FVC 1 */}
            <Row
              style={{
                marginTop: "2rem",
                fontSize: "1.25rem",
              }}
            >
              <Col span={12}>
                {" "}
                FVC / FVC 1
                <Row>
                  <Col span={6}> MEAS </Col>
                  <Col span={6}>
                    <InputNumber
                      value={FVC_and_FVC1_MEAS}
                      onChange={(value) => setFVC_and_FVC1_MEAS(value)}
                      min={1}
                      max={100000}
                      defaultValue={1}
                    />
                  </Col>
                </Row>
              </Col>

              {/* สรุปผลการตรวจ */}
              <Col span={12}>
                <Row> สรุปผลการตรวจ </Row>
                <Row style={{ margin: "2rem" }}>
                  <TextArea
                    value={lungsResult}
                    onChange={(e) => setLungsResult(e.target.value)}
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
export default FourthStateLungs;
