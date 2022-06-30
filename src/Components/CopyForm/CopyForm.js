import React from 'react'
import './CopyForm.css'



export default function CopyForm({ resultText }) {


    return (
        <div className="froum">
            <div>
                <div className='forum-results'>
                    <div className="label">Name:</div>
                    <input className="input-field" readOnly value={resultText.name || ''}></input>
                    <div className="label">Phone Number:</div>
                    <input className="input-field" readOnly value={resultText.phone || ''}></input>
                    <div className="label">Birth Day:</div>
                    <input className="input-field" readOnly value={resultText.b_day || ''}></input>
                    <div className="label">Home Address:</div>
                    <input className="input-field" readOnly value={resultText.address || ''}></input>
                    <div className="label">Todays Date:</div>
                    <input className="input-field" readOnly value={resultText.todays_date || ''}></input>
                </div>
            </div>
        </div>
    )
}

