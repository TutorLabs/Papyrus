import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Auth from "./pages/Auth";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/authentication" element={<Auth />} exact></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
