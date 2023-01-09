import React, { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const ViewHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./dashboard")
);

const CreateOrUpdate = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./createOrUpdate")
);

const Agent = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./agent")
);
const Fund = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./fund")
);

function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/fund/*" element={<Fund />} />
        <Route path="/agent/*" element={<Agent />} />
        <Route path="/home" element={<ViewHome />} />
        <Route path="/new" element={<CreateOrUpdate />} />
        <Route path="/edit/:id" element={<CreateOrUpdate />} />
        <Route path="/" element={<Navigate to="home" replace />} />
      </Routes>
    </Suspense>
  );
}

export default Index;
