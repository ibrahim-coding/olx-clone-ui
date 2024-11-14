import React, { useState } from "react";
import "./login.css";
import { Form, Button, Card } from "react-bootstrap";

function Login() {
  const [crud, setCrud] = useState({ email: "", password: "" });
  return (
    <div className="login-container">
      <Card>
        <Card.Body>
          <Form>
            <h4>login</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={crud.email}
                onChange={(e) =>
                  setCrud((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={crud.password}
                onChange={(e) =>
                  setCrud((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
