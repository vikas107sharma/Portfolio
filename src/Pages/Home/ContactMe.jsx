import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { TailSpin } from 'react-loader-spinner'; // Import the specific loader

export default function ContactMe() {
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions

    setLoading(true); // Set loading to true when form is submitted

    emailjs.sendForm('service_tlrhvu8', 'template_ezne1bq', e.target, 'uquteRQtf3HGqF5KH')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setLoading(false); // Set loading to false when submission is complete
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message.");
        setLoading(false); // Set loading to false when there's an error
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          I am currently on the lookout for new opportunities and would love to connect. Whether you have a question about my background, want to discuss potential roles, or just want to chat, please don’t hesitate to reach out. I'm excited to explore how I can contribute to your team or project!
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="text"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a Topic</span>
          <select id="choose-topic" className="contact--input text-md" name="topic">
            <option>Software engineer</option>
            <option>Full-stack developer</option>
            <option>Data analyst</option>
            <option>Other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn" disabled={loading}>
            {loading ? (
              <TailSpin
                color="#fff"
                height={20}
                width={20}
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
