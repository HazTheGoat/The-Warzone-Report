import axios from "axios";
import { httpOptions } from "../constants/http-options";
import { UserHeader } from "../types/http-request";

export const getProfile = ({ username, platform }: UserHeader) => {
  const options = {
    ...httpOptions,
    url: `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${username}/${platform}`,
  };

  return axios.request(options);
};
