import React, { useState } from 'react'

export default function AddContacts(props) {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);

    const add = (e) => {
        e.preventDefault();
        if (name === "" && email === "") {
            alert("Input fields are manditory!")
            return
        }
        props.addContactHandler(name, email)
        console.log(e.target.value)
    }
    return (
        <div className='ui main'>
            <h2>Add Contacts</h2>
            <form className='ui form' onSubmit={add}>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder="Name" name='name' onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="email" placeholder="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <button class="ui blue button" type="submit">Submit</button>
            </form>
        </div>
    )
}
