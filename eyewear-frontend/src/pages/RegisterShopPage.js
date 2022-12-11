import AdminProtected from "../components/AdminProtected";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdminNavBar from "../UI/AdminNavBar";

const RegisterShopPage = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const submitShop = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/shop', {
                shopname: name,
                location: location,
                email: email,
                password: password,
                role: "shop-owner"
            });
            const data = res.data;
            window.alert(data.message);
            history('/admin/home');
        }
        catch (err) {
            console.log(err);
        }
    }

    return (<>
        <AdminNavBar />
        <AdminProtected>
            <Form onSubmit={submitShop}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="name" value={name}
                        onChange={(n) => setName(n.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password}
                        onChange={(p) => setPassword(p.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="location" placeholder="location" value={location}
                        onChange={(l) => setLocation(l.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    RegisterShop
                </Button>
            </Form>
        </AdminProtected>
    </>)
}
export default RegisterShopPage;