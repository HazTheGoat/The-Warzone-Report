import { Button, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import Card from "../../card";
import { promoUsers } from "../../../constants/promo-username";

const HomeTopSection = () => {
  const getTimeout = (index: number) => {
    return (index + 1) * 100;
  };

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Container className="left-text-container">
          <span className="left-box-heading">
            CREATE YOUR VERY <span className="bold">OWN BOARD</span> EXLUSIVELY
            WITH YOU AND YOUR FRIENDS
          </span>
          <Grid container justify="center">
            <div className="top-text-box">
              <span>
                CHOOSE BETWEEN A WIDE VARIETY OF
                <span className="bold"> EXCLUSIVE CARDS</span>
              </span>
            </div>
            <div className="top-text-box">
              <span>
                GET REWARDED WITH <span className="bold">UNIQUE BADGES</span>
              </span>
            </div>
            <div className="top-text-box">
              <span>
                <span className="bold">CUSTOMIZE</span> RANKS & BADGES JUST THE
                WAY YOU LIKE IT
              </span>
            </div>
          </Grid>
        </Container>
      </Grid>
      <Grid container justify="center">
        {promoUsers.map((user, index: number) => (
          <div key={index}>
            <Card user={user} timeout={getTimeout(index)} />
          </div>
        ))}
      </Grid>
      <Grid container lg={12} alignItems="center">
        <Button
          className="recruit-button"
          variant="contained"
          color="secondary"
          size="large"
          href="register"
        >
          TRY FOR FREE
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeTopSection;
