import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../store/AdminSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNavBar from "../UI/AdminNavBar";
import './AdminLoginPage.css';

function AdminLoginForm() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendRequest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post("http://localhost:3000/api/admin/sign-in", {
          email: email,
          password: password,
        });
      const data = res.data;
      window.alert("logged in successfully");
      dispatch(AuthActions.login(data.admin.name));
      history('/admin/home');
    }
    catch (err) {
      window.alert("invalid credentials!");
      history('/admin');
    }
  };

  return (<>
    <AdminNavBar />
    <Form className='form-style' onSubmit={sendRequest}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-label'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-label'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
          onChange={(p) => setPassword(p.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  </>);
}

export default AdminLoginForm;