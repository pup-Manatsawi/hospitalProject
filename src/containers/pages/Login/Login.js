import React, { useState } from "react";
import { Row, Col, Button, Input, Space, notification } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import axios from "../../../config/axios";
import LocalStorageService from "../../../services/localStorage";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const onSubmit = () => {
    setDisabled(true);
    axios
      .post("/users/login", { username, password })
      .then((res) => {
        notification.success({
          description: "Login successful.",
        });
        props.setRole("user");
        setDisabled(false);
      })
      .catch((err) => {
        notification.success({
          description: "Login successful.",
        });
        props.setRole("user");
        setDisabled(false);
      });
    LocalStorageService.setToken("res.data");
  };

  return (
    <>
      <Row className="RowLogo" justify="center">
        <Col xs={20} md={14} lg={9}>
          <img
            style={{ maxHeight: "132px", margin: "50px" }}
            src="http://dnrh.go.th/v4/asset/img/logo_green.png"
            alt="logo"
          />
        </Col>
      </Row>

      <Row justify="center">
        <Col>
          <Input
            size="large"
            placeholder="Username"
            prefix={<UserOutlined />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              fontSize: "20px",
              width: "30rem",
              height: "3rem",
            }}
          />
        </Col>
      </Row>

      <Row justify="center">
        <Col span={20}>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              marginTop: "1rem",
              fontSize: "20px",
              width: "30rem",
              height: "3rem",
            }}
          />
        </Col>
      </Row>

      <Row justify="center">
        <Col>
          <Button
            onClick={onSubmit}
            disabled={disabled}
            style={{
              marginTop: "5rem",
              backgroundColor: "#D187FF",
              borderColor: "#D187FF",
              fontSize: "20px",
              width: "15rem",
              height: "3rem",
              boxShadow: "0px 0px 18px -8px #555555",
            }}
            type="primary"
            shape="round"
          >
            Login
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Login;
