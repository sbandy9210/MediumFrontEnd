import React from 'react';
import { useNavigate } from 'react-router-dom'

function Notification({ user, authenticated, notifications }) {

    let navigate = useNavigate()
    let mapNotification

    if(notifications){
        mapNotification = (
            notifications[0].map((notice) => {
                return <p key={notice.id}>Your blog <p className='notify-title' onClick={() => navigate(`/${notice.author_id}/blog/${notice.id}`)}>{notice.title}</p> has a new comment.</p>
            })
        )
    } 

    return (user && authenticated ) ?  (
        (notifications) ? (
            <div>
                <h3>Notifications</h3>
                {notifications[0].length > 0 ? mapNotification : <h4>You have no new notifications</h4>}
            </div>
        ) : (
            <p>loading</p>
        )
    ) : (
        <div className="SignIn">
            <h3>Oops! You must be signed in to access this page!</h3>
            <button className='signInButton' onClick={()=> navigate('/login')}>Sign In</button>
        </div>
    )
}

export default Notification;