import React from 'react';
import Adv from "./Advantage-Card"

function Home() {
  return (
    <div className="Home">
      <h1 className="main-text">Besseres, Schnelleres und<br />Günstigeres Fullfillment</h1>
      <div className="main-text-lower">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat mi, quis tempor mauris. Vestibulum ultricies nisi vel ex commodo sagittis. Vivamus at vehicula lacus. Nam id lorem quis nisl pharetra auctor. <br /><br /><strong>Kontaktiere uns gerne für genaue Informationen zu unseren Konditionen.</strong></p>
      <a href="kontakt">
      <div className="contact-button">
      zum Kontaktformular
      </div>
      </a>
      </div>
      <div className="benefits">
        <Adv url="https://image.flaticon.com/icons/svg/1535/1535012.svg" h3="Ausgerichtet an Kleinunternehmer" p="Im Gegensatz zu anderen Unternehmen bieten wir faire Konditionen unabhängig der Größe ihres Unternehmens, damit Sie mit uns wachsen können!"/>
        <Adv url="https://image.flaticon.com/icons/svg/985/985698.svg" h3="Faire Preise" p="Unser Ziel ist es Preise zu bieten mit denen beide Seiten zufrieden seien können. Wenn Sie ein günstigeres Angebot von einem Konkurrenzunternehmen erhalten unterbieten wir Dieses!"/>
        <Adv url="https://image.flaticon.com/icons/svg/1898/1898137.svg" h3="Einfache Erreichbarkeit" p="Schluss mit dem endlosen E-Mail Krieg! Wir bieten Kommunikation nach ihrer Vorstellung. Ob WhatsApp, E-Mail oder per Anruf, bei uns erhalten Sie alle nötigen Informationen auf dem Weg ihrer Wahl"/>
      </div>
      <h2 className="catch">Noch nicht überzeugt?</h2>
      <div className="catch-lower">
      <p>Falls Sie noch Fragen haben sollten, können Sie uns einfach eine E-Mail oder Whatsapp schreiben.</p>
      </div>
      <a href="mailto:info@bebeco.com">
      <img src="https://image.flaticon.com/icons/svg/2983/2983704.svg" width="50px" />
      </a>
    </div>
  );
}

export default Home;
