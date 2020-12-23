import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Col, Layout, Menu, Row } from 'antd';
import axios from "../../../config/axios"
import MenuBar from '../../menu/MenuBar';

function Profile(props) {
  const { Header, Content, Footer, Sider } = Layout;
  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo)
  useEffect(() => {
    axios.get(`/patients/${props.inputHN}`)
      .then((res) => {
        setUserInfo(res.data)
      })
  }, [])

  return (
    <Layout>
      <MenuBar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ backgroundColor: "#D187FF", padding: 0, }} >
          <Row className="RowLogo" justify="right">
            <Col>
              <img style={{ maxHeight: "55px", margin: "2px" }}
                src="http://dnrh.go.th/v4/asset/img/logo_green.png" alt="logo" />
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 40, textAlign: 'right' }}>
            <Row>
              <Col span={4}>
                หมายเลข HN :
         </Col>
              <Col span={2}>
                {props.inputHN}
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                วัน/เดือน/ปี :
         </Col>
              <Col span={2}>
                {userInfo.brithday}
              </Col>
             
            </Row>
            <Row>
              <Col span={4}>
                บริษัท :
         </Col>
              <Col span={2}>
              {userInfo.company}
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                แผนก :
         </Col>
              <Col span={2}>
              {userInfo.department}
              </Col>
              <Col span={2}>
                ตำแหน่ง :
         </Col>
              <Col span={4}>
              {userInfo.position}
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                เลขที่บัตรประชาชน :
         </Col>
              <Col span={4}>
              {userInfo.id_card}
              </Col>

            </Row>
            <Row>
              <Col span={4}>
                สัญชาติ :
         </Col>
              <Col span={2}>
              {userInfo.nationality}
              </Col>
              <Col span={2}>
                เชื้อชาติ :
         </Col>
              <Col span={2}>
              {userInfo.race}
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                คำนำหน้าชื่อ :
         </Col>
              <Col span={1}>
              {userInfo.title}
              </Col>
              <Col span={2}>
                ชื่อ :
         </Col>
              <Col span={2}>
              {userInfo.first_name}
              </Col>
              <Col span={2}>
                นามสกุล :
         </Col>
              <Col span={2}>
              {userInfo.last_name}
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                วัน/เดือน/ปี(เกิด) :
         </Col>
              {/* <Col span={2}>
              {userInfo.brithday}
              </Col>
              <Col span={2}>
                อายุ :
         </Col>
              <Col span={2}>
                ปี
         </Col> */}
            </Row>
            <Row>
              <Col span={4}>
                เพศ :
         </Col>
              <Col span={2}>
              {userInfo.gender}
              </Col>
              <Col span={2}>
                กรุ๊ปเลือด :
         </Col>
              <Col span={0.5}>
              {userInfo.blood_type}
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                เบอร์โทรศัพท์ :
         </Col>
              <Col span={2}>
              {userInfo.phone_number}
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                เบอร์โทรศัพท์ฉุกเฉิน :
         </Col>
              <Col span={2}>
              {userInfo.emergency_contact}
              </Col>
            </Row>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  )

}

export default Profile
