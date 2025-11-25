import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import Places from "./places/pages/Places";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />

        <Route path="/places" element={<Places />} />
      </Routes>
    </Router>
  );
};

export default App;
