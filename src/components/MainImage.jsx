import { useState } from "react";
import "./MainImage.css";

export default function MainImage({ item }) {
  const [visable, setVisible] = useState(false);

  if (!item) {
    return null;
  }

  const handleImageClick = () => {
    setVisible(!visable);
  };

  return (
    <div className="main-image-cont">
      <img
        src={item.url}
        alt={item.alt}
        className="main-image"
        onClick={handleImageClick}
      />
      {visable && (
        <div id="more-inf">
          <p>{item.title}</p>
          <p>{item.alt}</p>
        </div>
      )}
    </div>
  );
}
