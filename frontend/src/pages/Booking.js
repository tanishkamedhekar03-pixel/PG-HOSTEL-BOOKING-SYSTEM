import React from "react";
import "./Booking.css";

function Booking() {
  return (
    <div className="booking-container">

      <h1 className="booking-title">Book Your Stay</h1>

      <div className="booking-card">

        <form>

          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email" required />

          <input type="text" placeholder="Phone Number" required />

          <select>
            <option>Select Room Type</option>
            <option>Single Room</option>
            <option>Double Sharing</option>
            <option>Triple Sharing</option>
          </select>

          <input type="date" />

          <button className="book-btn">
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  );
}

export default Booking;