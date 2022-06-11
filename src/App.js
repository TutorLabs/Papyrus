import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Auth from "./pages/Auth";
import Verify from "./pages/Verify";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/authentication" element={<Auth />} exact></Route>
          <Route path="/verify" element={<Verify />} exact></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
