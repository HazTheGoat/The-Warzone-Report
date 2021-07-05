import React from "react";
import PageHeader from "../components/Header";
import HomeNavigationBar from "./../components/HomeNavigationBar";
import HomeTopSection from "./../components/HomeTopSection";

const Home = (users: any) => {
  return (
    <>
      <div className="home-header-section">
        <div className="home-logo-section">
          <PageHeader />
        </div>
        <div className="navigation-section">
          <HomeNavigationBar />
        </div>
      </div>

      <div className="top-section">
        <HomeTopSection />
      </div>
      <div className="middle-section"></div>
      <div className="bottom-section"></div>
    </>
  );
};

export default Home;
