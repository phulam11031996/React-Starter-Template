import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <header>
        <nav>
          <h1><a href="/">Netflix Clone</a></h1>
        </nav>
      </header>
      <main>
        <section>
          <h2>Lost your way?</h2>
          <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
          <nav>
            <a href="/">Netflix Clone</a>
          </nav>
        </section>
        <div><span>Error Code <strong>NSES-404</strong></span></div>
      </main>
    </div>
  );
}
