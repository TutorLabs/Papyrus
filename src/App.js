import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navigation/Navbar";
import Error from "./components/ui-components/Error";
import Notifications from "./pages/Notifications";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Verify from "./pages/Verify";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Apply from "./pages/Apply";
import Applied from "./pages/Applied";
import Profile from "./pages/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <Error />
      <main>
        <Routes>
          <Route element={<PrivateRoutes correctRole = 'student' />}>
            <Route path="/create" element={<Create />} exact></Route>
            <Route path="/home" element={<Home />} exact></Route>
            <Route path="/applied/:id" element={<Applied />} exact></Route>
            <Route path="/edit" element={<Edit />} exact></Route>
          </Route>
          <Route element={<PrivateRoutes correctRole = 'tutor' />}>
            <Route path="/apply" element={<Apply />} exact></Route>
            <Route path="/profile" element={<Profile />} exact></Route>
          </Route>
          {/* <Route path="/create" element={<Create />} exact></Route> */}
          <Route path="/" element={<Landing />} exact></Route>
          <Route
            path="/notifications"
            element={<Notifications />}
            exact
          ></Route>
          <Route path="/signup" element={<SignUp />} exact></Route>
          <Route path="/signin" element={<SignIn />} exact></Route>
          <Route path="/verify" element={<Verify />} exact></Route>
          {/* <Route path="/home" element={<Home />} exact></Route>
          <Route path="/apply" element={<Apply />} exact></Route>
          <Route path="/applied/:id" element={<Applied />} exact></Route> */}
          {/* <Route path="/profile" element={<Profile />} exact></Route>
          <Route path="/edit" element={<Edit />} exact></Route> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
