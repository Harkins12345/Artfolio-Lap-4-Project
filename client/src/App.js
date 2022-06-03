import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages";
import { default as Layout } from "./layouts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
