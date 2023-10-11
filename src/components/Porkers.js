import React, { useState } from "react";
import PorkerTile from "./PorkerTile";
import PorkerFilter from "./PorkerFilter";

function Porkers({ hogs }) {
  const [greasedFilter, setGreasedFilter] = useState("All");
  const [sortFilter, setSortFilter] = useState("none");

  function handleGreasedFilterChange(event) {
    console.log("grease filter changed to ", event.target.value);
    setGreasedFilter(event.target.value);
  }

  function handleSortFilterChange(event) {
    console.log("sort filter changed to ", event.target.value);
    setSortFilter(event.target.value);
  }

  const hogsToDisplay = hogs.filter((hog) => {
    return greasedFilter === "All" || `${hog.greased}` === greasedFilter;
  });
  hogsToDisplay.sort((a, b) => {
    if (sortFilter === "none") return 0;
    if (a[sortFilter] > b[sortFilter]) {
      return 1;
    }
    return -1;
  });
  console.log(hogsToDisplay);

  const tiles = hogsToDisplay.map((hog) => (
    <PorkerTile key={hog.name} hog={hog} />
  ));

  return (
    <>
      <PorkerFilter
        onGreasedFilterChange={handleGreasedFilterChange}
        onSortFilterChange={handleSortFilterChange}
      />
      <div className="ui grid container" style={{ marginTop: "20px" }}>
        {tiles}
      </div>
    </>
  );
}

export default Porkers;
