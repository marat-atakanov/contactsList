import React, {useState} from 'react';
import Contact from "./Contact";

function ContactsList(props) {

    const contactsList = [
        {
            id: Math.random(),
            name: "New Contact",
            number: "555-555-5555"
        },
        {
            id: Math.random(),
            name: "New Contact",
            number: "555-555-5555"
        }
    ]

    const [contacts, setContacts] = useState(contactsList);


    const handleAddContact = () => {
        setContacts([...contacts,
            {
                id: Math.random(),
                name: "New Contact",
                number: "555-555-5555"
            }])
    }

    const handleSortByName = () => {
        setContacts(contacts.sort((firstValue, secondValue ) => firstValue.name.localeCompare(secondValue.name)))
    }


    const handleDeleteContact = (index) => {
        setContacts(contacts.filter(( contact ) => contact.id !== index))
    }

    return (
        <div className="container">
            <h1>Contact List</h1>
            <div className="btns">
                <button className="addBtn" onClick={handleAddContact}>Add Contact</button>
                <button className="sortBtn" onClick={handleSortByName}>Sort by Name</button>
            </div>
            <div className={"contacts"}>
                {contacts.map((contact) =>
                    <Contact id={contact.id} contact={contact} handleDeleteContact={handleDeleteContact}/>
                )}
            </div>
        </div>
    );
}

export default ContactsList;