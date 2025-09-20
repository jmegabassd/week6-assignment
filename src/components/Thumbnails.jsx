import { useState, useEffect } from "react";
import "./Thumbnails.css";
import MainImage from "./MainImage";
import ThumbnailImage from "./ThumbnailImage";

export default function Thumbnails() {
  const [items, setItems] = useState([]);
  const [myState, setMyState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_FROG_API);
      const data = await response.json();
      setItems(data);
      if (data.length > 0) {
        setMyState(data[0]);
      }
      console.log(data);
    }
    fetchData();
  }, []);

  const handleThumbnailClick = (item) => {
    setMyState(item);
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
            isSelected={myState.id === item.id}
          />
        ))}
      </div>
    </>
  );
}
