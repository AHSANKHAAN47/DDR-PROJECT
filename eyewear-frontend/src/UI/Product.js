import React from 'react'
import { BsCart, BsHeart, BsSearch } from 'react-icons/bs'
import './Product.css'

const Product = ({ item }) => {
    return (
        <div className="Container4">
            {/* <div className="Circle4"> */}
            <img src={item.img} alt="" className="Image4" />
            <div className="Info4">
                <div className="Icon4">
                    <BsCart />
                </div>
                <div className="Icon4">
                    <BsSearch />
                </div>
                <div className="Icon4">
                    <BsHeart />
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Product;