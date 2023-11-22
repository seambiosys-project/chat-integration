import { BrowserRouter, Routes, Route } from "react-router-dom";

import History from "./pages/history";
import Chat from "./pages/chat";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<History />} path="/" />
        <Route element={<Chat />} path="/chat" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
