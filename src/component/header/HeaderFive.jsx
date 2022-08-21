import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX, FiMenu } from "react-icons/fi";


class HeaderFive extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded')
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
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

        const { logo, color, headerPosition } = this.props;

        let logoUrl = <img src="/assets/images/logo/rational-investment-1.png" alt="Trydo" />;

        return (
            <>
                <header className={`header-area formobile-menu ${headerPosition} ${color}`}>
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4 col-6">
                                    <div className="header-left">
                                        <div className="logo">
                                            {logoUrl}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-6">
                                    <div style={{ float: 'right', cursor: 'pointer' }} className="header-btn">
                                        <a className="rn-btn mr-3">
                                            <span>Wealth Account</span>
                                        </a>
                                        <a href="https://www.ifaplanet.com/login.php" target="_blank" className="rn-btn">
                                            <span>My Portfolio</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <header style={{ backgroundColor: '#1C74CB', width: '100%' }} className={`header-area formobile-menu ${headerPosition} ${color}`}>
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-md-8 col-6">
                                    <nav className="mainmenunav d-lg-block">
                                        <ul className="mainmenu">
                                            <li className="has-droupdown"><Link style={{color: 'white'}} to="/corporate-business">Home</Link>
                                            </li>
                                            <li className="has-droupdown"><Link style={{color: 'white'}} to="/service" >Service</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/service">All Services</Link></li>
                                                    <li><Link to="/service-details?name=fs">Financial service</Link></li>
                                                    <li><Link to="/service-details?name=rp">Retirement Planning</Link></li>
                                                    <li><Link to="/service-details?name=gp">Goal planning</Link></li>
                                                    <li><Link to="/service-details?name=wm">Wealth Management</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-droupdown"><Link style={{color: 'white'}} to="/product" >Products</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/product">All Products</Link></li>
                                                    <li><Link to="/product-details?name=hi">Health Insurance</Link></li>
                                                    <li><Link to="/product-details?name=li">Life Insurance</Link></li>
                                                    <li><Link to="/product-details?name=bo">Bonds</Link></li>
                                                    <li><Link to="/product-details?name=mf">Mutual Funds</Link></li>
                                                    <li><Link to="/product-details?name=cf">Corporate Fixed Deposit</Link></li>
                                                    <li><Link to="/product-details?name=sb">Stock Broking</Link></li>
                                                    <li><Link to="/product-details?name=pm">PMS</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link style={{color: 'white'}} to="/about" >About Us</Link></li>

                                            <li className="has-droupdown"><Link style={{color: 'white'}} to="/blog" >Our Blog</Link>
                                            </li>
                                            <li className="has-droupdown"><Link style={{color: 'white'}} to="#" >Gallery</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/video-popup">Gallery Videos</Link></li>
                                                    <li><Link to="/gallery">Gallery Images</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link style={{color: 'white'}} to="/contact" >Connect Us</Link></li>
                                            <li><Link style={{color: 'white'}} to="/calculators" >Calculators</Link></li>
                                        </ul>
                                    </nav>
                                    {/* Start Humberger Menu  */}
                                    <div className="humberger-menu d-block d-lg-none pl--20">
                                        <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                    </div>
                                    {/* End Humberger Menu  */}
                                    <div className="close-menu d-block d-lg-none">
                                        <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
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