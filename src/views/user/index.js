import React, { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./login")
);


function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/user/login" replace />} />
      </Routes>
    </Suspense>
  );
}

export default Index;
