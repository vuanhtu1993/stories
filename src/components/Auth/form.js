import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <Row form>
        <Col sm={12}>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
        </Col>
        <Col sm={12}>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
        </Col>
        <Col sm={12}>
          <FormGroup>
            <Label for="Re-Password">Password</Label>
            <Input type="password" name="password-confirm" id="password-confirm" placeholder="Password confirmation" />
          </FormGroup>
        </Col>
      </Row>

      <Button>Sign in</Button>
    </Form>
  );
}

export default Example;