import "./Buttons.css";

export default function Buttons({ onPreviousClick, onNextClick }) {
  return (
    <>
      <button id="left-btn" className="btn" onClick={onPreviousClick}>
        &laquo;
      </button>
      <button id="right-btn" className="btn" onClick={onNextClick}>
        &raquo;
      </button>
    </>
  );
}
