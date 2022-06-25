import "./Apply.scss";

import Header from "../components/layout/Header";
import ApplyBox from "../components/apply/ApplyBox";
import Filter from "../components/apply/Filter";

export default function Apply() {
  return (
    <div className="apply">
      <Header title="Apply" subtitle="Apply to postings which suit you" />
      <Filter/>
      <ApplyBox
        img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        name="Inqiyad Patwary"
        school="Mastermind"
        subjects="English, Mathematics, Biology, Chemistry, Bangla, Science, Computer Science"
        locations="Dhanmondi, Gulshan, Banani"
        salary="6,000-15,000"
        days="3"
      />
      <ApplyBox
        img="https://www.w3schools.com/css/trolltunga.jpg"
        name="Mahzabin Rashid"
        school="Sunnydale"
        subjects="English, Mathematics, Biology, Chemistry"
        locations="Dhanmondi, Gulshan, Banani"
        salary="6,000-15,000"
        days="5"
      />
    </div>
  );
}
