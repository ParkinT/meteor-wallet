import React, {useState} from "react";
import {ContactsCollection} from "../api/ContactsCollection";

export const ContactForm = () => {

  const [name, setName] = useState( {initialState: ""});
  const [email, setEmail] = useState( {initialState: ""});
  const [imageURL, setImageURL] = useState( {initialState: ""} );

  const saveContact = () => {
    console.log({ name, email, imageURL});
    ContactsCollection.insert({ name, email, imageURL});
    setName("");
    setEmail("");
    setImageURL("");
  }
 
    return (
    <form>
      <div>
       <label htmlFor="name">
        Name
       </label>
       <input id="name"
           onChange={e => setName(e.target.value)}
           value={name}
           type="text" />
      </div>
       <div>
       <label htmlFor="email">
        Email
       </label>
       <input id="email" 
           onChange={e => setEmail(e.target.value)}
           value={email}
           type="email" />
      </div>
       <div>
       <label htmlFor="imageURL">
        Image URL
       </label>
       <input id="imageURL" 
           onChange={e => setImageURL(e.target.value)}
           value={imageURL}
           type="text" />
      </div>
      <div>
        <button type="button" onClick={saveContact}>Save Contact</button>
      </div>
    </form>
  )
}
