import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Verify from "./pages/Verify";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Apply from "./pages/Apply";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/signup" element={<SignUp />} exact></Route>
          <Route path="/signin" element={<SignIn />} exact></Route>
          <Route path="/verify" element={<Verify />} exact></Route>
          <Route path="/home" element={<Home />} exact></Route>
          <Route path="/create" element={<Create />} exact></Route>
          <Route path="/apply" element={<Apply />} exact></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
