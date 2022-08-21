import React, { useState } from "react";

const ContactThree = () => {

    const [monthlySipAmount, setMonthlySipAmount] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [sipDurationMonths, setSipDurationMonths] = useState('');
    const [sipCalcAmount, setSipCalcAmount] = useState('');

    const calculateSip = () => {
        var investment = monthlySipAmount; //principal amount
        var annualRate = expectedReturn; 
        var monthlyRate = annualRate / 12 / 100;  //Rate of interest
        // var years = 2; 
        var months = sipDurationMonths;  //Time period 
        var futureValue = 0; //Final Value

        futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

        console.log("future value >>> ", futureValue);
        setSipCalcAmount(futureValue);

    }

        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h3 className="title">SIP Calculator</h3>
                            </div>
                            <div className="form-wrapper">
                                <form>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={monthlySipAmount}
                                            onChange={(e)=>{setMonthlySipAmount(e.target.value)}}
                                            placeholder="Monthly SIP Amount"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={sipDurationMonths}
                                            onChange={(e)=>{setSipDurationMonths(e.target.value)}}
                                            placeholder="SIP Duration (In Months)"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={expectedReturn}
                                            onChange={(e)=>{setExpectedReturn(e.target.value)}}
                                            placeholder="Expected Return (%)"
                                        />
                                    </label>
                                </form>
                                <button className="rn-button-style--2 btn-solid" onClick={calculateSip}>Calculate</button>
                                <h5 className="title mt-3">SIP Calculated Amount: {Number(sipCalcAmount).toFixed(0)} </h5>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <button className="col-lg-12 rn-button-style--2 btn-solid mb-3" type="submit" id="mc-embedded-subscribe">SIP Calculator</button>
                                <button className="col-lg-12 rn-button-style--2 btn-solid mb-3" type="submit" id="mc-embedded-subscribe">Retirement Calculator</button>
                                <button className="col-lg-12 rn-button-style--2 btn-solid mb-3" type="submit" id="mc-embedded-subscribe">Marriage Planner</button>
                                <button className="col-lg-12 rn-button-style--2 btn-solid mb-3" type="submit" id="mc-embedded-subscribe">Education Planner</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default ContactThree;