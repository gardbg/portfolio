import React, { useState } from 'react';

export default function Contact() {
    const [firstnameError, setfirstnameError] = useState(true);
    const [lastnameError, setlastnameError] = useState(true);
    const [emailError, setemailError] = useState(true);
    const [messageError, setmessageError] = useState(true);
    // eslint-disable-next-line
    const [name, setName] = useState(true);

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        // eslint-disable-next-line
        let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        switch (name) {
            case 'firstname':
                value !== "" ? setfirstnameError(false) : setfirstnameError(true);
                break;
            case 'lastname':
                value !== "" ? setlastnameError(false) : setlastnameError(true);
                break;
            case 'email':
                emailPattern.test(value) ? setemailError(false) : setemailError(true);
                break;
            case 'message':
                value !== "" ? setmessageError(false) : setmessageError(true);
                break;
            default:
                break;
        }
        setName(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <div className="container-fluid">
                <div className="hero-contact__section">
                </div>
            </div>
            <div className="container">
                <br />
                <h2>Contact Me..</h2>
                <br />
                <hr />
                <div className="row row-contactform">
                    <div class="col-md-5 contact-info mb-5 mb-lg-0">
                        <p><span><img src="https://img.icons8.com/pastel-glyph/54/000000/worldwide-location--v2.png" alt="icon" /></span> Sorgenfrigata 3, 0367 Oslo</p>
                        <p><span><img src="https://img.icons8.com/carbon-copy/54/000000/email.png" alt="icon" /></span>gardbachg@gmail.com</p>
                        <p><span><img src="https://img.icons8.com/wired/54/000000/nokia-3310.png" alt="icon" /></span> +47 455 147 70</p>
                        <br />
                        <hr />
                        <div className="contactIcons">
                           <a href="https://www.facebook.com/GardGronvik"><img src="https://img.icons8.com/carbon-copy/64/000000/facebook-new.png" alt="icon" /></a>
                           <a href="https://twitter.com/home"><img src="https://img.icons8.com/carbon-copy/64/000000/twitter.png" alt="icon" /></a>
                           <a href="https://www.linkedin.com/in/gard-bach-gr%C3%B8nvik-129859150/"><img src="https://img.icons8.com/carbon-copy/64/000000/linkedin.png" alt="icon" /></a>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit}>
                            <input type='text'
                                name='firstname'
                                onChange={handleChange}
                                className="form-control"
                                placeholder="John..."
                            />
                            <p className={(firstnameError) ? 'error' : 'error__hide'}>Please enter a firstName</p>
                            <br />
                            <input type='text'
                                name='lastname'
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Doe..."
                            />
                            <p className={(lastnameError) ? 'error' : 'error__hide'}>Please enter a Lastname</p>
                            <br />
                            <input type='text'
                                name='email'
                                onChange={handleChange}
                                className="form-control"
                                placeholder="johndoe@gmail.com..."
                            />
                            <p className={(emailError) ? 'error' : 'error__hide'}>Please enter Email</p>
                            <br />
                            <textarea
                                name='message'
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Please enter a message..."
                            />
                            <p className={(messageError) ? 'error' : 'error__hide'}>Please enter a message</p>
                            <br />
                            <input type="submit" disabled={firstnameError || lastnameError || emailError || messageError} className="btn btn-main" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
