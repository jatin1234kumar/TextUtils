import React, { useState } from 'react'

function Textbox(props) {

    const [text, setText] = useState('');
    const [pera, setPera] = useState('Nothing to preview!');

    const handelOnChange = (e)=>{
        setText(e.target.value)
    }
  
    const handelUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Text got upperCased", "success");
    }

    const handelDownClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Text got lowerCased", "success");
    }

    const clearText = ()=>{
        setText('');
        props.showAlert("Text got cleared", "success");
    }

    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text got copied", "success");
    }

    const preview = ()=>{
        setPera(text)
        props.showAlert("Text got previewed", "success");
    }

  return (
    <div className='container'>
        <div className="mb-3 mt-3">
            <h2>Enter text to Change it to lowerCase, upperCase, copy andy manymore!</h2>
            <textarea className="form-control" id="exampleFormControlTextarea1" style={{background: `${props.mode === "light" ? "white": "#212834"}`, color: `${props.mode === "light" ? "black": "white"}`}} rows="6" onChange={handelOnChange} placeholder='Enter text here!' value={text}></textarea>
            <button className="btn btn-primary mt-3" onClick={handelUpClick} type='submit'>convert to upperCase</button>
            <button className="btn btn-primary mt-3 ma" onClick={handelDownClick} type='submit'>convert to lowerCase</button>
            <button className="btn btn-primary mt-3 ma" onClick={copyText} type='submit'>copy text</button>
            <button className="btn btn-success mt-3 ma" onClick={preview} type='submit'>preview text</button>
            <button className="btn btn-danger mt-3 ma" onClick={clearText} type='submit'>clear text</button>
        </div>
        <h2>Your text summery :</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <div>
            <h2>Preview:</h2>
            <p>{pera}</p>
        </div>
    </div>
  )
}

export default Textbox
