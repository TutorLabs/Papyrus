import "./Questions.scss";
import Faq from "react-faq-component";
import { useTranslation } from "react-i18next";

export default function Questions() {
  const { t } = useTranslation();
  const data = {
    title: `${t("Frequently asked questions")}`,
    rows: [
      {
        title: `${t("How fast can I get a tutor?")}`,
        content:
          `${t("On average, it takes 24-48 hours to connect with a tutor, however, it can sometimes be faster. We understand the importance of finding a tutor as soon as possible and we make every effort to make the process as fast and seamless as possible. Once you create a posting looking for a tutor after signing up, you will see tutors applying to your posting from which you can connect with a tutor of your choosing")}`,
      },
      {
        title: `${t("Can you help me find a tutor?")}`,
        content:
          `${t("Yes, we can help you find a tutor. We understand how important it is to find the right tutor for your needs, and we are here to help. If you are looking for a tutor, you can email us at hello@tutorlab.io and we will get you started on the process")}`,
      },
      {
        title: `${t("Why did you start TutorLab?")}`,
        content:
          `${t("We started TutorLab because we noticed a gap in the market for a large-scale tutoring service that could efficiently connect students with qualified tutors. We had been receiving requests from parents who were struggling to find reliable tutors for their children, and at the same time, we were hearing from tutors who were having difficulty finding students. We saw an opportunity to bridge this gap by creating a platform that could streamline the process of finding the right tutor for each student, and vice versa. We wanted to create a service that would make it easier for parents to find the right tutors for their children and for tutors to find students who needed their help. And thus, this platform was born")}`,
      },
    ],
  };
  return (
    <div className="questions">
      <Faq data={data} />
    </div>
  );
}
