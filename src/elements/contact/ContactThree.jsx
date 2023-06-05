import React, { useEffect, useState } from "react";

const ContactThree = () => {

    const [monthlySipAmount, setMonthlySipAmount] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [sipDurationMonths, setSipDurationMonths] = useState('');
    const [sipCalcAmount, setSipCalcAmount] = useState('');
    const [investedAmount, setInvestedAmount] = useState('');

    const [activeCalc, setActiveCalc] = useState('sip');


    const [lumpsomAmount, setLumpsomAmount] = useState("");
    const [lumpsomYears, setLumpsomYears] = useState("");

    const [futureLumpsum, setFutureLumpsum] = useState("");


    useEffect(() => {
        let amount = 1500000 * (Math.pow(1.15, 5));

        console.log(amount);

    }, []);

    const calculateSip = (e) => {
        e.preventDefault();

        var investment = monthlySipAmount; //principal amount
        var annualRate = expectedReturn;
        var monthlyRate = annualRate / 12 / 100;  //Rate of interest
        // var years = 2; 
        var months = sipDurationMonths;  //Time period 
        var futureValue = 0; //Final Value

        futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

        console.log("future value >>> ", futureValue);
        setSipCalcAmount(futureValue);
        setInvestedAmount(investment * months);

    }

    const calculateLumpsom = (e) => {
        e.preventDefault();

        let amount = lumpsomAmount * (Math.pow(1 + (expectedReturn / 100), lumpsomYears));

        console.log(amount);

        setFutureLumpsum(amount);
    }

    return (
        <div className="contact-form--1">
            <div className="container">
                <div className="row row--35 align-items-start">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="section-title text-left mb--50">
                            {(activeCalc == 'sip') && <h3 className="title">SIP Calculator</h3>}
                            {(activeCalc == 'lumpsum') && <h3 className="title">Lumpsum Calculator</h3>}

                        </div>
                        <div className="form-wrapper">
                            {(activeCalc == 'sip') && <form>
                                <label htmlFor="item01">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={monthlySipAmount}
                                        onChange={(e) => { setMonthlySipAmount(e.target.value) }}
                                        placeholder="Monthly SIP Amount"
                                    />
                                </label>

                                <label htmlFor="item02">
                                    <input
                                        type="text"
                                        name="email"
                                        id="item02"
                                        value={sipDurationMonths}
                                        onChange={(e) => { setSipDurationMonths(e.target.value) }}
                                        placeholder="SIP Duration (In Months)"
                                    />
                                </label>

                                <label htmlFor="item03">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="item03"
                                        value={expectedReturn}
                                        onChange={(e) => { setExpectedReturn(e.target.value) }}
                                        placeholder="Expected Return (%)"
                                    />
                                </label>
                                <button className="rn-button-style--2 btn-solid" onClick={(e) => calculateSip(e)}>Calculate</button>

                                <h5 className="title mt-3">Total Invested Amount: {Number(investedAmount).toFixed(0)} </h5>
                                <h5 className="title mt-3">Future Value: {Number(sipCalcAmount).toFixed(0)} </h5>
                            </form>}

                            {(activeCalc == 'lumpsum') && <form>
                                <label htmlFor="item01">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={lumpsomAmount}
                                        onChange={(e) => { setLumpsomAmount(e.target.value) }}
                                        placeholder="Lumpsum Amount"
                                    />
                                </label>

                                <label htmlFor="item02">
                                    <input
                                        type="text"
                                        name="email"
                                        id="item02"
                                        value={lumpsomYears}
                                        onChange={(e) => { setLumpsomYears(e.target.value) }}
                                        placeholder="Investment Duration (In Years)"
                                    />
                                </label>

                                <label htmlFor="item03">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="item03"
                                        value={expectedReturn}
                                        onChange={(e) => { setExpectedReturn(e.target.value) }}
                                        placeholder="Expected Return (%)"
                                    />
                                </label>
                                <button className="rn-button-style--2 btn-solid" onClick={(e) => calculateLumpsom(e)}>Calculate</button>
                                <h5 className="title mt-3">Total Invested Amount: {Number(lumpsomAmount).toFixed(0)} </h5>
                                <h5 className="title mt-3">Future Value: {Number(futureLumpsum).toFixed(0)} </h5>
                            </form>}


                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="thumbnail mb_md--30 mb_sm--30">
                            <button onClick={() => setActiveCalc('sip')} className="col-lg-12 rn-button-style--2 btn-solid mb-3" type="submit" id="mc-embedded-subscribe">SIP Calculator</button>
                            <button onClick={() => setActiveCalc('lumpsum')} className="col-lg-12 rn-button-style--2 btn-solid mb-3" type="submit" id="mc-embedded-subscribe">Lumpsum Calculator</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactThree;