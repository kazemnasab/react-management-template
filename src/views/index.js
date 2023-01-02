import React, { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const BakerHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./baker/index")
);

const DonationHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./donation/index")
);


function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/baker/*" element={<BakerHome />} />
        <Route path="/donation/*" element={<DonationHome />} />
      </Routes>
    </Suspense>
  );
}

export default Index;
