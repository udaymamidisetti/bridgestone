import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const NewTireRework = lazy(() => import("../pages/NewTireRework"));
const ReworkSubmission = lazy(() => import("../pages/ReworkSubmission"));
const TwoCRework = lazy(() => import("../pages/TwoCRework"));
const UserManagement = lazy(() => import("../pages/UserManagement"));
const Reports = lazy(() => import("../pages/Reports"));

const configureRoute = [
  {
    path: "/",
    exact: true,
    element: <Dashboard />,
    private: true,
  },
  {
    path: "/newtirerework",
    exact: true,
    element: <NewTireRework />,
    private: true,
  },
  {
    path: "/reworksubmission",
    exact: true,
    element: <ReworkSubmission />,
    private: true,
  },
  {
    path: "/twocrework",
    exact: true,
    element: <TwoCRework />,
    private: true,
  },
  {
    path: "/usermanagement",
    exact: true,
    element: <UserManagement />,
    private: true,
  },
  {
    path: "/reports",
    exact: true,
    element: <Reports />,
    private: true,
  },
];

export default configureRoute;
