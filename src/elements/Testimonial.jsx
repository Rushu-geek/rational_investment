import React, { Component } from "react";
import Slider from "react-slick";
import "../assets/css/testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonial extends Component {
  testimonials = [
    {
      id: 1,
      image: "/assets/images/client/testimonial-8.jpeg",
      content:
        "Nimit has helped me manage my financial portfolio for a few years now. He's always contactable, courteous and helpful. His dedication to clients and business excellence sets him apart and I would highly recommend him to anyone wanting to achieve better financial outcomes.",
      author: "Ms Shailly Kishtawal",
      role: "Product Designer Google",
    },
    {
      id: 2,
      image: "/assets/images/client/testimonial-1.jpg",
      content:
        "My family and I have been consulting Mr. Nimit Shah for the last several years for many of our finance related decisions and we have been extremely pleased with his services. With him and Rational Investments, we are always assured of the fact that are finances are in safe hands and are always assured of swift and good returns.",
      author: "Ayushi Shrivastava",
    },
    {
      id: 3,
      image: "/assets/images/client/testimonial-2.jpg",
      content:
        "Sri Nimit Shah and Rational Investments has been handling my investment portfolio since the last 10 years. He was recommended by a close friend whose entire family has been dealing with him for long. Since day 1, I have found his services very satisfactory. Just a call or a message is enough to get him to my place any time. Does things without delay. Have recommended him to my other friends as well.",
      author: "Srinivas B. Kini",
      role: "Retired Bank Executive",
    },
    {
      id: 4,
      image: "/assets/images/client/testimonial-3.jpg",
      content:
        "My investment journey has been very rewarding and the credit goes to Nimit Shah and his Rational Investments. His financial knowledge over the past several years has not only protected my investments through the downturns but has shown good returns. And I would strongly recommend him as your financial advisor without a second thought.",
      author: "Gaurav Joshi",
      role: "Ph.D Education Consultant",
    },
    {
      id: 5,
      image: "/assets/images/client/testimonial-4.jpg",
      content:
        "Nimit has been handling my family and my financial portfolio for the past 15+ years. With his sheer honesty combined with an acute understanding of thorough market research and understanding, his contribution to our financial savings has been invaluable and only increased over the years. His thorough understanding of the market and genuine amount of honesty has only made our trust in him grow stronger with years with a positive bank balance.",
      author: "Ashit Patwari",
      role: "Sr. Operations Engineer",
    },
    {
      id: 6,
      image: "/assets/images/client/testimonial-5.jpg",
      content:
        "I approached Nimit Shah for suggesting over MF Investment and he guided me very well regarding benefits of SIP Investments. He also explained the concept of Systematic Withdrawal Plans (SWP) and how it can be used for a regular cashflow planning and still growing investments. His approach is quite balanced and always advises for diversification of risk, which helps me protecting the downside in bear market as well. He is always approachable and very meticulous in giving reminders, which helps quite a lot in busy professional life. I strongly recommend Nimit Shah for a one stop investment solution",
      author: "Salil G Sheth",
      role: "CA",
    },
    {
      id: 7,
      image: "/assets/images/client/testimonial-6.jpeg",
      content:
        "I know Mr. Nimit Shah who is associated with Rational Investment for more than a decade and involved in advising and managing investment portfolio. He has been efficient advisor and provides suitable and confidential service to make our investments profitable and sustainable. I would surely recommend him to your advisor as well.",
      author: "Prashant Trivedi",
      role: "Head Operations BU-Engineering Compound",
    },
    {
      id: 8,
      image: "/assets/images/client/testimonial-7.jpeg",
      content:
        "I started investing my money 15 years back knowing nothing about the market Just discussion amongst friends. I started investment with the help of Nimit Shah. I wanted safe investment looking at my age and planning for retirement. He is always available for any service or questions I have regarding investment. He is reliable,knowledgeable and honest person. I have very good experience to involve him in my investment. I am very satisfied with my portfolio.",
      author: "Varsha B Trivedi",
      role: "Ex-IKDRC head of Transplant immunology department",
    },
  ];

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };

    return (
      <div className="container-xl testimonial-section">
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              {this.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item px-3">
                  <div className="testimonial-card p-4 h-100">
                    <div className="img-box mx-auto mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="rounded-circle"
                      />
                    </div>
                    <p
                      className="testimonial-text"
                      style={{ textAlign: "justify" }}
                    >
                      {testimonial.content}
                    </p>
                    <div className="author-info mt-3">
                      <h6 className="author-name mb-1">
                        <strong>{testimonial.author}</strong>
                      </h6>
                      {testimonial.role && (
                        <p className="author-role mb-0">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
