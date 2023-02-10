import "./BlueSection.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function BlueSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="blue_section">
      <p className="title">{t('Ready to learn?')}</p>
      <p className="content">
        {t('Join us now by clicking the link below')}
      </p>
      <div className="button_container">
        <button
          className="button"
          onClick={() => navigate("/signup")}
        >
          {t('Start learning')}
        </button>
      </div>
    </div>
  );
}
