import "./App.css";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IntlProvider } from "react-intl";
import AppLocale from "./lang";
import { defaultLocale } from "constants/defaultValues";
import { configureStore } from "./redux/store";
import { Provider } from 'react-redux';
import { getCurrentUser } from "helpers/Utils";

const ViewHome = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./views")
);

function App() {
  const currentAppLocale = AppLocale[defaultLocale];
  const currentUser = getCurrentUser();
  return (
    <Provider store={configureStore()}>
      <Suspense fallback={<div className="loading" />}>
        <IntlProvider
          locale={defaultLocale}
          messages={currentAppLocale.messages}
          test={'currentAppLocale.messages'}
          currentUser={currentUser}
        >
          <BrowserRouter basename="/">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="*" element={<ViewHome />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </IntlProvider>
      </Suspense>
    </Provider>
  );
}

export default App;
