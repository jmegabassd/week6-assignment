import { useState, useEffect, useRef } from "react";
import MainImage from "./components/MainImage";
import ThumbnailImage from "./components/ThumbnailImage";
import Buttons from "./components/Buttons";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [myState, setMyState] = useState(0);
  const thumbnailRefs = useRef({});

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

  useEffect(() => {
    if (myState && thumbnailRefs.current[myState.id]) {
      thumbnailRefs.current[myState.id].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [myState]);

  const onNextClick = () => {
    const currentIndex = items.findIndex((item) => item.id === myState.id);
    if (currentIndex < items.length - 1) {
      setMyState(items[currentIndex + 1]);
    }
  };

  const onPreviousClick = () => {
    const currentIndex = items.findIndex((item) => item.id === myState.id);
    if (currentIndex > 0) {
      setMyState(items[currentIndex - 1]);
    }
  };

  const handleThumbnailClick = (item) => {
    setMyState(item);
  };

  return (
    <>
      <MainImage item={myState} />
      <div className="thumb-cont" ref={thumbnailRefs}>
        {items.map((item) => (
          <ThumbnailImage
            key={item.id}
            item={item}
            onClick={handleThumbnailClick}
            isSelected={myState && myState.id === item.id}
            ref={(el) => (thumbnailRefs.current[item.id] = el)}
          />
        ))}
      </div>
      <Buttons onPreviousClick={onPreviousClick} onNextClick={onNextClick} />
    </>
  );
}
