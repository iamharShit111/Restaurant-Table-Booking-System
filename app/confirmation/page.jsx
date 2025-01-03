"use client";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react"
import { Ban } from 'lucide-react'

const BookingConfirmation = () => {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    // Ensure that code accessing localStorage runs only on the client-side
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("bookingData");
      if (data) {
        setBookingData(JSON.parse(data));
      }
    }
  }, []);
  if (!bookingData) {
    return (
      <div className="container">
        <div className="confirmation-card">
          {/* Confirmation Icon */}
          <div className="icon-container">
            <Ban className="confirm-icon" />
          </div>

          {/* Heading */}
          <div className="header">
            <h2 className="title">No Booking!</h2>
            <p className="subtitle">
              Book a reservation to see any reservation.
            </p>
          </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: rgb(255, 247, 237);
            padding: 1rem;
          }

          .confirmation-card {
            background-color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border-radius: 0.75rem;
            padding: 1.5rem;
            width: 100%;
            max-width: 28rem;
          }

          .icon-container {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
          }

          .confirm-icon {
            width: 4rem;
            height: 4rem;
            color: red;
          }

          .header {
            text-align: center;
            margin-bottom: 2rem;
          }

          .title {
            font-size: 1.5rem;
            font-weight: 700;
            color: rgb(154, 52, 18);
          }

          .subtitle {
            color: rgb(75, 85, 99);
            margin-top: 0.5rem;
          }
        `}</style>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="confirmation-card">
        {/* Confirmation Icon */}
        <div className="icon-container">
          <CheckCircle className="confirm-icon" />
        </div>

        {/* Heading */}
        <div className="header">
          <h2 className="title">Booking Confirmed!</h2>
          <p className="subtitle">
            Your reservation has been successfully made
          </p>
        </div>

        {/* Booking Details */}
        <div className="details-container">
          {/* Name Section */}
          <div className="detail-section">
            <h3 className="detail-label">Name</h3>
            <p className="detail-value">{bookingData.fullName}</p>
          </div>

          {/* Contact Section */}
          <div className="detail-section">
            <h3 className="detail-label">Contact Details</h3>
            <p className="detail-value">{bookingData.email}</p>
            <p className="detail-value">{bookingData.phoneNumber}</p>
          </div>

          {/* Reservation Details */}
          <div className="detail-section">
            <h3 className="detail-label">Reservation Details</h3>
            <div className="reservation-grid">
              <div>
                <p className="detail-label">Date</p>
                <p className="detail-value">
                  {new Date(bookingData.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="detail-label">Time</p>
                <p className="detail-value">{bookingData.timeSlot}</p>
              </div>
            </div>
          </div>

          {/* Guest Count */}
          <div className="detail-section">
            <h3 className="detail-label">Number of Guests</h3>
            <p className="detail-value">
              {bookingData.guests}{" "}
              {bookingData.guests === 1 ? "Person" : "People"}
            </p>
          </div>

          {/* Special Requests */}
          {bookingData.specialRequests && (
            <div className="detail-section">
              <h3 className="detail-label">Special Requests</h3>
              <p className="detail-value">{bookingData.specialRequests}</p>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="info-box">
          <h3 className="info-title">Important Information</h3>
          <ul className="info-list">
            <li>• Please arrive 10 minutes before your scheduled time</li>
            <li>
              • Your table will be held for 15 minutes after reservation time
            </li>
            <li>
              • For any changes, please contact us at least 2 hours in advance
            </li>
          </ul>
        </div>

        {/* Download/Share Buttons */}
        <div className="button-container">
          <button className="button secondary">Download</button>
          <button className="button primary">Share</button>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: rgb(255, 247, 237);
          padding: 1rem;
        }

        .confirmation-card {
          background-color: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          width: 100%;
          max-width: 28rem;
        }

        .icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .confirm-icon {
          width: 4rem;
          height: 4rem;
          color: rgb(34, 197, 94);
        }

        .header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .title {
          font-size: 1.5rem;
          font-weight: 700;
          color: rgb(154, 52, 18);
        }

        .subtitle {
          color: rgb(75, 85, 99);
          margin-top: 0.5rem;
        }

        .details-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .detail-section {
          border-bottom: 1px solid rgb(229, 231, 235);
          padding-bottom: 1rem;
        }

        .detail-label {
          font-size: 0.875rem;
          color: rgb(107, 114, 128);
          margin-bottom: 0.25rem;
        }

        .detail-value {
          font-size: 1.125rem;
          font-weight: 500;
        }

        .reservation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .info-box {
          margin-top: 2rem;
          background-color: rgb(255, 247, 237);
          border-radius: 0.5rem;
          padding: 1rem;
        }

        .info-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: rgb(154, 52, 18);
          margin-bottom: 0.5rem;
        }

        .info-list {
          font-size: 0.875rem;
          color: rgb(75, 85, 99);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .button-container {
          margin-top: 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .button {
          width: 100%;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s;
          cursor: pointer;
        }

        .button.primary {
          background-color: rgb(234, 88, 12);
          color: white;
          border: none;
        }

        .button.primary:hover {
          background-color: rgb(194, 65, 12);
        }

        .button.secondary {
          background-color: transparent;
          color: rgb(234, 88, 12);
          border: 1px solid rgb(234, 88, 12);
        }

        .button.secondary:hover {
          background-color: rgb(255, 247, 237);
        }

        @media (max-width: 640px) {
          .confirmation-card {
            padding: 1rem;
          }

          .title {
            font-size: 1.25rem;
          }

          .detail-value {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BookingConfirmation;
