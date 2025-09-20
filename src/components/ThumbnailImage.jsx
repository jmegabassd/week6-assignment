import "./ThumbnailImage.css";

export default function ThumbnailImage({ item, onClick, isSelected, ref }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(item);
    }
  };
  return (
    <img
      onClick={() => onClick(item)}
      onKeyDown={handleKeyDown}
      src={item.url}
      alt={item.alt}
      className={`thumbnail-item ${isSelected ? "selected" : ""}`}
      tabIndex="0"
      ref={ref}
    />
  );
}
