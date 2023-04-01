import react, { useState } from "react";
import MetaTags from "react-meta-tags";
import "./NotFound.scss";

function NotFoundPage() {
  const [title, setTitle] = ["404 | Radiologex"];

  return (
    <>
      <MetaTags>
        <title>{title}</title>
        <meta name="description" content="404 Page not found" />
      </MetaTags>

      <section className="not-found-page">
        <h1>404 Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </section>
    </>
  );
}

export default NotFoundPage;
