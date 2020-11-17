import React, { Component, useState } from 'react';
import Social from '../components/Social';
import { useMediaQuery } from 'react-responsive';
import emailjs from 'emailjs-com';
import { db } from './Firebase';

//npm install emailjs-com --save

function Contact() {
    const [name, SetName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    function sendEmail(e) {
        e.preventDefault();
        db.collection('contact').add({
            name:name,
            email:email,
            subject:subject,
            message:message,

        })
        .then(() => {
            alert("Message has been Submitted");
        })
        .catch((error) =>{
            alert(error.message);
        });
        SetName("");
        setEmail("");
        setSubject("");
        setMessage("");
    
        emailjs.sendForm('service_6x6pm3u', 'template_7eu991h', e.target, 'user_3gINCvpf8lPhdGJCiDhhU')
          .then((result) => {
              console.log(result.text);
              alert("Message has been Submitted");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
return (
<div className="condiv">
<h1 className="subtopic">Contact Me</h1>
{/* <div className ="details">
    <h3>Email       :   sinovuyosolani96@gmail.com</h3>
    <h3>Instagram   :   @official_Solani</h3>
    <h3>Twitter     :   @Sinovuyo Solani</h3>
    <h3>LinkedIn    :   @Sinovuyo Solani</h3>
    <h3>Facebook    :   @Vuyo Solani</h3>
</div> */}

<form className="form" onSubmit={sendEmail}>
    {/* <label>Name</label> */}
    <input name="name" placeholder="Name" value={name} onChange={(e) => SetName(e.target.value)}/>
    <input name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input name="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
    <textarea name="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
    <button className="button">Submit</button>
</form> 

<Social />
</div>
);
}
export default Contact