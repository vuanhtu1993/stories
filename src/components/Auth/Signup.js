import React, {useState} from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,
  Row, Col, Button, NavItem, Nav,
  NavLink, TabContent, TabPane
} from 'reactstrap';
import classnames from 'classnames';
import styled, {withTheme} from 'styled-components';

import SignupForm from './form'
import styles from './style.module.scss'

const TabWrapper = styled.div`
  padding: 1rem 0 1rem 0;
`

const NavItemWrapper = styled(NavItem)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  a {
    border: none;
    &:hover {
      border: none;
      cursor: pointer;
    }
    &.active {
      border: none;
      color: ${prop => prop.theme.primary}!important;
    }
  }
`

const Signup = ({theme}) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <>
      <Nav tabs>
        <NavItemWrapper theme={theme}>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Social media
          </NavLink>
        </NavItemWrapper>
        <NavItemWrapper>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Email
          </NavLink>
        </NavItemWrapper>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <TabWrapper>
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
          </TabWrapper>
        </TabPane>
        <TabPane tabId="2">
          <TabWrapper>
            <SignupForm/>
          </TabWrapper>
        </TabPane>
      </TabContent>
    </>
  )
}
export default withTheme(Signup)