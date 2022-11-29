import {TOP_ENGAGED_URL} from "./constant";
import {Axios} from "./http";

export const fetchTopEngagedPagesRequest = async () => {
    try {
        const response = await Axios.get(
            `${TOP_ENGAGED_URL}`
        );
        return{
            data : response.data,
            total : response.headers["x-total-count"],
        };
    }catch (error){
        console.log("error" , error);
    }
}