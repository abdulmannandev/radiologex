import { useState } from "react";
import "./App.scss";

import ViewRoutes from './ViewRoutes'

function App() {
  const [count, setCount] = useState(0);

  return (
    <ViewRoutes />
  );
}

export default App;
