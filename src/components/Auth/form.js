import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from 'formik';

import {useAuth} from '../../contexts/AuthContext'

const Example = (props) => {
  // const
  return (
    <>
      <Formik
        initialValues={{}}
        // onSubmit={}
        render={({values, handleChange}) => (
          <form>
            <Row form>
              <Col sm={12}>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input type="email" placeholder="Email" value={values.email} name="email" onChange={handleChange}/>
                </FormGroup>
              </Col>
              <Col sm={12}>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                </FormGroup>
              </Col>
              <Col sm={12}>
                <FormGroup>
                  <Label for="Re-Password">Password</Label>
                  <Input type="password" name="passwordConfirm" placeholder="Password confirmation" onChange={handleChange}/>
                </FormGroup>
              </Col>
            </Row>
            <Button>Sign in</Button>
            {JSON.stringify(values)}
          </form>
        )}
      />
    </>
  );
}

export default Example;