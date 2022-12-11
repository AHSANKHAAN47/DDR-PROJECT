import { BsFillCartFill, BsSearch } from "react-icons/bs";
import '../UI/NavBar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
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
                        <div className='MenuItem'><Link to="/admin">Admin</Link></div>
                        <div className='MenuItem'><Link to="/shop-owner">ShopOwner</Link></div>
                        <div className='MenuItem'>
                            <BsFillCartFill />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;