import React from "react";

import { Route, Routes } from "react-router-dom";
import { Main, Login, Registr, Navbar } from "./component";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
      </Routes>
    </div>
  );
}

export default App;
