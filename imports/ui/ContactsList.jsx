import React from "react";
import {ContactsCollection} from "../api/ContactsCollection";
import {useTracker} from "meteor/react-meteor-data";

export const ContactsList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch();
  });

  return (
    <div>
     <h3>Contacts List</h3>
     {contacts.map(contact =>( 
        <li key={contact.email} >{contact.name} - {contact.email}</li>
     ))}
    </div>
  )
}
