import { Menu, Layout } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import {
    UserOutlined,
    FormOutlined,
    PrinterOutlined,
} from '@ant-design/icons'

const { Sider } = Layout;

function MenuBar() {
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                backgroundColor: '#D187FF'
            }}
        >
            <div className="logo" />
            <Menu className="test" theme="dark" mode="inline">
                <Menu.Item className="test" key="1" icon={<UserOutlined />}>
                    <Link to="/profile"><span>profile</span></Link>
                </Menu.Item>
                <Menu.Item className="test" key="2" icon={<FormOutlined />}>
                    <Link to="/first-state">ฐานที่ 1</Link>
                </Menu.Item>
                <Menu.Item className="test" key="3" icon={<FormOutlined />}>
                    <Link to="/second-state"> ฐานที่ 2</Link>
                </Menu.Item>
                <Menu.Item className="test" key="4" icon={<FormOutlined />}>
                    <Link to="/third-state">ฐานที่ 3</Link>
                </Menu.Item>
                <Menu.SubMenu key="sub1" icon={<FormOutlined />} title="ฐานที่ 4">
                    <Menu.Item key="4.1"> <Link to="/fourth-state-eyes">ตา</Link></Menu.Item>
                    <Menu.Item key="4.2"><Link to="/fourth-state-ears">หู</Link></Menu.Item>
                    <Menu.Item key="4.3"><Link to="/fourth-state-lungs">ปอด</Link></Menu.Item>
                </Menu.SubMenu>
                <Menu.Item className="test" key="6" icon={<FormOutlined />}>
                    <Link to="/fifth-state">ฐานที่ 5</Link>
                </Menu.Item>
                <Menu.Item className="test" key="7" icon={<PrinterOutlined />}>
                    Report
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default MenuBar
