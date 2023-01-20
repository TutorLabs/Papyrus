import "./BlueSection.scss";
import { useTranslation } from "react-i18next";

export default function BlueSection() {
  const { t } = useTranslation();
  return (
    <div className="blue_section">
      <p className="title">{t('Ready to learn?')}</p>
      <p className="content">
        {t('Join our waitlist by clicking the link below')}
      </p>
      <div className="button_container">
        <button
          className="button"
          onClick={() => window.open("https://forms.gle/LoVWjKzL8NkXQ2XJ6")}
        >
          {t('Sign up for our waitlist')}
        </button>
      </div>
    </div>
  );
}
