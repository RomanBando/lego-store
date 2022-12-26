import { useContext, useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import UserContext from "../context/UserContext";


export default function SignIn() {
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);
  const [validated, setValidated] = useState(false);

  const  handleSubmit = async (event) => {
    const form = event.currentTarget;
    const data = new FormData(form);
    event.preventDefault();
    
    if (form.checkValidity() === true) {
      const res = await api.post('/users/signin', Object.fromEntries(data.entries()));
      setUser(res.data);
      navigate('/');
    };

     setValidated(true);
  };



  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" name="email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
    </Form>
  );
}