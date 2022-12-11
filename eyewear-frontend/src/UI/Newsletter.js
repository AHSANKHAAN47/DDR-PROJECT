import React from 'react'
import { IoMdSend } from 'react-icons/io'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="Container5">
            <h1 className="Title5">NewsLetter</h1>
            <p className="Desc5">Get timely updates for your favourite products.</p>
            <div className="InputContainer5">
                <input placeholder='Your Email' type="text" className="Input5" />
                <button className="Button5">
                    <IoMdSend />
                </button>
            </div>
        </div>
    )
}

export default Newsletter;