import React from "react";

const MapComponent = () => {
  return (
    <div
      id="map"
      className="relative h-[350px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7812.599953980739!2d79.77393945869139!3d11.743904631053727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5498535c200417%3A0x333dccaaf263bdc1!2sDevanampattinam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1730445452856!5m2!1sen!2sin"
        width="100%"
        height="1080"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;