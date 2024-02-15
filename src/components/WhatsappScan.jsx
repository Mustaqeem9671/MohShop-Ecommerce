// WhatsAppQRCode.js
import React from "react";
import "../styles/WhatsappScan.css";
import QRCode from "qrcode.react";

const WhatsappScan = () => {
  const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your actual phone number

  return (
    <div className="whatsapp-qr-section">
      <div className="whatsapp-text-section">
        <p>Connect with us</p>
        <h1>Join our community on WhatsApp!</h1>
      </div>
      <div className="qr-code-container">
        <QRCode value={`https://wa.me/${phoneNumber}`} />
        <p>
          Scan the above QR code or save +917533008522 to your contacts and say
          "HI" over WhatsApp
        </p>
      </div>
    </div>
  );
};

export default WhatsappScan;
