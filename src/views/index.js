import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getCurrentUser } from "helpers/Utils";

const AppHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./app/index")
);

const User = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./user/index")
);

const Print = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./print/index")
);

function Index() {
  const currentUser = getCurrentUser();
  React.useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {currentUser && <Route path="/app/*" element={<AppHome />} />}
        {currentUser && <Route path="/print/*" element={<Print />} />}
        <Route path="/*" element={<Navigate to="/user" replace />} />
        <Route path="/user/*" element={<User />} />
      </Routes>
    </React.Suspense>
  );
}

export default Index;