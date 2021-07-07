import React from "react";
import HomeTopSection from "../components/home/top-section/HomeTopSection";
import { Button, Container } from "@material-ui/core";
import HomePageHeader from "../components/home/header/HomePageHeader";

const Home = () => {
  // const theme = createTheme({
  //   overrides: {
  //     // Style sheet name ⚛️
  //     MuiButton: {
  //       // Name of the rule
  //       text: {
  //         // Some CSS
  //         color: "white",
  //       },
  //     },
  //   },
  // });

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
              href="demo"
            >
              VIEW DEMO
            </Button>
          </div>
          <Container maxWidth="xl">
            <HomeTopSection />
          </Container>
        </Container>
      </div>
      <div className="middle-section"></div>
    </>
  );
};

export default Home;
