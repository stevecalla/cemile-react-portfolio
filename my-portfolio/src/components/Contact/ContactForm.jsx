import React, { useState } from 'react';
import './ContactForm.css'
import SocialMedia from '../SocialMedia/SocialMedia';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setSubmitted(true);
  
      setName('');
      setEmail('');
      setMessage('');
    };
    return (
        <div className="container mb-3">
            <div className="row">
                <section className="container col-xs-12 col-sm-8 col-sm-offset-2 col-xl-6 col-xl-offset-3 my-4">
                    <div className="container" style={{ width: '100%' }}>
                        <form
                            className=""
                            target="_self"
                            encType="multipart/form-data"
                            action="https://formkeep.com/f/52549012fb9c"
                            acceptCharset="UTF-8"
                            method="post"
                            onSubmit={handleSubmit}
                        >
                            <fieldset>
                                <center>
                                    <h2>Contact Me</h2>
                                </center>
                                <br />
                                <SocialMedia />
                                <div className="row">
                                    <div className="form-group col-xs-6" id="First_Name__div">
                                        <label htmlFor="First_Name">Your Name</label>
                                        <input
                                            type="text"
                                            name="First Name"
                                            id="First_Name"
                                            autoFocus="autofocus"
                                            className="form-control"
                                            value={name}
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="form-group col-xs-6" id="Email__div">
                                        <label title="required" htmlFor="Email">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="Email"
                                            id="Email"
                                            required="required"
                                            placeholder="youremail@gmail.com"
                                            className="form-control"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="form-group col-xs-12" id="Message__div">
                                        <label title="required" htmlFor="Message">
                                            Message *
                                        </label>
                                        <textarea 
                                        name="Message"
                                        id="Message" 
                                        required="required" 
                                        className="form-control"
                                        value={message}
                                        onChange={handleMessageChange}
                                        ></textarea>
                                        <small className="form-text text-muted">
                                            Please enter your message above
                                        </small>
                                        {submitted && (
                                            <div className="success-message mx-auto text-center mt-2">
                                                Form successfully submitted, thank you!
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <br />
                                <div style={{ opacity: 0, position: 'absolute', top: 0, left: '-5000px', height: 0, width: 0 }}>
                                    <label htmlFor="subscribe_52549012fb9c_44817"></label>
                                    <input
                                        name="subscribe_52549012fb9c_44817"
                                        defaultValue=""
                                        tabIndex="-1"
                                        autoComplete="off"
                                        type="email"
                                        id="email_subscribe_52549012fb9c_44817"
                                        placeholder="Your email here"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <input type="submit" defaultValue="Submit" className="btn btn-block button-gray" data-disable-with="Submit" />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ContactForm;
