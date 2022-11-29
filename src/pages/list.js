import React, {useEffect} from 'react';
import {fetchTopEngagedPages, fetchTopFollowers} from "../redux/usersSlice";
import {useDispatch , useSelector} from "react-redux";
import "../styles/list.css";
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
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </>
        )
    }return (
        <>
            <div className="container">
                <div className="topEngaged">
                    <h2>Top Engaged</h2>
                </div>
                <div className="topFollowers">
                    <h2>Top Followers</h2>
                </div>
            </div>
        </>
    )
}

export  {List};