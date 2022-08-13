import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>My family and I have been consulting Mr. Nimit Shah for the last several years
                                            for many of our finance related decisions and we have been extremely pleased
                                            with his services.</p>
                                        {/* <p>He personally monitors and micromanages our portfolio and always helps us in
                                            keeping end to end track of the same.</p>
                                        <p>His response time is absolute swift and he is extremely reliable and very
                                            customer friendly. He is personally invested in all our Financial decisions and
                                            provides us with the best possible financial knowledge on a personal level as
                                            well. He makes the process absolutely smooth leaving no scope for any flaw</p>
                                        <p>He personally looks into all our financial undertakings and provides great and
                                            accurate insights about the marketing and investing options in particular and
                                            miscellaneous financial decisions in general.</p>
                                        <p>The investments that we have made through him have provided us with more
                                            than decent returns and were absolutely safe.</p>
                                        <p>With him and Rational Investments, we are always assured of the fact that are
                                            finances are in safe hands and are always assured of swift and good returns.</p> */}
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Ayushi Shrivastav </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Sri Nimit Shah and Rational Investments has been handling my investment
                                            portfolio since the last 10 years. He was recommended by a close friend whose
                                            entire family has been dealing with him for long. </p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Srinivas B. Kini </span> - Retire Bank Executive.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>My investment journey has been very rewarding and the credit goes to Nimit
                                            Shah and his Rational Investments. His financial knowledge over the past
                                            several years has not only protected my investments through the downturns
                                            but has shown good returns.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Gaurav Joshi </span> - Ph.D, Education Consultant &amp; Adjunct Visiting Faculty, Saffrony Institute of Technology.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Johns Due </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>John Doe </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Amar Orthi </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Fatima Ma </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>JON CUMMINS </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>

                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>

                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>

                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-5.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-7.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;