import axios from "axios";
import {BASE_URL} from "./constant";

export const Axios = axios.create({baseURL : BASE_URL});