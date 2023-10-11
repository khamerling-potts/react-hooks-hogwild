import React, { useState } from "react";

function PorkerFilter({ onGreasedFilterChange, onSortFilterChange }) {
  return (
    <div>
      <select onChange={onGreasedFilterChange}>
        <option value="All">All</option>
        <option value={true}>Greased</option>
        <option value={false}>Not Greased</option>
      </select>
      <select onChange={onSortFilterChange}>
        <option value="none">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default PorkerFilter;
