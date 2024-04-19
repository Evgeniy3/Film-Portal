import React from "react";
import { lazy, Suspense } from "react";
import "./style/app.scss";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/Header";
import ErrorFallBack from "./components/ErrorFallBack";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const FullFilmPage = lazy(() => import("./pages/FullFilmPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const FavFilmPage = lazy(() => import("./pages/FavFilmPage"));

function App() {

  return (
    <div className="wrapper">
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <Header />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/registration"
              element={
                <Suspense fallback={<Loader />}>
                  <RegistrationPage />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<Loader />}>
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="/favourite"
              element={
                <Suspense fallback={<Loader />}>
                  <FavFilmPage />
                </Suspense>
              }
            />
            <Route
              path="/film/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <FullFilmPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loader />}>
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
