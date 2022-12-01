import React, {useEffect} from 'react';
import {fetchTopEngagedPages, fetchTopFollowers} from "../redux/usersSlice";
import {useDispatch , useSelector} from "react-redux";
import "../styles/list.css";
import Loader from "../layouts/loader";
import Row from "../components/row";

function List() {
    const dispatch = useDispatch();
    const {topEngaged , topFollowers , loading  } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchTopEngagedPages())
    },[dispatch]);
    useEffect(() => {
        dispatch(fetchTopFollowers())
    },[dispatch]);
    console.log("followers" , topFollowers);
    console.log(topEngaged);
    if(loading) {
        return (
            <>
                <Loader/>
            </>
        )
    }return (
        <>
            <div className="main">
            <div className="container">
                    <div className="columns">
                        <h2>Top Engaged</h2>
                        {topEngaged.map((item) => {
                            return (
                                <Row instagramId={item.instagramId}  profilePicUrl = {item.profilePicUrl} fullName ={item.fullName
                                }
                                />
                            )
                        })}
                    </div>
                    <div className="columns">
                        <h2>Top Followers</h2>
                        {topFollowers.map((item) => {
                            return (
                                <Row instagramId={item.instagramId}  profilePicUrl = {item.profilePicUrl} fullName ={item.fullName} />
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export  {List};