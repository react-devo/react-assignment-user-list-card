import React from 'react'
import { Link } from 'react-router-dom'
import './UserCardListing.css'

export default function UserListingPage({ id, firstName, gender, image, phone, birthDate, address, maidenName, userAgent, email }) {
    const dateObj = new Date(`${birthDate}`);

    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-GB', options);
    return (
        <div className="cardWrapper">
            <div className="cardItem">
                <div className={'cardHead'} style={{ background: `${gender === 'male' ? "hsl(205.47deg 75.14% 63.73%)" : "hsl(302.63deg 98.28% 77.25%)"}` }}>
                    <div className="profileImg">
                        <Link to={`/user/${id}`}>
                            <img src={image} alt="Profile" />
                        </Link>
                    </div>
                    <div className="cardDetail">
                        <h5>{firstName} {maidenName}</h5>
                        <p>
                            <span style={{fill:'#fff'}}>
                                <svg height={48} viewBox="0 0 48 48" width={48}><path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>
                            </span>
                            {address?.address}
                        </p>
                        <p>
                            <span style={{fill:'#fff'}}>
                                <svg viewBox="0 0 448 512"><path d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z" /></svg>
                            </span>
                            {formattedDate}
                        </p>
                    </div>
                </div>
                <p className="p-2">{userAgent?.length > 60 ? `${userAgent.slice(0, 60)}...` : userAgent}</p>
                <div className="cardBottom">
                    <p>
                        <span>
                            <svg height={48} viewBox="0 0 48 48" width={48}><path d="M0 0h48v48h-48z" fill="none" /><path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" /></svg>
                        </span>
                        {phone}
                    </p>
                    <p>
                        <span>
                            <svg style={{ enableBackground: 'new 0 0 24 24' }} version="1.1" viewBox="0 0 24 24" xmlSpace="preserve"><g id="info" /><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email" /></g></svg>
                        </span>
                        {email}
                    </p>
                </div>
            </div>
        </div>
    )
}
