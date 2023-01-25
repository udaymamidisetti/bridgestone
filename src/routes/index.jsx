import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";


import configureRoute from "./routes";

// loader
import Loader from "../common/Loader";
 import Dashboard from "../pages/Dashboard";
import NewTireRework from "../pages/NewTireRework";
import ReworkSubmission from "../pages/ReworkSubmission";
import TwoCRework from "../pages/TwoCRework";
import UserManagement from "../pages/UserManagement";
import Reports from "../pages/Reports";

const RoutesData = () => {
  return (
    <>
       <Routes>
        <Route
          exact={true}
          path={"/dashboard"}
          name={"Dashboard"}
          element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          exact={true}
          path={"/newtirerework"}
          name={"New Tire Rework"}
          element={
            <Suspense fallback={<Loader />}>
              <NewTireRework />
            </Suspense>
          }
        />
         <Route
          exact={true}
          path={"/reworksubmission"}
          name={"Rework Submission"}
          element={
            <Suspense fallback={<Loader />}>
              <ReworkSubmission />
            </Suspense>
          }
        />
         <Route
          exact={true}
          path={"/twocrework"}
          name={"2C rework"}
          element={
            <Suspense fallback={<Loader />}>
              <TwoCRework />
            </Suspense>
          }
        />
         <Route
          exact={true}
          path={"/usermanagement"}
          name={"UserManagement"}
          element={
            <Suspense fallback={<Loader />}>
              <UserManagement />
            </Suspense>
          }
        />
         <Route
          exact={true}
          path={"/reports"}
          name={"Reports"}
          element={
            <Suspense fallback={<Loader />}>
              <Reports />
            </Suspense>
          }
        />
      
      </Routes>

      
    </>
  );
};

export default RoutesData;
