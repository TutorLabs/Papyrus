import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navigation/Navbar";
import Footer from "./components/layout/Footer";
import Error from "./components/ui-components/Error";
import Snackbar from "./components/ui-components/Snackbar";
import Landing from "./pages/1Landing";
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
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const { signedIn } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.auth);

  return (
    <div>
      <Navbar />
      <Error />
      <Snackbar />
      <main>
        <Routes>
          <Route path="/signup" element={<SignUp />} exact></Route>
          <Route path="/signin" element={<SignIn />} exact></Route>
          <Route path="/verify" element={<Verify />} exact></Route>
          <Route element={<PrivateRoutes correctRole="student" />}>
            <Route path="/create" element={<Create />} exact></Route>
            <Route path="/studenthome" element={<StudentHome />} exact></Route>
            <Route path="/applied/:id" element={<Applied />} exact></Route>
            <Route path="/edit/:id" element={<Edit />} exact></Route>
          </Route>
          <Route element={<PrivateRoutes correctRole="tutor" />}>
            <Route path="/profile" element={<Profile />} exact></Route>
            <Route path="/apply" element={<Apply />} exact></Route>
            <Route path="/tutorhome" element={<TutorHome />} exact></Route>
          </Route>
          <Route
            path="/"
            element={
              signedIn && role === "student" ? (
                <StudentHome />
              ) : signedIn && role === "tutor" ? (
                <TutorHome />
              ) : (
                <Landing />
              )
            }
            exact
          ></Route>
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
