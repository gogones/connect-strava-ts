import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import {AuthProvider} from "./context/Auth";
import Layout from "./components/Layout";
import PublicPage from "./page/public";
import LoginPage from "./page/login";
import RequireAuth from "./components/RequireAuth";
import ProtectedPage from "./page/protected";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}


