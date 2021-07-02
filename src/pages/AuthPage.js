import React from 'react';
import { Card, Col, Row } from 'reactstrap';

import { STATE_LOGIN } from '../components/Auth/AuthForm.js';
import Signup from '../components/Auth/Signup';

class AuthPage extends React.Component {
  handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/signup');
    }
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Signup/>
        </Col>
      </Row>
    );
  }
}

export default AuthPage;
