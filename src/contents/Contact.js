import React, { Component } from 'react';
import Social from '../components/Social';
import { useMediaQuery } from 'react-responsive';
import emailjs from 'emailjs-com';

//npm install emailjs-com --save

function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
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
    <input name="name" placeholder="Name"/>
    <input name="email" placeholder="Email"/>
    <input name="subject" placeholder="Subject"/>
    <textarea name="message" placeholder="Message"/>
    <button className="button">Submit</button>
</form>

<Social />
</div>
);
}
export default Contact