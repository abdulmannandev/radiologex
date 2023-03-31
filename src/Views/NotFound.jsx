import react, { useState } from "react";
import './NotFound.scss'

function NotFoundPage() {
  const [title, setTitle] = ["title"];

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default NotFoundPage;
