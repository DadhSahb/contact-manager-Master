import React from 'react'

export default function AddContacts() {
    return (
        <div className='ui main'>
            <h2>Add Contacts</h2>
            <form className='ui form'>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder="Name" name='name' />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="email" placeholder="email" name='email' />
                </div>
                <button class="ui blue button" type="submit">Submit</button>
            </form>
        </div>
    )
}
