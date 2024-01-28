import React, { useState } from 'react';
import './components/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png'
import "./components/style.css"

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  return (
    
    <div className="box">


      <form onSubmit={handleSubmit}>
        <img src="./components/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" alt="" />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ad yaz bura......"
        />
        <button className='btn' type="submit">ADINI YAZDIR</button>
      </form>

      {<h1>{submittedValue}</h1>}
    </div>
  );
};

export default MyForm;
