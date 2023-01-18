import "./BlueSection.scss";

export default function BlueSection() {
  return (
    <div className="blue_section">
      <p className="title">Ready to learn?</p>
      <p className="content">
        Join our waitlist by clicking the link below
      </p>
      <div className="button_container">
        <button
          className="button"
          onClick={() => window.open("https://forms.gle/LoVWjKzL8NkXQ2XJ6")}
        >
          Sign up for our waitlist
        </button>
      </div>
    </div>
  );
}
