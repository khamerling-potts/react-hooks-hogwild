import React, { useState } from "react";
import Nav from "./Nav";
import Porkers from "./Porkers";

import hogs from "../porkers_data";

function App() {
  const [allHogs, setAllHogs] = useState(hogs);

  return (
    <div className="App">
      <Nav />
      <Porkers hogs={allHogs} />
    </div>
  );
}

export default App;
