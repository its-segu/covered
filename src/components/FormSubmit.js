import React, { useState } from "react";
import "../styles/FormSubmit.css";


export default function FormSubmit(props) {
  const [name, setName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          class="searchInput"
          style={{
            borderRadius: 0,
            width: 250,
            height: 20,
            color: "black",
            padding: 20,
          }}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}