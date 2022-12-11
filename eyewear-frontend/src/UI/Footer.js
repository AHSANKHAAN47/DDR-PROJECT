import { AiFillMail } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='Container1'>
                <div className="Left1">
                    <h2 className="Logo1">EyeWear.Pk</h2>
                    <p className="Desc1">
                        Connect Us On Social Media
                    </p>
                    <div className="SocialContainer1">
                        <div className="SocialIco1">
                            <BsFacebook />
                        </div>
                        <div className="SocialIco2">
                            <BsInstagram />
                        </div>
                        <div className="SocialIco3">
                            <BsTwitter />
                        </div>
                        <div className="SocialIco4">
                            <BsSnapchat />
                        </div>
                    </div>
                </div>
                <div className="Center1">
                    {/* <h3 className="Title1">Useful Links</h3>
          <ul className="List1">
            <li className="ListItem1">Home</li>
            <li className="ListItem1">Cart</li>
            <li className="ListItem1">Man Fashion</li>
            <li className="ListItem1">Woman Fashion</li>
            <li className="ListItem1">Accessories</li>
            <li className="ListItem1">General</li>
          </ul> */}
                    <div className='text-center p-4' style={{ fontWeight: 'bold' }}>
                        © 2022 Copyright :
                        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                            EyeWear.pk
                        </a>
                    </div>

                </div>
                <div className="Right1">
                    <h2 className="Title1">Contact</h2>
                    {/* <div className="ContactItem1">
            <HiLocationMarker />  DHA, Phase 9, Karachi
          </div> */}
                    {/* <div className="ContactItem1">
            <AiFillPhone />  023456789
          </div> */}
                    <div className="ContactItem1">
                        <AiFillMail /> contact@eyeWear.pk
                    </div>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" className="Payment1" />
                </div>
            </div>
        </div>
    )
}

export default Footer;