import React from "react";
import PageHeader from "../components/Header";
import HomeTopSection from "../components/home/top-section/HomeTopSection";
import { Button, Container } from "@material-ui/core";

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
            <PageHeader />
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
      <div className="middle-section">
        <Container>
          <div></div>
        </Container>
      </div>
    </>
  );
};

export default Home;
