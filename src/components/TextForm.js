import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    // setText("Enter Neewwwww text!!!!");
    const handlUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to UpperCase Successfully!", "success");

    } 
    const handlLowerClick = ()=>{
      let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lowercase Successfully!", "success");
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    } 
    const clearText = () =>{
      setText("");
      props.showAlert("Text Cleared Successfully!", "success")
    }
    const downloadFile = () => {
      const link = document.createElement("a");
      const content = text;
      const file = new Blob([content], { type: 'text/plain' });
      link.href = URL.createObjectURL(file);
      link.download = "sample.txt";
      link.click();
      URL.revokeObjectURL(link.href);
      props.showAlert("File Downloaded Successfully!", "success")
   };
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handlUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handlLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-3" onClick={downloadFile}>Download Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode === "dark" ? "white" : "black"}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes for Reading</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
