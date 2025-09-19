import "./MainImage.css";

export default function MainImage({ item }) {
  if (!item) {
    return null;
  }

  return (
    <div className="main-image-cont">
      <img src={item.url} alt={item.alt} className="main-image" />
    </div>
  );
}
