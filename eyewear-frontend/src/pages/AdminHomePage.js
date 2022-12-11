import axios from "axios";
import AdminProtected from "../components/AdminProtected";
//import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../UI/AdminNavBar";
import './AdminHomePage.css';

axios.defaults.withCredentials = true;
const AdminHomePage = () => {
    //const user_name = useSelector(state => state.name);
    const history = useNavigate();

    const addShopHandler = (e) => {
        history('/admin/home/register-shop');
    }

    const viewShopHandler = (e) => {
        history('/admin/home/view-shop');
    }
    const deleteShopHandler = (e) => {
        history('/admin/home/delete-shop');
    }
    return (<>
        <AdminNavBar />
        <AdminProtected>
            {/* <h1>{"Hello " + user_name}</h1> */}
            <div className="buttons">
                <div className="button"><Button variant="primary" size="lg" onClick={addShopHandler}>Add a shop</Button></div>
                <div className="button"><Button variant="success" size="lg" onClick={viewShopHandler}>View shops</Button></div>
                <div className="button"><Button variant="success" size="lg" onClick={deleteShopHandler}>Delete Shop</Button></div>
            </div>
        </AdminProtected>
    </>);
}
export default AdminHomePage;