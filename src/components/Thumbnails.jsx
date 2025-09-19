import { useState, useEffect } from "react";
import "./Thumbnails.css";
import MainImage from "./MainImage";

function ThumbnailImage({ item, onClick }) {
  return (
    <img
      onClick={() => onClick(item)}
      src={item.url}
      alt={item.alt}
      className="thumbnail-item"
    />
  );
}

export default function Thumbnails() {
  const [items, setItems] = useState([]);
  const [myState, setMyState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_FROG_API);
      const data = await response.json();
      setItems(data);
      // Set first image as default
      if (data.length > 0) {
        setMyState(data[0]);
      }
      console.log(data);
    }
    fetchData();
  }, []);

  const handleThumbnailClick = (item) => {
    setMyState(item); // Update the state when a thumbnail is clicked
  };

  return (
    <>
      <MainImage item={myState} />

      <div className="thumb-cont">
        {items.map((item) => (
          <ThumbnailImage
            key={item.id}
            item={item}
            onClick={handleThumbnailClick}
          />
        ))}
      </div>
    </>
  );
}
