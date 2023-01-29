import { useNavigate  } from 'react-router-dom';
import { Fragment, useState } from 'react';

export default function UserDetails() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const navigate = useNavigate();
    console.log(user);
    
    const logOut = () => {
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
        localStorage.removeItem("loggedInUser");
        navigate('/');
    };

    const [follower,setFollower] = useState("0")
    const [following,setFollowing] = useState("0")

    const toggleFollower = () => {
        if(follower == "0") {
            setFollower("1")
        }
        else {
            setFollower("0")
        }
    }

    const toggleFollowing = () => {
        if(following == "0") {
            setFollowing("1")
        }
        else {
            setFollowing("0")
        }
    }

    const FollowerList = () => {
        return (
            <Fragment>
            <h4>Himanshu <button>Remove follower</button></h4>
            <h4>Ram<button>Remove follower</button></h4>
            <h4>Goyal<button>Remove follower</button></h4>
            <h4>Harish<button>Remove follower</button></h4>
            </Fragment>
        )
    }

    const FollowingList = () => {
        return (
            <Fragment>
            <h4>Riya<button>Unfollower</button></h4>
            <h4>Anjali<button>Unfollower</button></h4>
            <h4>Priya<button>Unfollower</button></h4>
            <h4>shruti<button>Unfollower</button></h4>
            <h4>akshita<button>Unfollower</button></h4>
            </Fragment>
        )
    }

    return (
        <div className='container' align='center'>
            <br></br><br></br><br></br>
            Name<h3>{user.FirstName + " " + user.LastName + "(" + user.Username + ")"} </h3>
            <br></br>
            Email <h3>{user.Email}</h3>
            <br></br>
            Age <h3>{user.Age}</h3>
            <br></br>
            Contact Number <h3>{user.ContactNumber}</h3>
            <br></br>
            Followers:  <h3> 4 </h3>
            <button onClick={() => {toggleFollower()}}> View Followers </button>
            {follower == "1" && FollowerList()}
            <br></br>
            Following: <h3> 5</h3>
            <button onClick={() => {toggleFollowing()}}> View Followers </button>
            {following == "1" && FollowingList()}
            <br></br>
            <button onClick={logOut} className="btn btn-primary">Log Out</button>
        </div>
    );
}