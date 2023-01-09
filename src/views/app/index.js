import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";

const BreadHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./bread/index")
);

const DonationHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./donation/index")
);

const SettingHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./setting/index")
);

const AgentHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./agent/index")
);

const InterfaceHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./interface/index")
);


function Index() {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/bread/*" element={<BreadHome />} />
          <Route path="/donation/*" element={<DonationHome />} />
          <Route path="/setting/*" element={<SettingHome />} />
          <Route path="/agent/*" element={<AgentHome />} />
          <Route path="/interface/*" element={<InterfaceHome />} />
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
