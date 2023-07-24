import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import FresherDashboardPlan from "./FresherDashboardPlan";
import "./index.css";

const Index = () => {
  return (
    <>
      <Navbar />
      <FresherDashboardPlan></FresherDashboardPlan>
      <Footer />
    </>
  );
};

export default Index;
