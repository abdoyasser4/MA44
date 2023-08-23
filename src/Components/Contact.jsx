import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../Styles/Contact.module.css";
export default function Contact(disp) {
  disp.visibility(true);
  const LoginNotify = (msg) => toast(msg);
  const navegate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name === "" || Email === "" || Msg === "") {
      LoginNotify("Pleasee Enter Your Message");
      return;
    }
    LoginNotify("Thank You");
    setTimeout(() => {
      navegate("/Home");
    }, 5000);
  };
  return (
    <div className={styles.contactSection}>
        <div
            className={styles.container}
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
        >
        <div className="alert alert-primary text-center">
            <h2>Contact Us</h2>
        </div>

        <form>
            <div class="form-outline mb-4">
            <input
              type="text"
              id="registerName"
              className={styles.inputField}
              placeholder="Full Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="form-outline mb-4">
            <input
              type="email"
              id="registerEmail"
              className={styles.inputField}
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
            <textarea
              className={styles.message}
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your Message"
              value={Msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>

          <Link
            className={styles.submit}
            to="/Home"
            onClick={handleSubmit}
          >
            {" "}
            Send Email
          </Link>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
