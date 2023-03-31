import react from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";

// pages
import HomePage from "./Views/Home";
import NotFoundPage from "./Views/NotFound";

function ViewRoutes() {
  return (
    <Routes>
      {/* <Route element={<Layout />}></Route> */}
      <Route
        index
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFoundPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default ViewRoutes;
