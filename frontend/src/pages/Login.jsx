import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav>
          <h1><a href="/">Netflix Clone</a></h1>
        </nav>
      </header>
      <main>
        <h2>Sign In</h2>
        <Formik
          initialValues={{
            email: '',
            password: '', // Added a password field
            rememberMe: false, // Added a remember me field
          }}
          onSubmit={async (values) => {
            // await new Promise((r) => setTimeout(r, 500));
            // alert(JSON.stringify(values, null, 2));
            navigate("/browse");
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign In</button>
            <label>
              <Field
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
              />
              Remember me
            </label>
            <a href="/">Need help?</a>
          </Form>
        </Formik>
        <section>
          New to Netflix Clone? <a href="/">Sign up now</a>.
        </section>
      </main>
      <footer>
        <p>Questions? Call <a href="tel:1-800-000-0000">1-800-000-0000</a></p>
        <nav>
          <ul>
            <li>
              <a href=""><span>FAQ</span></a>
            </li>
            <li>
              <a href=""><span>Netflix Clone Shop</span></a>
            </li>
            <li>
              <a href=""><span>Privacy</span></a>
            </li>
            <li>
              <a href=""><span>Corporate Information</span></a>
            </li>
            <li>
              <a href=""><span>Ad Choices</span></a>
            </li>
            <li>
              <a href=""><span>Help Center</span></a>
            </li>
            <li>
              <a href=""><span>Terms of Use</span></a>
            </li>
            <li>
              <a href=""><span>Cookie Preferences</span></a>
            </li>
            <li>
              <a href=""><span>Do Not Sell of Share My Personal Information</span></a>
            </li>
          </ul>
        </nav>
        <div>
          <label htmlFor="language">Select Language:</label>
          <select id="language" name="language">
            <option value="english">English</option>
            <option value="espanol">Español</option>
          </select>
        </div>
      </footer>
    </div>
  );
};

export default Login;
