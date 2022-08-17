import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navigation/Navbar";
import Footer from "./components/layout/Footer";
import Error from "./components/ui-components/Error";
import Snackbar from "./components/ui-components/Snackbar";
import Notifications from "./pages/Notifications";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Verify from "./pages/Verify";
import StudentHome from "./pages/StudentHome";
import TutorHome from "./pages/TutorHome";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Apply from "./pages/Apply";
import Applied from "./pages/Applied";
import Profile from "./pages/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";
import TutorInfo from "./pages/TutorInfo";

function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Error />
      <Snackbar />
      <main>
        <Routes>
          <Route path="/studenthome" element={<StudentHome />} exact></Route>
          <Route element={<PrivateRoutes correctRole="student" />}>
            <Route path="/create" element={<Create />} exact></Route>
           
            <Route path="/applied/:id" element={<Applied />} exact></Route>
            <Route path="/edit/:id" element={<Edit />} exact></Route>
            <Route path="/tutor/:id" element={<TutorInfo />} exact></Route>
          </Route>
          <Route element={<PrivateRoutes correctRole="tutor" />}>
            <Route path="/profile" element={<Profile />} exact></Route>
            <Route path="/apply" element={<Apply />} exact></Route>
            <Route path="/tutorhome" element={<TutorHome />} exact></Route>
          </Route>
          <Route path="/" element={<Landing />} exact></Route>
          <Route
            path="/notifications"
            element={<Notifications />}
            exact
          ></Route>
          <Route path="/signup" element={<SignUp />} exact></Route>
          <Route path="/signin" element={<SignIn />} exact></Route>
          <Route path="/verify" element={<Verify />} exact></Route>
        </Routes>
      </main>
      <footer>
        {location.pathname !== "/signup" &&
          location.pathname !== "/signin" &&
          location.pathname !== "/verify" && <Footer />}
      </footer>
    </div>
  );
}

export default App;
