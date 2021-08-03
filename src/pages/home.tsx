import React from "react";
import HomeTopSection from "../components/home/top-section/HomeTopSection";
import { Button, Container } from "@material-ui/core";
import HomePageHeader from "../components/home/header/HomePageHeader";
import Footer from "../components/home/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="top-section">
        <Container maxWidth="xl">
          <div className="home-logo-section">
            <HomePageHeader />
            <Button
              className="demo-button"
              variant="contained"
              color="secondary"
              size="large"
              href="/"
            >
              VIEW DEMO
            </Button>
          </div>
          <Container maxWidth="xl">
            <HomeTopSection />
          </Container>
        </Container>
      </div>
      <div>
        <Container className="footer-container">
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Home;
