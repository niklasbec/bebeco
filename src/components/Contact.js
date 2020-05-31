import React, { useState } from "react";
import axios from "axios";

function Contact() {
  //State
  const [form, setForm] = useState({
    company: "",
    vorname: "",
    nachname: "",
    email: "",
    stadt: "",
    plz: "",
    website: "",
    telefon: "",
    produktAnzahl: null,
    weightTotal: null,
    comment: ""
  });

  const [loading, setLoading] = useState(false);
  const [errorToggle, setErrorToggle] = useState(false);
  const [successToggle, setSuccessToggle] = useState(false);

  //Functions
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://bebeco-backend.herokuapp.com/api/contact", form)
      .then(res => {
        setLoading(false);
        setSuccessToggle(true);
        setTimeout(() => {
          setSuccessToggle(false);
        }, 3000);
      })
      .catch(err => {
        setLoading(false);
        setErrorToggle(true);
        setTimeout(() => {
          setErrorToggle(false);
        }, 3000);
        console.log(err);
      });
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          placeholder="Unternehmensname"
          onChange={handleChange}
          name="company"
          value={form.company}
          type="text"
        />
        <input
          placeholder="Vorname"
          onChange={handleChange}
          name="vorname"
          value={form.vorname}
          type="text"
        />
        <input
          placeholder="Nachname"
          onChange={handleChange}
          name="nachname"
          value={form.nachname}
          type="text"
        />
        <input
          placeholder="E-Mail"
          onChange={handleChange}
          name="email"
          value={form.email}
          type="text"
        />
        <input
          placeholder="Stadt"
          onChange={handleChange}
          name="stadt"
          value={form.stadt}
          type="text"
        />
        <input
          placeholder="PLZ"
          onChange={handleChange}
          name="plz"
          value={form.plz}
          type="number"
        />
        <input
          placeholder="Website"
          onChange={handleChange}
          name="website"
          value={form.website}
          type="text"
        />
        <input
          placeholder="Telefon (optional)"
          onChange={handleChange}
          name="telefon"
          value={form.telefon}
          type="text"
        />
        <input
          placeholder="Stückzahl"
          onChange={handleChange}
          name="produktAnzahl"
          value={form.produktAnzahl}
          type="number"
        />
        <input
          placeholder="Gesamtgewicht"
          onChange={handleChange}
          name="weightTotal"
          value={form.weightTotal}
          type="number"
        />
        <input
          placeholder="Kommentar"
          onChange={handleChange}
          name="comment"
          value={form.comment}
          type="text"
        />

        <input className="submit" type="submit" />
      </form>
      {errorToggle ? (
        <div className="error">
          <p>Fehler! Bitte stellen Sie sicher das alle benötigten Felder ausgefüllt sind.</p>
        </div>
      ) : null}
      {successToggle ? (
        <div className="success">
          <p>Kontaktanfrage erfolgreich übermittelt!</p>
        </div>
      ) : null}
      <p>
        Spezielles Anliegen? Schreib uns direkt eine E-Mail an: <br />
        <br />
        <strong>info@bebeco</strong>
      </p>
    </div>
  );
}

export default Contact;
