import React from 'react';

function Contact() {
  return (
    <div className="contact">
        <form className="contact-form">
            <input placeholder="Vorname"/>
            <input placeholder="Nachname"/>
            <input placeholder="E-Mail"/>
            <input placeholder="Telefon (optional)"/>
            <input placeholder="Stückzahl"/>
            <input placeholder="Gesamtgewicht"/>
            
            <input className="submit" type="submit"/>
        </form>
        <p>Spezielles Anliegen? Schreib uns direkt eine E-Mail an: <br/><br/><strong>info@bebeco</strong></p>
    </div>
  );
}

export default Contact;