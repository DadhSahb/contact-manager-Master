import React from 'react'
import user from "../images/user.png"
export default function ContactCard(props) {
    const { name, email, id } = props.contact;
    return (
        <div className='item'>
            <img className='ui avatar image' src={user} alt="userimage" />
            <div className='content'>
                <div className='header'>
                    {name}
                </div>
                <div>
                    {email}
                </div>
            </div>
            <i className='trash alternate outline icon' style={{ color: "red", marginTop: "15px", float: "right", fontSize: "2rem" }} />
        </div>
    )
}
