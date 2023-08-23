import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import styles from "../Styles/Login.module.css";

export default function Login(props) {
  props.visibility(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginNotify = (msg) => toast(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      LoginNotify("Please Complete The Data");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem("Email", email);

      if (email === "Admin@gmail.com") {
        localStorage.setItem("isAdmin", "true");
      }

      LoginNotify("Login Successful");

      setTimeout(() => {
        navigate("/Welcome");
      }, 2500);
    } catch (err) {
      console.log("Error", err);
      LoginNotify("Login Failed, please register first");
      setTimeout(() => {
        navigate("/Signup");
      }, 3000);
    }
  };

  const forPass = (e) => {
    e.preventDefault();
    if (password === "") {
      LoginNotify("Please register again");
      return;
    }
  };

  return (
    <div className={styles.loginSection}>
      <div className={styles.container}>
        <h1 className={styles.titleH2}>
          Welcome to <span className={styles.titleSpan}>MA4</span>
        </h1>
        <ul className={styles.loginNav} id="ex1" role="tablist">
          <li className={styles.loginNavItem} role="presentation">
            <a
              className={styles.loginNavLink}
              id="tab-login"
              data-mdb-toggle="pill"
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </a>
          </li>
          <li className={styles.SignNavItem} role="presentation">
            <a
              className={styles.SignNavLink}
              id="tab-register"
              data-mdb-toggle="pill"
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >
              {" "}
              <Link to="/Signup" className={styles.SignLink}>
                Register
              </Link>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div className={styles.fieldContainer}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="loginName"
                  className={styles.inputInfo}
                  placeholder=" Email "
                />
              </div>

              <div className={styles.fieldContainer}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="loginPassword"
                  className={styles.inputInfo}
                  placeholder="Password"
                />
              </div>

              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <a href="/Home">
                    <Link className={styles.forgotPass} onClick={forPass}>
                      Forgot password
                    </Link>
                  </a>
                </div>
              </div>

              <button onClick={handleSubmit} className={styles.submit}>
                Sign in
              </button>

              <div>
                <p>
                  Not a member?{" "}
                  <Link to="/Signup" className={styles.forgotPass}>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
