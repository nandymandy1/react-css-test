import { lazy } from "react";
import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  useRouteError,
} from "react-router-dom";

const DashboardLayout = lazy(() => import("@layouts/Dashboard"));

const Dashboard = lazy(() => import("@pages/Dashboard"));

const ErrorBoundary = () => {
  let error = useRouteError();

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="error-boundary-content">
          <h2 className="error-boundary-oops">Oops!</h2>
          <p className="error-boundary-error">
            {error.name} - {error.message}
          </p>
          <p className="error-boundary-message">
            We're sorry, but an unknown error occurred. Please try again later.
          </p>
        </div>
      </div>
    </>
  );
};

const RouterPaths = [
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Dashboard />,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Outlet />
        <ScrollRestoration />
      </>
    ),
    children: RouterPaths,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
