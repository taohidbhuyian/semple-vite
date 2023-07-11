import React, { useState } from 'react';
import Footer from './component/Footer';
import './App.css'


function Header({ title }) {
  return <h1 >{title}</h1>;
}

function Content() {
  const [enteredText, setEnteredText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(enteredText);
  };

  const handleTextAreaChange = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={enteredText}
        onChange={handleTextAreaChange}
        placeholder="Enter some text..."
      />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <h3>{displayedText}</h3>
    </div>
  );
}



function App() {
  const title = "My text Application";

  return (
    <>
      <Header title={title} />
      <Content/>
      <Footer/>
    </>
  )
}

export default App
