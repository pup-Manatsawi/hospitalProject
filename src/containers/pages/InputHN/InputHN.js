import React, { useState } from 'react'
import { Row, Col, Button, Input, Divider } from 'antd';
import { Link } from 'react-router-dom';

function InputHN(props) {

   return (
      <>
         {/* Logo */}
         <Row className="RowLogo" justify="center">
            <Col xs={20} md={14} lg={9}>
               <img style={{ maxHeight: "132px", margin: "50px" }}
                  src="http://dnrh.go.th/v4/asset/img/logo_green.png" alt="logo" />
            </Col>
         </Row>

         <Row justify="center">
            <Col>
               <Input placeholder="หมายเลข HN" maxLength={6}
                  value={props.inputHN}
                  onChange={(e) => props.setInputHN(e.target.value)}
                  style={{
                     textAlign: "center",
                     fontSize: "20px",
                     width: "15rem",
                     height: "3rem",
                  }}
               />
            </Col>
         </Row>

         <Row justify="center">
            <Col>
               <Link to="/profile">
                  <Button
                     style={{
                        marginTop: "3rem",
                        backgroundColor: "#D187FF",
                        borderColor: "#D187FF",
                        fontSize: "20px",
                        width: "15rem",
                        height: "3rem",
                        boxShadow: "0px 0px 18px -8px #555555",
                     }}
                     type="primary"
                     shape="round"
                  >Next</Button>
               </Link>
            </Col>
         </Row>

         <Row justify="center">
            <Col span={8}>
               <Divider>Or</Divider>
            </Col>
         </Row>

         <Row justify="center">
            <Col>
               <Button
                  style={{
                     marginTop: "0.5rem",
                     backgroundColor: "#D187FF",
                     borderColor: "#D187FF",
                     fontSize: "20px",
                     width: "15rem",
                     height: "3rem",
                     boxShadow: "0px 0px 18px -8px #555555",
                  }}
                  type="primary"
                  shape="round"
               >QR Code</Button>
            </Col>
         </Row>

      </>
   )
}

export default InputHN
