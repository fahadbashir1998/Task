import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const ProjectRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomePage></HomePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ProjectRoutes;
