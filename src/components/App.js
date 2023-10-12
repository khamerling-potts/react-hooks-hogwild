import React, { useState } from "react";
import Nav from "./Nav";
import Porkers from "./Porkers";
import PorkerForm from "./PorkerForm";

import hogs from "../porkers_data";

function App() {
  const [allHogs, setAllHogs] = useState(hogs);

  function handleAddHog(hog) {
    console.log(hog);
    setAllHogs([...allHogs, hog]);
  }

  return (
    <div className="App">
      <Nav />
      <PorkerForm onAddHog={handleAddHog} />
      <Porkers hogs={allHogs} />
    </div>
  );
}

export default App;
