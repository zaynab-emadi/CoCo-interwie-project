import React, {useEffect} from 'react';
import {fetchTopEngagedPages, fetchTopFollowers} from "../redux/usersSlice";
import {useDispatch , useSelector} from "react-redux";

function List() {
    const dispatch = useDispatch();
    const {topEngaged , topFollowers } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchTopEngagedPages())
    },[dispatch]);
    useEffect(() => {
        dispatch(fetchTopFollowers())
    },[dispatch]);
    console.log("followers" , topFollowers);
    console.log(topEngaged);
    return (
        <div>
            list
        </div>
    );
}

export  {List};