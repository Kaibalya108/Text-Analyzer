import React, { useState } from 'react';

export default function TextArea(props) {
  // let makeBorder = {
  //   border: '1px solid black'
  // }
  const [empty, setEmpty] = useState(null);
  setTimeout(() => {
    setEmpty(null);
  },3500)
  const toUpperCase = (e) => {
    e.preventDefault();
    let upr = document.getElementById('textBox');
    if (upr.value === '') {
      setEmpty(true); // Set state to indicate an empty textarea
    } else {
      setEmpty(false); // Reset state
      let newText1 = text.toUpperCase();
      setText(newText1);
    }
  };
  const toLowerCase = (e) => {
    e.preventDefault();
    let upr = document.getElementById('textBox');
    if (upr.value === '') {
      setEmpty(true); // Set state to indicate an empty textarea
    } else {
      setEmpty(false); // Reset state
      let newText1 = text.toLowerCase(); // Corrected toLowerCase function
      setText(newText1);
    }
  };
  
  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log("On Change");
  };
  const calculateWordCount = () => {
    // Trim the text to remove leading and trailing spaces
    const trimmedText = text.trim();
    // Check if the trimmed text is empty
    if (trimmedText === '') {
      return 0;
    }
    // Split the trimmed text by spaces and count the words
    return trimmedText.split(/\s+/).length;
  };
  const clearText = (e) => {
    e.preventDefault();
    let upr = document.getElementById('textBox');
    if (upr.value === '') {
      setEmpty(true); // Set state to indicate an empty textarea
    } else {
      setEmpty(false); // Reset state
      setText(' ');
    }
  }
  const handleCopy = (e) => 
  {
    e.preventDefault();
    let txt = document.getElementById("textBox");
    if (txt.value === '') {
      setEmpty(true); // Set state to indicate an empty textarea
    } else {
      txt.select();
    txt.setSelectionRange(0,txt.length);
    navigator.clipboard.writeText(txt.value);
    window.alert("Text copied to clipboard")
    }
    
    
  }
  const handleSpace = (e) =>
  {
    e.preventDefault();
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));
  }
  
    
  const [text, setText] = useState('');

  return (
    <div>
      {empty && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          Text area is empty! Please enter some text.
          
        </div>
      )}
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            <h3 style={{color:props.mode === 'dark'?'white':'black'}}>{props.heading}</h3>
          </label>
          <textarea className="form-control" id="textBox" rows="5" placeholder="Enter text" value={text} style = {{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}}onChange={handleOnChange} ></textarea>
          <button className="btn btn-primary my-3" onClick={toUpperCase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={toLowerCase}>Convert to Lowercase</button>
          <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container">
          <h2 style={{color:props.mode === 'dark'?'white':'black'}}>Text Summary</h2>
          <p style = {{color:props.mode==='dark'?'white':'black'}}>{calculateWordCount()} words, {text.length} characters.</p>
          <p style = {{color:props.mode==='dark'?'white':'black'}}>{0.008 * calculateWordCount()} minutes to read.</p>
          <h2 style={{color:props.mode === 'dark'?'white':'black'}}>Preview</h2>
          <p style = {{color:props.mode==='dark'?'white':'black',border: '1px solid black',overflow:'hidden'}}  className="my-4">{text}</p>
        </div>
      </form>
      
    </div>
  );
  }