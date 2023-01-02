import "./App.css";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./views/AppLayout";

const ViewHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./views")
);

function App() {
  return (
    <AppLayout>
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="*" element={<ViewHome />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
