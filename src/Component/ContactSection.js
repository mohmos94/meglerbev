import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

import './ContactSection.css'

export default function ContactSection() {


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kizbwzp',
            'template_aw5srqi',
            e.target,
            'UoEF4-fB-baM4gVRr'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };




    return (
        <div className='contact-intro'>
            <h2 className='contact-form-header'>CONTACT US</h2>

            <div className='main'>
                <iframe src="https://maps.google.com/maps?q=skiferveien%2018&t=&z=17&ie=UTF8&iwloc=&output=embed" ></iframe>
                <form className='form-question' onSubmit={sendEmail}>
                    <label className='form-label'>
                        Full Name
                        <input className='form-text'
                            type="text"
                            name="from_name"
                            placeholder='Enter Name'
                        />
                    </label>

                    <label className='form-label'>
                        Phone
                        <input className='form-text'
                            type="tex"
                            name="phone"
                            placeholder='Enter Phone'
                        />
                    </label>

                    <label className='form-label'>
                        Mail
                        <input className='form-text'
                            type="text"
                            name="reply_to"
                            placeholder='Enter Mail'
                        />
                    </label>


                    <label className='form-label'>
                        Question
                        <textarea className='form-text'
                            type="text"
                            name="message"
                            placeholder='Enter Question'
                        />
                    </label>
                    <div className='form-label'>
                        <input className='button-3'
                            type="submit"
                            value="send message" />
                    </div>
                </form>
            </div>
        </div>
    );
}

