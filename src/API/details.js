import { DETAILS_API } from "./constant";
import { Axios } from "./http";

export const fetchDetailsRequest = async (instagramId) => {
  try {
    const response = await Axios.get(`${DETAILS_API}/${instagramId}`);
    return {
      data: response.data,
    };
  } catch (error) {
    console.log("error", error);
  }
};
