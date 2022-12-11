import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthActions } from '../store/AdminSlice';
import { BsFillCartFill, BsSearch } from "react-icons/bs";
import '../UI/NavBar.css';
import { Link } from "react-router-dom";

function AdminNavBar() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const history = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = async () => {
        const res = await axios.post('http://localhost:3000/api/admin/logout', {
            withCredentials: true
        });
        if (res.status === 200) {
            dispatch(AuthActions.logout());
            history('/admin');
            window.alert("successfull logout");
        }
    }
    return (
        <>
            <div className='AnnouncementContainer'>
                Super Offers. Shop for frames now!
            </div>
            <div className='Container'>
                <div className='Wrapper'>
                    <div className='Left'>
                        <span className='Language'>EN</span>
                        <div className='SearchContainer'>
                            <input></input>
                            <BsSearch />
                        </div>
                    </div>
                    <div className='Center'>
                        <h1 className='logo'>EyeWear.pk</h1>
                    </div>
                    <div className='Right'>
                        {!isLoggedIn && <div className='MenuItem'><Link to='/home'>Home</Link></div>}
                        {isLoggedIn && <div className='MenuItem'><Link to='/admin' onClick={logoutHandler}>LogOut</Link></div>}
                        <div className='MenuItem'>
                            <BsFillCartFill />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminNavBar;