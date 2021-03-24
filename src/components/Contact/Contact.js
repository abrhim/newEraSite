import React, { useState } from "react";
import { sendEmail } from "./sendEmail";
export const Contact = () => {
  const [form, setForm] = useState({ email: null, message: null, name: null });

  const onChange = (input) =>
    setForm((f) => {
      return { ...f, [input.target.id]: input.target.value };
    });

  return (
    <div id="contact">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                      onChange={onChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                      onChange={onChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  onChange={onChange}
                  required
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button
                onClick={() => sendEmail(form)}
                className="btn btn-custom btn-lg"
                type="button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h4>Contact Info</h4>
            <p>
              <span>Address</span>4100 Prairie Ln,
              <br />
              Austin, TX, 78728
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>Phone</span>{" "}
              <a className="contactPhone" href="tel:5125060122">
                +1 512 506 0122
              </a>
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>Email</span> Neweracontractingg@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
