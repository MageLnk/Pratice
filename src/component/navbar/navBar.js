import React from 'react';
import { Row, Col } from 'antd';

const NavBar = props => {
    return (
        <Row>
            <Col span={2} offset={4}>
                <h1>Bienvenido</h1>
            </Col>
        </Row>
    );
}

export default NavBar;
