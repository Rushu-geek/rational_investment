import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import "../../assets/css/wealthCalculator.css";

const WealthCalculator = () => {
  // Asset class options
  const assetClasses = ["Equity", "Hybrid", "Debt", "Commodity", "Others"];

  // Lumpsum calculator state
  const [lumpSumAmount, setLumpSumAmount] = useState(300000);
  const [lumpSumYears, setLumpSumYears] = useState(5);
  const [lumpSumReturn, setLumpSumReturn] = useState(10);
  const [lumpSumAssetClass, setLumpSumAssetClass] = useState("Equity");

  // SIP calculator state
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipYears, setSipYears] = useState(5);
  const [sipReturn, setSipReturn] = useState(10);
  const [sipFrequency, setSipFrequency] = useState("Monthly");
  const [sipAssetClass, setSipAssetClass] = useState("Equity");

  // Calculate fill percentage for sliders
  const calculateFillPercent = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  // Calculate lumpsum returns
  const calculateLumpSum = () => {
    const principal = lumpSumAmount;
    const rate = lumpSumReturn / 100;
    const years = lumpSumYears;

    const futureValue = principal * Math.pow(1 + rate, years);
    const returns = futureValue - principal;

    return {
      investment: principal,
      returns: returns,
      futureValue: futureValue,
      pieData: [
        { name: "Invested", value: principal, color: "#14579e" },
        { name: "Returns", value: returns, color: "#FFA500" },
      ],
    };
  };

  // Calculate SIP returns
  const calculateSIP = () => {
    const monthlyInvestment = sipAmount;
    const annualRate = sipReturn / 100;
    const monthlyRate = annualRate / 12;
    const months = sipYears * 12;

    const futureValue =
      monthlyInvestment *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));

    const totalInvestment = monthlyInvestment * months;
    const returns = futureValue - totalInvestment;

    return {
      investment: totalInvestment,
      returns: returns,
      futureValue: futureValue,
      pieData: [
        { name: "Invested", value: totalInvestment, color: "#14579e" },
        { name: "Returns", value: returns, color: "#FFA500" },
      ],
    };
  };

  const lumpSumResult = calculateLumpSum();
  const sipResult = calculateSIP();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN").format(amount.toFixed(0));
  };

  return (
    <div className="wealth-calculator">
      <h1>Smart Wealth</h1>
      <p className="subtitle">Your first step towards a wealthier tomorrow</p>

      {/* Lumpsum Calculator */}
      <div className="calculator-section">
        <div className="calculator-header">
          <span>Lumpsum Calculator</span>
        </div>

        <div className="calculator-content">
          <div className="calculator-controls">
            <div className="form-group">
              <div className="form-row">
                <label>Assets Class</label>
                <select
                  value={lumpSumAssetClass}
                  onChange={(e) => setLumpSumAssetClass(e.target.value)}
                >
                  {assetClasses.map((asset) => (
                    <option key={asset} value={asset}>
                      {asset}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="form-row">
                <label>
                  Investment Amount: ₹{formatCurrency(lumpSumAmount)}
                </label>
                <input
                  type="number"
                  value={lumpSumAmount}
                  onChange={(e) =>
                    setLumpSumAmount(parseInt(e.target.value) || 0)
                  }
                />
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min="500"
                  max="1000000"
                  step="500"
                  value={lumpSumAmount}
                  onChange={(e) => setLumpSumAmount(parseInt(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #4285F4 0%, #4285F4 ${calculateFillPercent(
                      lumpSumAmount,
                      500, // should match min attribute
                      1000000 // should match max attribute
                    )}%, #e0e0e0 ${calculateFillPercent(
                      lumpSumAmount,
                      500,
                      1000000
                    )}%, #e0e0e0 100%)`,
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-row">
                <label>Investment Period: {lumpSumYears} Years</label>
                <input
                  type="number"
                  value={lumpSumYears}
                  onChange={(e) =>
                    setLumpSumYears(parseInt(e.target.value) || 0)
                  }
                />
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={lumpSumYears}
                  onChange={(e) => setLumpSumYears(parseInt(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #4285F4 0%, #4285F4 ${calculateFillPercent(
                      lumpSumYears,
                      1,
                      30
                    )}%, #e0e0e0 ${calculateFillPercent(
                      lumpSumYears,
                      1,
                      30
                    )}%, #e0e0e0 100%)`,
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-row">
                <label>Assured Rate of Return: {lumpSumReturn}%</label>
                <input
                  type="number"
                  value={lumpSumReturn}
                  onChange={(e) =>
                    setLumpSumReturn(parseInt(e.target.value) || 0)
                  }
                />
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={lumpSumReturn}
                  onChange={(e) => setLumpSumReturn(parseInt(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #4285F4 0%, #4285F4 ${calculateFillPercent(
                      lumpSumReturn,
                      1,
                      20
                    )}%, #e0e0e0 ${calculateFillPercent(
                      lumpSumReturn,
                      1,
                      20
                    )}%, #e0e0e0 100%)`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="calculator-results">
            <div className="pie-chart-container">
              <div className="result-pie-div">
                <div
                  className="result-card-left"
                  style={{ borderLeft: "10px solid #14579e" }}
                >
                  <div className="result-value">
                    ₹{formatCurrency(lumpSumResult.investment)}
                  </div>
                  <div className="result-label">Investment Amount</div>
                </div>

                <div
                  className="result-card-left"
                  style={{ borderLeft: "10px solid rgb(255, 165, 0)" }}
                >
                  <div className="result-value">
                    ₹{formatCurrency(lumpSumResult.returns)}
                  </div>
                  <div className="result-label">Estimated Returns</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={lumpSumResult.pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    innerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {lumpSumResult.pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="result-card">
              <div className="result-value">
                ₹{formatCurrency(lumpSumResult.futureValue)}
              </div>
              <div className="result-label">Expected Future Value</div>
            </div>
          </div>
        </div>
      </div>

      {/* SIP Calculator */}
      <div className="calculator-section">
        <div className="calculator-header">
          <span>SIP Calculator</span>
        </div>

        <div className="calculator-content">
          <div className="calculator-controls">
            <div className="form-group">
              <div className="form-row">
                <label>Assets Class</label>
                <select
                  value={sipAssetClass}
                  onChange={(e) => setSipAssetClass(e.target.value)}
                >
                  {assetClasses.map((asset) => (
                    <option key={asset} value={asset}>
                      {asset}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="form-row">
                <label>SIP Amount: ₹{formatCurrency(sipAmount)}</label>
                <input
                  type="number"
                  value={sipAmount}
                  onChange={(e) => setSipAmount(parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={sipAmount}
                  onChange={(e) => setSipAmount(parseInt(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #4285F4 0%, #4285F4 ${calculateFillPercent(
                      sipAmount,
                      500,
                      50000
                    )}%, #e0e0e0 ${calculateFillPercent(
                      sipAmount,
                      500,
                      50000
                    )}%, #e0e0e0 100%)`,
                  }}
                />
              </div>
            </div>

            <div className="form-group">
            <div className="form-row" style={{marginBottom: "10px"}}>
                <label>Frequency</label>
                <select
                  value={sipFrequency}
                  disabled
                  onChange={(e) => setSipFrequency(e.target.value)}
                >
                  <option>Monthly</option>
                </select>
              </div>
              <div className="form-row">
                <label>Assured Rate of Return: {sipReturn}%</label>
                <input
                  type="number"
                  value={sipReturn}
                  onChange={(e) => setSipReturn(parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={sipReturn}
                  onChange={(e) => setSipReturn(parseInt(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #4285F4 0%, #4285F4 ${calculateFillPercent(
                      sipReturn,
                      1,
                      20
                    )}%, #e0e0e0 ${calculateFillPercent(
                      sipReturn,
                      1,
                      20
                    )}%, #e0e0e0 100%)`,
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-row">
                <label>SIP Period: {sipYears} Years</label>
                <input
                  type="number"
                  value={sipYears}
                  onChange={(e) => setSipYears(parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={sipYears}
                  onChange={(e) => setSipYears(parseInt(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #4285F4 0%, #4285F4 ${calculateFillPercent(
                      sipYears,
                      1,
                      30
                    )}%, #e0e0e0 ${calculateFillPercent(
                      sipYears,
                      1,
                      30
                    )}%, #e0e0e0 100%)`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="calculator-results">
            <div className="pie-chart-container">
              <div className="result-pie-div">
                <div
                  className="result-card-left"
                  style={{ borderLeft: "10px solid #14579e" }}
                >
                  <div className="result-value">
                    ₹{formatCurrency(sipResult.investment)}
                  </div>
                  <div className="result-label">Investment Amount</div>
                </div>
                <div
                  className="result-card-left"
                  style={{ borderLeft: "10px solid rgb(255, 165, 0)" }}
                >
                  <div className="result-value">
                    ₹{formatCurrency(sipResult.returns)}
                  </div>
                  <div className="result-label">Estimated Returns</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sipResult.pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    innerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sipResult.pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="result-card">
              <div className="result-value">
                ₹{formatCurrency(sipResult.futureValue)}
              </div>
              <div className="result-label">Expected Future Value</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WealthCalculator;
