import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX, FiMenu } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/Investment.rational' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/rational-investment/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
    { Social: <FaYoutube />, link: 'https://youtube.com/channel/UCQ8M6uzgAZa2FqoAlCwW-Ng' },
    { Social: <FaWhatsapp />, link: 'https://api.whatsapp.com/send?phone=+919925853065&text=Hello%2C%20I%20am%20Intrested%20in%20some%20Goal%20Planning%20and%20Wealth%20Creation%2C%20Guide%20me%20for%20the%20same.' },
]



class HeaderFive extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded')
        });
        this.state = {
            colorFlag: false
        }
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open');
        this.setState({ colorFlag: true });
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
        this.setState({ colorFlag: false });
    }
    render() {
        var elements = document.querySelectorAll('.has-droupdown > a');
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }

        const { color, headerPosition } = this.props;

        let details = navigator.userAgent;

        /* Creating a regular expression 
        containing some mobile devices keywords 
        to search it in details string*/
        let regexp = /android|iphone|kindle|ipad/i;

        /* Using test() method to search regexp in details
        it returns boolean value*/
        let isMobileDevice = regexp.test(details);

        if (isMobileDevice) {
            console.log("You are using a Mobile Device");
        } else {
            console.log("You are using Desktop");
        }

        let logoUrl = <img src="/assets/images/logo/rational-investment-1.png" alt="Trydo" />;

        return (
            <>
                <div className="header-wrapper1" id="header-wrapper1">
                    <div className="container">
                        <div className="row align-items-center">
                            {isMobileDevice && <div className="col-lg-12 col-md-12 col-12">
                                <div style={{ padding: '10px' }} className="logo">
                                    {logoUrl}
                                </div>
                            </div>}
                            {!isMobileDevice && <div className="col-lg-4 col-md-4 col-6">
                                <div className="header-left">
                                    <div style={{ padding: '10px' }} className="logo">
                                        {logoUrl}
                                    </div>
                                </div>
                            </div>}
                            {!isMobileDevice && <div className="col-lg-4 col-md-4 col-6">
                                <div style={{ float: 'right', cursor: 'pointer' }} className="header-btn">
                                    <a href="https://my-planner.in/login" target={"_blank"} className="rn-btn mr-3">
                                        <span>Wealth Account</span>
                                    </a>
                                    <a href="https://www.ifaplanet.com/login.php" target={"_blank"} className="rn-btn">
                                        <span>My Portfolio</span>
                                    </a>
                                </div>
                            </div>}
                            {!isMobileDevice && <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="inner text-center">
                                    <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                        {SocialShare.map((val, i) => (
                                            <li key={i}><a style={{ border: "2px solid rgba(28, 116, 203)" }} href={`${val.link}`} target="_blank">{val.Social}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                <header style={{ backgroundColor: '#1C74CB', width: '100%' }} className={`header-area formobile-menu ${headerPosition} ${color}`}>
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="humberger-menu d-block d-lg-none">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-md-8 col-6">
                                    <nav className="mainmenunav d-lg-block">
                                        <ul className="mainmenu" style={{ backgroundColor: isMobileDevice ? '#d3d7db' : '', width: !isMobileDevice ? 1000 : null }}>
                                            <li style={{ color: isMobileDevice ? 'black' : 'white' }}><Link style={{ color: this.state.colorFlag ? 'black' : 'white' }} to="/">Home</Link>
                                            </li>
                                            
                                            <li><Link style={{ color: isMobileDevice ? 'black' : 'white' }} to="/about" >About Us</Link></li>
                                            <li className="has-droupdown"><Link style={{ color: isMobileDevice ? 'black' : 'white' }} to={isMobileDevice ? '#' : '/product'} >Products</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/product">All Products</Link></li>
                                                    <li><Link to="/product-details?name=mf">Mutual Funds</Link></li>
                                                    <li><Link to="/product-details?name=sb">Stock Broking</Link></li>
                                                    <li><Link to="/product-details?name=pm">PMS</Link></li>
                                                    <li><Link to="/product-details?name=li">Life Insurance</Link></li>
                                                    <li><Link to="/product-details?name=hi">Health Insurance</Link></li>
                                                    <li><Link to="/product-details?name=cf">Corporate Fixed Deposit</Link></li>
                                                    <li><Link to="/product-details?name=bo">Bonds</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-droupdown"><Link style={{ color: isMobileDevice ? 'black' : 'white' }} to={isMobileDevice ? '#' : '/service'} >Service</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/service">All Services</Link></li>
                                                    <li><Link to="/service-details?name=fs">Financial service</Link></li>
                                                    <li><Link to="/service-details?name=rp">Retirement Planning</Link></li>
                                                    <li><Link to="/service-details?name=gp">Goal planning</Link></li>
                                                    <li><Link to="/service-details?name=wm">Wealth Management</Link></li>
                                                </ul>
                                            </li>

                                            <li><Link style={{ color: isMobileDevice ? 'black' : 'white' }} to="/blog" >Our Blog</Link>
                                            </li>
                                            <li className="has-droupdown"><Link style={{ color: isMobileDevice ? 'black' : 'white' }} to="#" >Gallery</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/video-popup">Gallery Videos</Link></li>
                                                    <li><Link to="/gallery">Gallery Images</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link style={{ color: isMobileDevice ? 'black' : 'white' }} to="/contact" >Connect Us</Link></li>
                                            <li><Link style={{ color: isMobileDevice ? 'black' : 'white' }} to="/calculators" >Calculators</Link></li>
                                            <li><Link style={{ color: isMobileDevice ? 'black' : 'white' }} to="/downloads" >Downloads</Link></li>
                                            <li><Link style={{ color: isMobileDevice ? 'black' : 'white' }} to="/careers" >Career</Link></li>

                                            {isMobileDevice && <div style={{ alignItems: 'center', justifyContent: 'center' }} className="row">
                                                {SocialShare.map((val, i) => (
                                                    <li key={i}>
                                                        <a style={{
                                                            // border: "2px solid rgba(28, 116, 203)",
                                                            // borderRadius: '20px',
                                                            fontSize: '35px',
                                                            padding: '7px'
                                                        }}
                                                            href={`${val.link}`}
                                                            target="_blank"
                                                        >
                                                            {val.Social}</a></li>
                                                ))}
                                            </div>}

                                            <div style={{ alignItems: 'center', justifyContent: 'center' }} className="row">
                                                {isMobileDevice && <button onClick={() => window.open("https://my-planner.in/login", "_blank")} style={{ width: '80%' }} className="btn btn-secondary">Wealth Account</button>}
                                            </div>
                                            <div style={{ alignItems: 'center', justifyContent: 'center', marginTop: '10px' }} className="row">
                                                {isMobileDevice && <button onClick={() => window.open("https://www.ifaplanet.com/login.php", "_blank")} style={{ width: '80%' }} className="btn btn-secondary">My Portfolio</button>}
                                            </div>
                                        </ul>
                                    </nav>
                                    {/* Start Humberger Menu  */}
                                    {/* <div className="humberger-menu d-block d-lg-none pl--20">
                                        <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                    </div> */}
                                    {/* End Humberger Menu  */}
                                    <div className="close-menu d-block d-lg-none">
                                        <span style={{ backgroundColor: 'darkgray', borderRadius: '27px' }} onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
export default HeaderFive;