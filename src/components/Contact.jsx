import { useState } from 'react';

export default function Contact() {


  return (
    <section
      id="contact"
      className="py-5 px-4 px-md-5"

    >
      <div className="container-lg">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h2 className="display-5 fw-bold text-white mb-4">Contact us!</h2>
            <p className="text-gray-400 fs-5">
              We would love to hear from you!
            </p>
          </div>
          <div className="col-md-6">
            <form >
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    style={{
                      backgroundColor: '#1f2937',
                      borderColor: '#374151',
                      color: '#fff',
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    style={{
                      backgroundColor: '#1f2937',
                      borderColor: '#374151',
                      color: '#fff',
                    }}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  style={{
                    backgroundColor: '#1f2937',
                    borderColor: '#374151',
                    color: '#fff',
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className="form-control"
                  style={{
                    backgroundColor: '#1f2937',
                    borderColor: '#374151',
                    color: '#fff',
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-custom w-100 fw-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
