import React from "react";
import "./GalleryPage.css";

const images = ["./jb.jpeg", "./jb1.jpeg", "./bk.png", "./jb.jpeg"];

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="gallery-img"
            alt="Gallery of recent artwork"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
