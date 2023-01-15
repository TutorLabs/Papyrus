import "./BlueSection.scss";

export default function BlueSection() {
  return (
    <div className="blue_section">
      <p className="title">Ready to learn?</p>
      <p className="content">
        Let us introduce you to some tutors we think you'd like
      </p>
      <div className="button_container">
        <button
          className="button"
          onClick={() => window.open("https://mahzabin-rashid.com")}
        >
          Get help finding a tutor
        </button>
      </div>
    </div>
  );
}
