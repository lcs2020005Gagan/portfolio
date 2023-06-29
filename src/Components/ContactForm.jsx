
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "whoisbl33h",
      "template1",
      e.target,
      "JjC_Nnt4rUsjIsRtz"
    )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          alert('Thank you I will get back to you as soon as possible ! (:');
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };  

  return (
    <div
  style={{
    backgroundImage:
      "url(data:image/jpeg;base64,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)",
    width: "80%",
    height: "96%",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
  }}
>
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl  p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["Let's get in touch!"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-grayscale-200"
        >
          <div className="w-full flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Enter your First Name"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Enter your Last Name"
              id="lastname"
              type="text"
              name="from_last"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Enter your E-mail"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label>Message</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Enter your message..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="w-[100px] h-[50px] bg-primary-200 rounded-xl cursor-pointer "
              type="submit"
              value={!isSent ? 'Send' : 'Done!'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;