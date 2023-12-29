import React from 'react'
import { Link } from 'react-router-dom'

export default function UserListingPage({ id, firstName, gender, image, phone, birthDate, address, maidenName, userAgent, email }) {
    return (
        <div><Link to={`/user/${id}`}>UserListingPage</Link></div>
    )
}
