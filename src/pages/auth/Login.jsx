import React, { useState } from "react";
import "./login.css";
import { Form, Button, Card } from "react-bootstrap";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { Navigate } from "react-router-dom";

function Login() {
  const [crud, setCrud] = useState({ email: "", password: "" });

  const user = JSON.parse(localStorage.getItem("auth"));

  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      let res = await login(crud).unwrap();

      dispatch(setUser({ user: res.user, token: res.accessToken }));
      localStorage.setItem(
        "auth",
        JSON.stringify({ user: res.user, token: res.accessToken })
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (user) return <Navigate to="/" />;

  return (
    <div className="login-container">
      <Card>
        <Card.Body>
          <Form onSubmit={onSubmit}>
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
