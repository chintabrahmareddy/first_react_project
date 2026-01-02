import React, { useState } from "react";

function About({ addData }) {
  const initialForm = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: ""
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const container = {
    maxWidth: "800px",
    margin: "30px auto",
    background: "#f7d8cf",
    padding: "30px",
    borderRadius: "10px",
    fontFamily: "Segoe UI"
  };

  const label = { fontWeight: "600", marginTop: "15px", display: "block" };
  const input = { width: "100%", padding: "10px", marginTop: "6px" };
  const errorText = { color: "red", fontSize: "12px" };

  const validate = (data) => {
    let err = {};
    if (!data.firstName) err.firstName = "First name required";
    if (!data.lastName) err.lastName = "Last name required";
    if (!data.email) err.email = "Email required";
    if (!data.phone) err.phone = "Phone required";
    if (data.phone && data.phone.length !== 10)
      err.phone = "Phone must be 10 digits";
    if (!data.course) err.course = "Select one course";
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    setErrors(validate(updated));
  };

  const handlePhone = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const updated = { ...formData, phone: value };
    setFormData(updated);
    setErrors(validate(updated));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    addData(formData);          // update App.js shared state
    setFormData(initialForm);   // reset form
    setErrors({});
  };

  return (
    <div style={container}>
      <h2>College Application Form</h2>

      <form onSubmit={handleSubmit}>
        <label style={label}>First Name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={input}
        />
        {errors.firstName && <div style={errorText}>{errors.firstName}</div>}

        <label style={label}>Last Name</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={input}
        />
        {errors.lastName && <div style={errorText}>{errors.lastName}</div>}

        <label style={label}>Phone</label>
        <input
          name="phone"
          maxLength={10}
          value={formData.phone}
          onChange={handlePhone}
          style={input}
        />
        {errors.phone && <div style={errorText}>{errors.phone}</div>}

        <label style={label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={input}
        />
        {errors.email && <div style={errorText}>{errors.email}</div>}

        <label style={label}>Course</label>
        {["Course 1", "Course 2", "Course 3"].map((c) => (
          <label key={c} style={{ display: "block", marginTop: "5px" }}>
            <input
              type="radio"
              name="course"
              value={c}
              checked={formData.course === c}
              onChange={handleChange}
            />{" "}
            {c}
          </label>
        ))}
        {errors.course && <div style={errorText}>{errors.course}</div>}

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "12px",
            width: "100%",
            background: "#333",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default About;
