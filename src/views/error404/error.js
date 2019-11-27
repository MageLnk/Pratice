import React from 'react';
import { Row, Col } from 'antd';

const Error = props => {
    return (
        <Row>
            <Col span={6} offset={6}>
                <h1>Error 404!</h1>
            </Col>
        </Row>
    );
}

export default Error;
