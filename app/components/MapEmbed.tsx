import React from "react";

const MapEmbed: React.FC = () => {
  return (
    <div className="w-full h-full p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1572841658203!2d73.77271007468785!3d20.00191242225461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb013af2e74b%3A0xb9aaaaa7d9b7f141!2sGunwant%20Medicals%20%7C%20Best%20Medical%20Store!5e0!3m2!1sen!2sin!4v1739304258250!5m2!1sen!2sin"
        width="100%"
        height="550"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="px-10 py-10"
      />
    </div>
  );
};

export default MapEmbed;
