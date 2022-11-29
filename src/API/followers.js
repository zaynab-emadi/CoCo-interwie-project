import {TOP_FOLLOWERS_URL} from "./constant";
import {Axios} from "./http";

export const fetchTopFollowersRequest = async () => {
    try {
        const response = await Axios.get(
            `${TOP_FOLLOWERS_URL}`
        );
        return {
            data : response.data,
            total : response.headers["x-total-count"]
        };
    }catch (error){
        console.log("error" , error);
    }

}