import React, { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


const AppHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./app/index")
);

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./user/index")
);

function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/app/*" element={<AppHome />} />
        <Route path="/user/*" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default Index;
