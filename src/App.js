import React, { useState } from 'react';
import CopyForm from './Components/CopyForm/CopyForm';
import Form from './Components/Form/Form';
import './App.css';



export default function App() {

  const [inputDataName, setInputDataName] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [resultText, setResultText] = useState("")
  const [hide, setHide] = useState(false)


  function onChangeName(e) {
    setInputDataName(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    setResultText(inputDataName);
    if (!inputDataName.name || !inputDataName.phone || !inputDataName.b_day || !inputDataName.address || !inputDataName.todays_date) {
        setErrorMessage("You have to complete the whole form!")
        setHide(false)
    } else if (resultText.name && resultText.phone && resultText.b_day && resultText.address && resultText.todays_date) {
        setErrorMessage(" ")
        setHide(true)
    }
}

  return (
    <div className="App">

      <Form submit={submit} onChangeName={onChangeName} errorMessage={errorMessage}/>
      {hide && <CopyForm resultText={resultText} />}

    </div>
  );
}

