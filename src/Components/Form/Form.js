import React from 'react';
import './Form.css'



export default function Form({ errorMessage, onChangeName, submit }) {





    return (
        <div className='froum'>
            <div className='forum-inputs'>
                <div className="label">Name:</div >
                <input name='name' type="text" className="input-field" placeholder="Name" defaultValue={''} onChange={onChangeName}></input>
                <div className="label">Phone Number:</div>
                <input name='phone' type="text" className="input-field" placeholder="000-000-0000" defaultValue={''} onChange={onChangeName} maxLength={12}></input>
                <div className="label">Birth Day:</div>
                <input name='b_day' type="text" className="input-field" placeholder="MM/DD/YYYY" defaultValue={''} onChange={onChangeName} maxLength={10}></input>
                <div className="label">Home Address:</div>
                <input name='address' type="text" className="input-field" placeholder="Home Address" defaultValue={''} onChange={onChangeName}></input>
                <div className="label">Todays Date:</div>
                <input name='todays_date' type="text" className="input-field" placeholder="MM/DD/YYYY" defaultValue={''} onChange={onChangeName} maxLength={10}></input>
                <div className="errorMessage">{errorMessage}</div>
                <button className="button" type="submit" onClick={submit}>Send Data</button>
            </div>
        </div>
    )

}
