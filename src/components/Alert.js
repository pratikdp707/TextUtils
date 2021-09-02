import React from 'react'

export default function Alert(props) {

    const capitalize = (text) => {
        let typeText = text.toLowerCase();
        return (typeText.charAt(0).toUpperCase() + typeText.slice(1));
    }

    return (
        <div className="container my-2" style ={{height:"50px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
                <strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}
            </div>}
        </div>
    )
}
