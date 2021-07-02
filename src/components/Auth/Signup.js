import React from 'react';

import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,
  Row, Col, Button
} from 'reactstrap';

const Signup = () => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Sign up</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">System only support connect by google</CardSubtitle>
        </CardBody>
        <CardBody>
          <Row>
            <Col sm={6}>
              <Button>Google</Button>
            </Col>
            <Col sm={6}>
              <Button>Facebook</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              Github
            </Col>
            <Col sm={3}>
              Linken
            </Col>
            <Col sm={3}>
              Telegram
            </Col>
            <Col sm={3}>
              Yahoo
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}
export default Signup