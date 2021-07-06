import { Button, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import Card from "../../card";

const HomeTopSection = () => {
  const users = [
    {
      avatar: "HazTheGoat",
      badges: ["pitbull"],
      data: {
        gulagKills: 44,
        weeklyAssists: 152,
        weeklyAvgLifeTime: 790.8953068592058,
        weeklyDamageDone: 219719,
        weeklyDamageTaken: 49748,
        weeklyDeaths: 185,
        weeklyDistanceTraveled: 31669887.771000005,
        weeklyHeadshotPercentage: 0.24155405405405406,
        weeklyKdRatio: 3.18,
        weeklyKills: 620,
        weeklyKillsPerGame: 6.434782608695652,
        weeklyMatchesPlayed: 90,
        weeklyWallbangs: 0,
      },
      rank: "god",
      username: "HazTheGoat",
      weeklyKdRatioTrend: 1,
      dateOfBirth: "1985-01-02",
    },
    {
      avatar: "SuperKriss",
      badges: ["martyr"],
      data: {
        gulagKills: 44,
        weeklyAssists: 152,
        weeklyAvgLifeTime: 790.8953068592058,
        weeklyDamageDone: 219719,
        weeklyDamageTaken: 49748,
        weeklyDeaths: 185,
        weeklyDistanceTraveled: 31669887.771000005,
        weeklyHeadshotPercentage: 0.24155405405405406,
        weeklyKdRatio: 2.65,
        weeklyKills: 450,
        weeklyKillsPerGame: 6.434782608695652,
        weeklyMatchesPlayed: 110,
        weeklyWallbangs: 0,
      },
      rank: "diamond",
      username: "SuperKriss",
      weeklyKdRatioTrend: -1,
      dateOfBirth: "1993-06-21",
    },
    {
      avatar: "Anders1337",
      badges: ["deadeye"],
      data: {
        gulagKills: 44,
        weeklyAssists: 152,
        weeklyAvgLifeTime: 790.8953068592058,
        weeklyDamageDone: 219719,
        weeklyDamageTaken: 49748,
        weeklyDeaths: 185,
        weeklyDistanceTraveled: 31669887.771000005,
        weeklyHeadshotPercentage: 0.24155405405405406,
        weeklyKdRatio: 2.13,
        weeklyKills: 390,
        weeklyKillsPerGame: 6.434782608695652,
        weeklyMatchesPlayed: 120,
        weeklyWallbangs: 0,
      },
      rank: "platinum",
      username: "Anders1337",
      weeklyKdRatioTrend: 1,
      dateOfBirth: "1993-05-01",
    },
  ];

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
                CHOOSE BETWEEN A WIDE VARIETY OF{" "}
                <span className="bold">EXCLUSIVE CARDS</span>
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
        {users.map((user, index: number) => (
          <div key={index}>
            <Card user={user} timeout={getTimeout(index)} />
          </div>
        ))}
      </Grid>
      <Grid lg={12} justify="center">
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
