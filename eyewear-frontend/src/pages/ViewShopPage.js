import AdminProtected from "../components/AdminProtected";
import { useEffect, useState } from "react";
import AdminNavBar from "../UI/AdminNavBar";
import axios from "axios";
import './ViewShopPage.css';
const ViewShopPage = () => {
    const [shops, setShops] = useState();
    async function getshops() {
        try {
            //debugger;
            const res = await axios.get("http://localhost:3000/api/shop/getshops", {
                withCredentials: true,
            });
            const data = res.data.shops;
            return data;

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        const findshops = async () => {
            const data = await getshops();
            console.log(data);
            setShops(data);
        }
        findshops();
    }, [])
    return (<>
        <AdminNavBar />
        <AdminProtected>
            <ul>
                {!shops && <h1>Loading...</h1>}
                {shops && shops.map((shop) => {
                    return (
                        <li className="shops" key={shop._id}>
                            {shop.shopname + ' ' + shop.location}
                        </li>)
                })}
            </ul>
        </AdminProtected>
    </>
    )
}
export default ViewShopPage;