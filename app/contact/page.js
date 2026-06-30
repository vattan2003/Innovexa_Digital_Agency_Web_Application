
"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Contact() {


  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    alert("Message Sent Succesfully")

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  }

  return (

    <>

      {/*code for navbar ------------------------------------------------------------------*/}

      <Navbar />


      {/*code for Header Section----------------------------------------------------------- */}

      <section className="bg-slate-950"
        style={{
          padding: "80px 20px",

        }}
      >
        <div
          style={{
            maxWidth: "650px",
            margin: "auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "white",
            }}
          >
            Contact Us
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              marginBottom: "40px",
            }}
          >
            We'd love to hear from you. Send us your project details.
          </p>


<div style={{width:"250px",padding:"15px"}}>
          <h3 style={{color:"white",}}>&#9742; 9361671120</h3>
          <h3 style={{color:"white",}}>&#x1F4CC; Location : Annai sathya Nagar Main Sreet,
            Ramapuram, Chennai-600089
          </h3>
          </div>

          {/*code for Contact Form-------------------------------------------------------------------- */}

          <form
            onSubmit={handleSubmit}
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              style={textareaStyle}
            ></textarea>

            <button
              type="submit"
              style={buttonStyle}
            >
              Send Message
            </button>

            {success && (
              <p
                style={{
                  color: "green",
                  marginTop: "20px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {success}
              </p>
            )}
          </form>
        </div>
      </section></>
  );
}

{/*code for Styles  */ }

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "20px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "16px",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  padding: "14px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  marginBottom: "20px",
  fontSize: "16px",
  resize: "none",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "17px",
  fontWeight: "600",
  cursor: "pointer",
};