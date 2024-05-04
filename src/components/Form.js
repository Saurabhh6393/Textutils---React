import React,{useState} from 'react'


export default function Form(props) {

  

  const handleUpClick = ()=>{
     //console.log("uppercase was clicked" + text)
     let newtext = text.toUpperCase();
     setText(newtext);
  }

  const handleLoClick = ()=>{
    //console.log("uppercase was clicked" + text)
    let newtext = text.toLowerCase();
    setText(newtext);
 }

 const handleClearClick = ()=>{
  //console.log("uppercase was clicked" + text)
  let newtext = '';
  setText(newtext);
}

const handleCopyClick = ()=>{
   var text = document.getElementById("myBox");
   text.select();
   text.setSelectionRange(0,9999);
   navigator.clipboard.writeText(text.value);
}

const handleExtraSpace = ()=>{
  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "))
}

  const handleOnChange = (event)=>{
     // console.log("on change");
      setText(event.target.value);

  }
  const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className='container'style= {{color:props.mode === "dark" ? "white" : "#042743"}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
      <textarea className="form-control"  value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode === "light" ? "white" : "#13466e" , color:props.mode === "dark" ? "white" : "#042743"}} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-3' style={{margin:5}} onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-3' style={{margin:5}} onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3 " style={{margin:5}} onClick={handleCopyClick}>Copy the text</button>
      <button className="btn btn-primary mx-3" style={{margin:5}} onClick={handleExtraSpace}>Removing Extra space</button>
      <button className="btn btn-primary mx-3 " style={{margin:5}} onClick={handleClearClick}>Clear text</button>
      
    </div>
    <div className='container my-3' style={{color:props.mode === "dark" ? "white" : "#042743"}}>
      <h4>Your text summary-</h4>
      <p>{text.split("/\s+/").filter((element)=>{return element.length !==0}).length} words and {text.length } characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes in read</p>
    </div>
    </>
  )
}
