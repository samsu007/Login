import React from 'react';
import { Col, Button, Form, FormGroup, Input, Card, CardBody } from 'reactstrap';
import './form.css'


export default class Forms extends React.Component {
  render() {
    return (
      <div>
        <Col sm={4}>
        </Col>
        <Col sm={4}>
          <Card id="card">
            <CardBody>
              <Form>
                <h1>Login</h1>
                <FormGroup row id='email'>
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <Input type="email" name="email" id="Email" placeholder="Email" />
                  </Col>
                  <Col sm={1}></Col>
                </FormGroup>
                <FormGroup row id='pass'>
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <Input type="password" name="password" id="Password" placeholder="Password" />
                  </Col>
                  <Col sm={1}></Col>
                </FormGroup>
                <Button color="primary" id="button" size="lg">Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col sm={4}></Col>

      </div>

    );
  }
}