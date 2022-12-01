import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../redux/detailSlice";
import Loader from "../layouts/loader";
import "../styles/detail.css";


function Detail() {
  const { instagramId } = useParams();
  console.log(instagramId);
  const dispatch = useDispatch();
  const { detail, loading } = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchDetails(instagramId));
  }, [dispatch, instagramId]);
  console.log(detail);
  const {
    fullName,
    avgComment,
    avgLike,
    followerCount,
    followingCount,
    postPerDay,
    profilePic,
    totalPost,
    engagement,
    totalEngagement,
  } = detail;
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className="main">
        <div className="containerDetail">
          <div className="profile">
            <div className="picBorder">
            <img
              src={`${profilePic}`}
              alt={`${instagramId}`}
              className="profilePic"
            ></img>
            </div>
            <div className="infoBox">
              <div className="instagramId">{`@${instagramId}`}</div>
              <div className="fullName">{fullName}</div>
            </div>
          </div>
          <div className="table">
            <div className="column">
              <div className="topRow color3">
                <h5 className="whiteFont">Followers</h5>
                <h2 className="whiteFont">{followerCount}</h2>
              </div>
              <div className="downRow">
                <h5>Following</h5>
                <h2>{followingCount}</h2>
              </div>
            </div>
            <div className="column">
              <div className="topRow">
                <h5>Period Eng Rate</h5>
                <h2>{engagement}</h2>
              </div>
              <div className="downRow color2">
                <h5>Total Eng Rate</h5>
                <h2>{totalEngagement}</h2>
              </div>
            </div>
            <div className="column color1">
              <div>
                <h2>{postPerDay}</h2>
                <h5>Post Per day</h5>
              </div>
              <div>
                <h5>Total Posts</h5>
                <h2>{totalPost}</h2>
              </div>
            </div>
            <div className="column ">
              <div className="topRow color4">
                <h5>Avg Likes</h5>
                <h2>{avgLike}</h2>
              </div>
              <div className="downRow">
                <h5>Avg Comments</h5>
                <h2>{avgComment}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Detail };
