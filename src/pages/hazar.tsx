import { useEffect } from "react";
import fetch from "node-fetch";
import express from "express";
import { users } from "../constants/username";

var app = express();

const Test = ({ result }: any) => {
  useEffect(() => {
    // var requestOptions: any = {
    //   method: "GET",
    //   redirect: "follow",
    // };
    // fetch("https://s.activision.com/activision/login", requestOptions)
    //   .then((response) => console.log("first result", response.headers))
    //   .then((result) => console.log("second result", result))
    //   .catch((error) => console.log("error", error));
  }, []);
  return <h1>Hazar</h1>;
};

export async function getStaticProps() {
  //   var requestOptions: any = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   const result = await fetch(
  //     "https://s.activision.com/activision/login",
  //     requestOptions
  //   ).then((res) => res);
  //   const headers = result.headers;
  //   const token = result.headers.get("set-cookie");
  //   console.log(token);

  try {
    const API = require("call-of-duty-api")({ platform: "battle" });
    const test = await API.login("hazaraskari@gmail.com", "#VfTMC!%WanZ5B#");

    console.log("test: ", test);
    users.forEach(async (user) => {
      let data = await API.MWwz(user.username, user.platform);
      console.log(
        `${user.username} has this in KD: `,
        data.lifetime.mode.br.properties.kdRatio
      );
    });
  } catch (err) {
    console.log("error", err);
  }

  return {
    props: {},
  };
}

export default Test;
