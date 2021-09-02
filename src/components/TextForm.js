import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase !!!", "success" )
    }
    
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase !!!", "success" )
    }

    const handleClearClick = () => {
        setText('');
        setEmails([]);
        props.showAlert("Text cleared from text box", "success" )
    }

    const handleEmailExtract = () => {
        setEmails([]);
        let newEmail = text.split(/\s+/).filter(e => (e.includes('@') && e.includes('.')));
        console.log(newEmail);
        setEmails(emails => [...emails, newEmail]);
        if(newEmail.length === 0){
            props.showAlert("No emails found", "danger" )
        }else{
            props.showAlert("Find the extracted emails below", "success" )
        }
    }

    const handleCopy = () => {
        // let copiedText = document.getElementById('myBox');
        // copiedText.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success" )
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success" )
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    const [emails, setEmails] = useState([]);

    return (
        <>
        <div className='container my-4'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder="Enter you text here" onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode==="light" ? "#fff" : "#212529" , color : props.mode==="light" ? "#212529" : "#fff"}}></textarea>
            </div>
            <button disabled ={text.length === 0} className={`btn btn-${props.mode === "light" ? "secondary" : "dark"} mr-1 mb-1`} onClick= {handleUpClick}>Convert to uppercase</button>
            <button disabled ={text.length === 0} className={`btn btn-${props.mode === "light" ? "secondary" : "dark"} mr-1 mb-1`} onClick= {handleLoClick}>Convert to lowercase</button>
            <button disabled ={text.length === 0} className={`btn btn-${props.mode === "light" ? "secondary" : "dark"} mr-1 mb-1`} onClick= {handleClearClick}>Clear text</button>
            <button disabled ={text.length === 0} className={`btn btn-${props.mode === "light" ? "secondary" : "dark"} mr-1 mb-1`} onClick= {handleEmailExtract}>Extract email from text</button>
            <button disabled ={text.length === 0} className={`btn btn-${props.mode === "light" ? "secondary" : "dark"} mr-1 mb-1`} onClick= {handleCopy}>Copy Text</button>
            <button disabled ={text.length === 0} className={`btn btn-${props.mode === "light" ? "secondary" : "dark"} mr-1 mb-1`} onClick= {handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => (element.length !== 0)).length} words and {text.length === 0 ? 0 : text.length + 1 - text.split(/\s+/).filter((element) => (element.length !== 0)).length} characters</p>
            <p>{0.008 * (text.split(" ").filter((element) => (element.length !== 0)).length)} Minutes to read</p>
            <h4>Preview</h4>
            <p>{text.length > 0 ? text : "Enter some text in the text box to preview it here"}</p>
            <h4>Emails Present in the text</h4>
            <p>{emails.length > 0 ? emails.join(',') : 'No emails found'}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}


