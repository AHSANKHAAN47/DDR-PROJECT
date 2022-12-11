import { useNavigate } from "react-router-dom";
import AdminProtected from "../components/AdminProtected";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AdminLoginPage.css';
import axios from 'axios';
import { useState } from "react";

const DeleteShopPage = (props) => {
    const [email, setEmail] = useState('');
    const history = useNavigate();
    const deleteRequest = async (e) => {
        e.preventDefault();
        //debugger;
        try {
            const res = await axios.post('http://localhost:3000/api/shop/delete-shop', {
                email: email
            });
            const data = res.data.message;
            window.alert(data);
            history('/admin/home');
        }
        catch (err) {
            console.log(err);
        }
    }

    return (<AdminProtected>
        <Form className='form-style' onSubmit={deleteRequest}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='form-label'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Delete
            </Button>
        </Form>
    </AdminProtected>)
}
export default DeleteShopPage;