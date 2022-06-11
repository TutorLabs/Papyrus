import { Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route
            path="/authentication"
            element={<Auth />}
            exact
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
