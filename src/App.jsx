import { useState, useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

import ViewRoutes from "./ViewRoutes";

function App() {
  useEffect(() => {
    // Initialize SAL
    sal();
  }, []);

  const [count, setCount] = useState(0);

  return <ViewRoutes />;
}

export default App;
