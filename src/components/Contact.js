import React, {useState} from 'react';

function Contact(props) {

    const [nameValue, setNameValue] = useState(props.contact.name);
    const [numberValue, setNumberValue] = useState(props.contact.number);

    const handleChangeNameValue = (e) => {
        setNameValue(e.target.value)
    }
    const handleChangeNumberValue = (e) => {
        setNumberValue(e.target.value)
    }
    return (
        <div className="contact">
            <div className="inputs">
                <input className="input" type="text" onChange={handleChangeNameValue} value={nameValue}/>
                <input className="input" type="text" onChange={handleChangeNumberValue} value={numberValue}/>
            </div>
            <button className="deleteBtn" onClick={() => props.handleDeleteContact(props.contact.id)}>Delete</button>
        </div>
    );
}

export default Contact;