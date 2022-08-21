import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";

class Testimonial extends Component {

    testimonial = [
        {
            content:
                "Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.",
            author: "Sarah M., Director of Events"
        },
        {
            content:
                "I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.",
            author: "Sarah M., CCHS Foundation"
        },
        {
            content:
                "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
            author: "Alexander B., Pan-Mass Challenge"
        },
        {
            content:
                "MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.",
            author: "Amy C., One Less Orphan Fund"
        }
    ];

    render() {
        return (
            <div class="container-xl">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-1.jpg" alt="" /></div>
                                    <p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                                    <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                                </div>
                                <div class="carousel-item">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-2.jpg" alt="" /></div>
                                    <p class="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                                    <p class="overview"><b>Antonio Moreno</b>, Web Developer</p>
                                </div>
                                <div class="carousel-item">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-3.jpg" alt="" /></div>
                                    <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                    <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i class="fa fa-angle-left"></i>
                            </a>
                            <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Testimonial;