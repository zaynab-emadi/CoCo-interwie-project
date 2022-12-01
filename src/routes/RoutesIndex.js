import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { List, Detail, NoMatch } from "../pages/index";

function RoutesIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:instagramId" element={<Detail />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesIndex;
