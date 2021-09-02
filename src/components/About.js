import React from 'react'

export default function About(props) {

    const myStyle = {
        backgroundColor: props.mode==="light" ? "white" : "#343a40",
        color : props.mode === "light" ? "black" : "white",
        border : "1% solid",
        borderColor : props.mode === "light" ? "#343a40" : "white"

    }

    
    return (
        <div className="container mt-3 pb-3" style={{backgroundColor: props.mode==="light" ? "white" : "#343a40",
        color : props.mode === "light" ? "black" : "white"
        }}>
            <h2 className="my-2">About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>TextUtils is a utility which can be used to analyze your text efficiently. </strong> 
                            You can manipulate your text in the way you want. You can convert the lowercase text to uppercase text, uppercase text to lowercase text, you can remove extra spaces from your text, extra email ids from the text if any, copy you text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is free to use. You can perform all the operations on your text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This application works in any browser like Google Chrome, Mozilla Firefox, Microsoft Edge, Internet Explorer, etc. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
