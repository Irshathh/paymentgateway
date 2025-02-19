import "./App.css";
import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter an amount here.....");
    } else {
      if (typeof window.Razorpay === "undefined") {
        alert("Razorpay SDK failed to load. ");
        return;
      }

      var options = {
        key: "rzp_test_4niXBPYE5WY3qZ",
        amount: amount * 100, // Convert to paise
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "For testing purposes",
        handler: function (response) {
          alert("Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Mohamed Irshad",
          email: "irshathmohamed01@gmail.com",
          contact: "9789261630",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  return (
    <div className="container">
      <div className="payment-form">
        <h2>Razorpay Payment Integration</h2>
        <form onSubmit={handleSubmit}>
          <label>Enter Amount:</label>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default App;
