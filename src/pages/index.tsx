import axios from "axios";
import { useState } from "react";
import { usernames } from "../constants/username";

export default function Home() {
  const [usernames, setUsernames] = useState();

  return <h1>Apex sstats</h1>;
}

export async function getStaticProps() {
  const options: any = {
    method: "GET",
    url: "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/apxteknyc%232849/battle",
    headers: {
      "x-rapidapi-key": "b15cd7fb11msh5f19678ca3765d1p15b250jsnf609e8b4b1fa",
      "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return {
    props: {
      titleIdentities: null,
    },
  };
}
