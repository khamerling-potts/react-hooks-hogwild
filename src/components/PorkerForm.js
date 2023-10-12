import React, { useState } from "react";

function PorkerForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    "highest medal achieved": "",
    specialty: "",
    image: "",
    weight: "",
    greased: false,
  });

  function handleInputChange(event) {
    const field = event.target.name;
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [field]: event.target.checked });
    } else {
      setFormData({ ...formData, [field]: event.target.value });
    }
  }
  return (
    <>
      <label htmlFor="addhogForm">Enter New Hog</label>
      <form
        name="addHogForm"
        style={{ padding: "2px" }}
        onSubmit={(event) => {
          event.preventDefault();
          onAddHog(formData);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          name="highest medal achieved"
          placeholder="Highest medal"
          value={formData["highest medal achieved"]}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          name="specialty"
          placeholder="Specialty"
          value={formData.specialty}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={formData.image}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleInputChange}
        ></input>
        <input
          type="checkbox"
          name="greased"
          value={formData.greased}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="greased">Greased</label>
        <br></br>
        <button type="submit">Add Hog</button>
      </form>
    </>
  );
}

export default PorkerForm;
