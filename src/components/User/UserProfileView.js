import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './UserProfileView.css';
import { fetchSingleUserData } from '../../apiService/userService';
import Loader from '../loader/Loader';

export default function UserProfileView() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const { userId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await fetchSingleUserData(`users/${userId}`);
                setUser(data);
            } catch (error) {
                console.error('Error in UserProfileView:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchUser();
    }, [userId])

    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className="full-page-container">
            <div className="content-container">
                {!loading ? (
                    <div className="user-profile-view">
                        <div className="user-image">
                            <img src={user?.image} alt={user?.firstName} />
                        </div>

                        <div className="user-details">
                            <h1>{user?.firstName} {user?.maidenName}</h1>
                            <p>Gender: {user?.gender}</p>
                            <p>Phone: {user?.phone}</p>
                            <p>Birth Date: {user?.birthDate}</p>
                            <p>Address: {user?.address?.address}</p>
                            <p>User Agent: {user?.userAgent?.length > 30 ? `${user?.userAgent?.slice(0, 30)}..` : user?.userAgent}</p>
                            <p>Email: {user?.email}</p>
                        </div>
                        <button className="go-back-button" onClick={goBack}>
                            Go Back
                        </button>
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );

}
