import React, { useState } from "react";
import "./SecondState.css";
import { Button, Col, Input, Layout, Menu, message, Row, Upload } from "antd";
import {
  UserOutlined,
  FormOutlined,
  PrinterOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import MenuBar from "../../menu/MenuBar";
import axios from "../../../config/axios";
import { useHistory } from "react-router-dom";

function SecondState(props) {
  const { Header, Content, Footer, Sider } = Layout;
  const [hb, setHb] = useState(0);
  const [hct, setHct] = useState(0);
  const [wbc, setWbc] = useState(0);
  const [neu, setNeu] = useState(0);
  const [lym, setLym] = useState(0);
  const [eo, setEo] = useState(0);
  const [mono, setMono] = useState(0);
  const [baso, setBaso] = useState(0);
  const [rbcMorphology, setRbcMorphology] = useState(0);
  const [pltSmear, setPltSmear] = useState(0);
  const [fbs, setFbs] = useState(0);
  const [uricAcid, setUricAcid] = useState(0);
  const [creatinine, setCreatinine] = useState(0);
  const [bun, setBun] = useState(0);
  const [alkPhos, setAlkPhos] = useState(0);
  const [astSgot, setAstSgot] = useState(0);
  const [altSgpt, setAltSgpt] = useState(0);
  const [ldl, setLdl] = useState(0);
  const [hdl, setHdl] = useState(0);
  const [tg, setTg] = useState(0);
  const [chol, setChol] = useState(0);
  const [platelets, setPlatelets] = useState(0);
  const history = useHistory();

  const onFinish = () => {
    const data = {
      Hb: hb,
      Hct: hct,
      WBC: wbc,
      Neu: neu,
      Lym: lym,
      Eo: eo,
      Mono: mono,
      Baso: baso,
      RBC_Morphology: rbcMorphology,
      Plt_Smear: pltSmear,
      FBS: fbs,
      Uric_acid: uricAcid,
      Creatinine: creatinine,
      BUN: bun,
      Alk_Phos: alkPhos,
      AST_SGOT: astSgot,
      ALT_SGPT: altSgpt,
      LDL: ldl,
      HDL: hdl,
      Tg: tg,
      Chol: chol,
      Platelets: platelets,
      patient_id: props.inputHN,
    };

    axios.post("/health-checks", data).then((res) => {
      props.setInputHN("");
      history.push("/");
    });
  };

  const propsAuth = {
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
                ฐานที่ 2
              </Col>
            </Row>
            <Row style={{ marginTop: "50px" }}></Row>
            <Row justify="center">
              <Col style={{ textAlign: "left", fontSize: "20px" }}>
                ผลเจาะเลือด
              </Col>
            </Row>

            <Row justify="center" style={{ marginTop: "50px" }}>
              <Col span={2} style={{ marginRight: "10px", paddingTop: "2px" }}>
                Hb :
              </Col>
              <Col span={5} style={{ marginRight: "10px" }}>
                <Input
                  value={hb}
                  onChange={(e) => setHb(e.target.value)}
                  placeholder="(12-16.2g/dl)F / (13-18.1g/dl)M"
                />
              </Col>
              <Col span={2} style={{ marginRight: "10px", paddingTop: "2px" }}>
                Hct :
              </Col>
              <Col span={5} style={{ marginRight: "10px" }}>
                <Input
                  value={hct}
                  onChange={(e) => setHct(e.target.value)}
                  placeholder="(36-48)F / (40-53.7%)M"
                />
              </Col>
              <Col span={2} style={{ marginRight: "10px", paddingTop: "2px" }}>
                WBC :
              </Col>
              <Col span={5}>
                <Input
                  value={wbc}
                  onChange={(e) => setWbc(e.target.value)}
                  placeholder="(4-10)10^3/ul"
                />
              </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "50px" }}>
              <Col
                span={1.5}
                style={{ marginRight: "10px", paddingTop: "2px" }}
              >
                %Neu :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={neu}
                  onChange={(e) => setNeu(e.target.value)}
                  placeholder="(40.0-60.0%)"
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                %Lym :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={lym}
                  onChange={(e) => setLym(e.target.value)}
                  placeholder="12.0-44.0%"
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                %Eo :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={eo}
                  onChange={(e) => setEo(e.target.value)}
                  placeholder=" (1.0-5.0%)"
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                %Mono :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={mono}
                  onChange={(e) => setMono(e.target.value)}
                  placeholder="(4.0-8.0%)"
                />
              </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "50px" }}>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                %Baso :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={baso}
                  onChange={(e) => setBaso(e.target.value)}
                  placeholder="(0-1.0%)"
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                RBC Morphology :
              </Col>
              <Col span={3}>
                <Input
                  value={rbcMorphology}
                  onChange={(e) => setRbcMorphology(e.target.value)}
                  placeholder=" "
                />
              </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "50px" }}>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                Plt.Smear :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={pltSmear}
                  onChange={(e) => setPltSmear(e.target.value)}
                  placeholder=""
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                platelets :
              </Col>
              <Col span={3}>
                <Input
                  value={platelets}
                  onChange={(e) => setPlatelets(e.target.value)}
                  placeholder="(140-440)"
                />
              </Col>
            </Row>
            {/* <Row justify="center" style={{ marginTop: "50px" }}>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Col>
            </Row> */}

            <Row justify="center">
              <Col style={{ textAlign: "left", fontSize: "20px" }}>
                ผลเจาะเลือดทางชีวเคมี
              </Col>
            </Row>

            <Row justify="center" style={{ marginTop: "50px" }}>
              <Col span={2} style={{ marginRight: "10px", paddingTop: "2px" }}>
                FBS :
              </Col>
              <Col span={5} style={{ marginRight: "10px" }}>
                <Input
                  value={fbs}
                  onChange={(e) => setFbs(e.target.value)}
                  placeholder="(70-99 mg/dl)"
                />
              </Col>
              <Col span={2} style={{ marginRight: "10px", paddingTop: "2px" }}>
                Chol :
              </Col>
              <Col span={5} style={{ marginRight: "10px" }}>
                <Input
                  value={chol}
                  onChange={(e) => setChol(e.target.value)}
                  placeholder="(<150 mg/ld)"
                />
              </Col>
              <Col span={2} style={{ marginRight: "10px", paddingTop: "2px" }}>
                Tg :
              </Col>
              <Col span={5}>
                <Input
                  value={tg}
                  onChange={(e) => setTg(e.target.value)}
                  placeholder="(<150 mg/dl)"
                />
              </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "50px" }}>
              <Col
                span={1.5}
                style={{ marginRight: "10px", paddingTop: "2px" }}
              >
                HDL :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={hdl}
                  onChange={(e) => setHdl(e.target.value)}
                  placeholder="(>40(M),>50(F)mg/dl)"
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                LDL :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={ldl}
                  onChange={(e) => setLdl(e.target.value)}
                  placeholder="<130 mg/dl"
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                AST(SGOT) :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={astSgot}
                  onChange={(e) => setAstSgot(e.target.value)}
                  placeholder=" (5-34U/L)"
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                ALT(SGPT) :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={altSgpt}
                  onChange={(e) => setAltSgpt(e.target.value)}
                  placeholder="(0-55U/L)"
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                Alk.Phos :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={alkPhos}
                  onChange={(e) => setAlkPhos(e.target.value)}
                  placeholder="(0-55U/L)"
                />
              </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "50px" }}>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                Bun :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={bun}
                  onChange={(e) => setBun(e.target.value)}
                  placeholder=""
                />
              </Col>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                Creatinine :
              </Col>
              <Col span={3}>
                <Input
                  value={creatinine}
                  onChange={(e) => setCreatinine(e.target.value)}
                  placeholder=" "
                />
              </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "50px" }}>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                Uric Acid :
              </Col>
              <Col span={3} style={{ marginRight: "20px" }}>
                <Input
                  value={uricAcid}
                  onChange={(e) => setUricAcid(e.target.value)}
                  placeholder=""
                />
              </Col>
            </Row>
            {/* <Row justify="center" style={{ marginTop: "50px" }}>
              <Col
                span={1.5}
                style={{ marginRight: "20px", paddingTop: "2px" }}
              >
                <Upload {...propsAuth}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Col>
            </Row> */}
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

export default SecondState;
