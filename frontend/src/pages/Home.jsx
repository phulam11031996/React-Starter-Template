import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <h1><Link to="/">Netflix Clone</Link></h1>
          <select id="language" name="language">
            <option value="english">English</option>
            <option value="espanol">Español</option>
          </select>
          <button>
            <Link to="/login">Sign In</Link>
          </button>
        </nav>
      </header>
      <main>
        <section>
          <h2>Unlimited movies, TV shows, and more</h2>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <Formik
            initialValues={{
              email: '',
              password: '', // Added a password field
              rememberMe: false, // Added a remember me field
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
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
              <Field
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="Password Confirm"
              />
              <button>
                <Link to="/login">Get Started</Link>
              </button>

            </Form>
          </Formik>
        </section>
        <section>
          <h2>Enjoy on your TV</h2>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </section>
        <section>
          <h2>Watch everywhere
          </h2>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </section>
        <section>
          <h2>Create profiles for kids
          </h2>
          <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.

          </p>
        </section>
        <section>
          <h2>Download your shows to watch offline
          </h2>
          <p>Only available on ad-free plans.

          </p>
        </section>
        <section>
          <h2>Frequently Asked Questions
          </h2>
          <details>
            <summary>
              What is Netflix?
            </summary>
            <p>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
              You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
            </p>
          </details>
          <details>
            <summary>
              How much does Netflix cost?
            </summary>
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.
            </p>
          </details>
          <details>
            <summary>
              Where can I watch?
            </summary>
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.            </p>
          </details>
          <details>
            <summary>
              How do I cancel?
            </summary>
            <p>
              Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </p>
          </details>
          <details>
            <summary>
              What can I watch on Netflix?
            </summary>
            <p>
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.            </p>
          </details>
          <details>
            <summary>
              Is Netflix good for kids?
            </summary>
            <p>
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
              Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
            </p>
          </details>
        </section>      </main>
      <footer>
        <p>Questions? Call <a href="tel:1-800-000-0000">1-800-000-0000</a></p>
        <nav>
          <ul>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Investor Relations</Link></li>
            <li><Link to="/">Help Center</Link></li>
            <li><Link to="/">Account</Link></li>
            <li><Link to="/">Media Center</Link></li>
            <li><Link to="/">Investor Relations</Link></li>
            <li><Link to="/">Jobs</Link></li>
            <li><Link to="/">Netflix Shop</Link></li>
            <li><Link to="/">Redeem Gift Cards</Link></li>
            <li><Link to="/">Buy Gift Cards</Link></li>
            <li><Link to="/">Ways to Watch</Link></li>
            <li><Link to="/">Terms of Use</Link></li>
            <li><Link to="/">Privacy</Link></li>
            <li><Link to="/">Cookie Preferences</Link></li>
            <li><Link to="/">Corporate Information</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">Speed Test</Link></li>
            <li><Link to="/">Legal Notices</Link></li>
            <li><Link to="/">Only on Netflix</Link></li>
            <li><Link to="/">Do Not Sell or Share My Personal Information</Link></li>
            <li><Link to="/">Ad Choices</Link></li>
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
}

export default Home;
