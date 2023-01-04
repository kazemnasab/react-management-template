import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";

const BakerHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./baker/index")
);

const DonationHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./donation/index")
);

const SaleServiceHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./saleservice/index")
);

const SettingHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./setting/index")
);

const AgentHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./agent/index")
);


function Index() {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/baker/*" element={<BakerHome />} />
          <Route path="/donation/*" element={<DonationHome />} />
          <Route path="/saleservice/*" element={<SaleServiceHome />} />
          <Route path="/setting/*" element={<SettingHome />} />
          <Route path="/agent/*" element={<AgentHome />} />
          <Route
            path="/"
            element={<Navigate to="/app/donation/home" replace />}
          />
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default Index;
