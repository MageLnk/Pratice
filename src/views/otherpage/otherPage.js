import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';

const OtherPage = props => {
    return (
        <Row>
            <Col>
                <p>Esto es un texto al peo que pongo para probar la wea o k ase</p>
            </Col>
            <Col>
                <Link to='/'>
                    <Button>
                        Home
                    </Button>
                </Link>
            </Col>
        </Row>
    );
}

export default OtherPage;
