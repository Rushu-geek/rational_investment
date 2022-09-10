import React, { Component } from "react";

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
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                                <li data-target="#myCarousel" data-slide-to="4"></li>
                                <li data-target="#myCarousel" data-slide-to="5"></li>
                                <li data-target="#myCarousel" data-slide-to="6"></li>
                                <li data-target="#myCarousel" data-slide-to="7"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-8.jpeg" alt="" /></div>
                                    <p style={{ textAlign: 'justify' }} class="testimonial">Nimit has helped me manage my financial portfolio for a few years now. He’s always contactable, courteous and helpful. His dedication to clients and business excellence sets him apart and I would highly recommend him to anyone wanting to achieve better financial outcomes.</p>
                                    <p class="overview"><b>Ms Shailly Kishtawal</b>, Product Designer Google</p>
                                </div>
                                <div class="carousel-item">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-1.jpg" alt="" /></div>
                                    <p style={{ textAlign: 'justify' }} class="testimonial">My family and I have been consulting Mr. Nimit Shah for the last several years
                                        for many of our finance related decisions and we have been extremely pleased
                                        with his services. With him and Rational Investments, we are always assured of the fact that are
                                        finances are in safe hands and are always assured of swift and good returns.</p>
                                    <p class="overview"><b>Ayushi Shrivastav</b></p>
                                </div>
                                <div class="carousel-item">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-2.jpg" alt="" /></div>
                                    <p style={{ textAlign: 'justify' }} class="testimonial">Sri Nimit Shah and Rational Investments has been handling my investment
                                        portfolio since the last 10 years. He was recommended by a close friend whose
                                        entire family has been dealing with him for long.
                                        Since day 1, I have found his services very satisfactory. Just a call or a message
                                        is enough to get him to my place any time. Does things without delay.
                                        Have recommended him to my other friends as well.</p>
                                    <p class="overview"><b>Srinivas B. Kini </b>(Retire Bank Executive)</p>
                                </div>
                                <div class="carousel-item">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-3.jpg" alt="" /></div>
                                    <p style={{ textAlign: 'justify' }} class="testimonial">My investment journey has been very rewarding and the credit goes to Nimit
                                        Shah and his Rational Investments. His financial knowledge over the past
                                        several years has not only protected my investments through the downturns
                                        but has shown good returns. And I would strongly recommend him as your financial advisor without a
                                        second thought.</p>
                                    <p class="overview"><b>Gaurav Joshi</b>, Ph.D Education Consultant</p>
                                </div>
                                <div class="carousel-item">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-4.jpg" alt="" /></div>
                                    <p style={{ textAlign: 'justify' }} class="testimonial">Nimit has been handling my family and my financial portfolio for the past 15+ years.
                                        With his sheer honesty combined with an acute understanding of thorough market research and understanding, his contribution to our financial savings has been invaluable and only increased over the years.
                                        His thorough understanding of the market and genuine amount of honesty has only made our trust in him grow stronger with years with a positive bank balance.</p>
                                    <p class="overview"><b>Ashit Patwari</b>, Sr. Operations Engineer</p>
                                </div>
                                <div class="carousel-item">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-5.jpg" alt="" /></div>
                                    <p style={{ textAlign: 'justify' }} class="testimonial">I approached Nimit Shah for suggesting over MF Investment and he guided me very well regarding benefits of SIP Investments. He also explained the concept of Systematic Withdrawal Plans (SWP) and how it can be used for a regular cashflow planning and still growing investments. His approach is quite balanced and always advises for diversification of risk, which helps me protecting the downside in bear market as well. He is always approachable and very meticulous in giving reminders, which helps quite a lot in busy professional life. I strongly recommend Nimit Shah for a one stop investment solution</p>
                                    <p class="overview"><b>Salil G Sheth</b>, CA</p>
                                </div>
                                <div class="carousel-item">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-6.jpeg" alt="" /></div>
                                    <p style={{ textAlign: 'justify' }} class="testimonial">I know Mr. Nimit Shah who is associated with Rational Investment for more than a decade and involved in advising and managing investment portfolio. He has been efficient advisorand provides suitable and confidential service to make our investments profitable and sustainable. I would surely recommend him to your advisor as well.</p>
                                    <p class="overview"><b>Prashant Trivedi</b>, Head Operations BU-Engineering Compound</p>
                                </div>
                                <div class="carousel-item">
                                    <div class="img-box"><img src="/assets/images/client/testimonial-7.jpeg" alt="" /></div>
                                    <p style={{ textAlign: 'justify' }} class="testimonial">I started investing my money 15 years back knowing nothing about the market
                                        Just discussion amongst friends.
                                        I started investment with the help of Nimit Shah.
                                        I wanted safe investment looking at my age and planning for retirement.
                                        He is always available for any service or questions I have regarding investment.
                                        He is reliable,knowledgeable and honest person.
                                        I have very good experience to involve him in my investment.
                                        I am very satisfied with my portfolio.</p>
                                    <p class="overview"><b>Varsha B Trivedi</b>, Ex-IKDRC head of Transplant immunology department</p>
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