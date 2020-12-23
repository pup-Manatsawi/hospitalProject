import React, { useState } from "react";
import { Row, Col, Button, Input, Layout, Menu, Upload, message } from "antd";
import {
  UserOutlined,
  FormOutlined,
  PrinterOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./ThirdState.css";
import SubMenu from "antd/lib/menu/SubMenu";
import MenuBar from "../../menu/MenuBar";
import axios from "../../../config/axios";
import { useHistory } from "react-router-dom";

function ThirdState(props) {
  const { Header, Content, Sider } = Layout;
  const { TextArea } = Input;
  const history = useHistory();

  const [lungsXray, setLungsXray] = useState("");

  const onFinish = (values) => {
    const data = {
      lungs_xray: lungsXray,
      patient_id: props.inputHN,
    };

    axios.post("/health-checks", data).then((res) => {
      props.setInputHN("");
      history.push("/");
    });
  };

  const propsA = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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
                ฐานที่ 3
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

            {/* ผลการตรวจ */}
            <Row justify="center">
              <Col style={{ margin: "2rem" }}>
                <TextArea
                  value={lungsXray}
                  onChange={(e) => setLungsXray(e.target.value)}
                  placeholder="ผลการตรวจวินิจฉัย"
                  style={{
                    width: "30rem",
                    height: "10rem",
                    fontStyle: "italic",
                  }}
                />
              </Col>
            </Row>

            {/* Upload */}
            {/* <Row justify="center">
                     <Col style={{ margin: "1rem" }}>
                        <Upload {...propsA}>
                           <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                     </Col>
                  </Row> */}

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
export default ThirdState;
