import React, { useState, useEffect } from 'react';
import ROUTES from './routes';
import { Layout, Header, Nav, NavItem, Footer, Box } from './style.js';
import emailjs from 'emailjs-com';

function CONTACT() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    emailjs.init("-fCdwqk3H56TaMSsD"); // Remplacez par votre clé publique EmailJS
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send("service_lbrk2uf", "template_7t0uwrt", formData)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setNotification(true);
        setTimeout(() => setNotification(false), 4000);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error('FAILED...', error);  // Affiche l'objet d'erreur complet dans la console
        alert('Erreur lors de l\'envoi du message: ' + JSON.stringify(error));  // Affiche l'erreur sous forme de chaîne JSON
      });
  };

  return (
    <Layout>
      {notification && <div className="notification bg-white text-[#37BCF8] text-center p-2.5 fixed z-10 right-0 top-[30px] rounded-md shadow">Message bien envoyé</div>}
      <Header>
        <h1>Contactez-moi</h1>
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Nav>
          <NavItem to={ROUTES.HOME} isActive>Accueil</NavItem>
          <NavItem to={ROUTES.PROJETS} isActive>Projets</NavItem>
          <NavItem to={ROUTES.ABOUT} isActive>À propos</NavItem>
          <NavItem to={ROUTES.CONTACT} isActive>Contact</NavItem>
        </Nav>
      </Header>
      <div className='bg-[#eef2f5]'>
        <form className="bg-white p-3O rounded-lg shadow-md max-w-[600px] my-10 mx-auto" onSubmit={handleSubmit}>
          <div className='m-10 py-4'>
          <label className='contactLabel' for="name">Nom :</label>
          <input type="text" className="contactInput" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label className='contactLabel' for="email">Email :</label>
          <input type="email" className="contactInput" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label className='contactLabel' for="message">Message :</label>
          <textarea className='contactInput resize-none' name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

          <button className='descBtn w-full' type="submit">Envoyer</button>
          </div>
        </form>
        </div>
      <Footer>
        <p>&copy; 2024 Fabro Ludovic Portfolio</p>
      </Footer>
    </Layout>
  );
}

export default CONTACT;