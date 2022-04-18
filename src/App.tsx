import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
