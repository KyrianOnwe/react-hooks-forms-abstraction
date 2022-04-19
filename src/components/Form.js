import React, { useState } from "react";

/*function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}*/
function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  /*function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
  }*/
  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    //const value = event.target.value;-won't update
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  } 

  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="firstName"
      onChange={handleChange}
      value={formData.firstName}
    />
    <input
      type="text"
      name="lastName"
      onChange={handleChange}
      value={formData.lastName}
    />
    <input
      type="checkbox"
      name="admin"
      onChange={handleChange}
      checked={formData.admin}
    />
    <button type="submit">Submit</button>
  </form>
  );
}
  /*(
    <form>
      <input
        type="text"
        onChange={handleFirstNameChange}
        value={formData.firstName}
      />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={formData.lastName}
      />
    </form>
  )*//*(
    <form>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleLastNameChange}
/>      
    </form>
  );
}*/

export default Form;
