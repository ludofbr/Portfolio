import React, { useState } from 'react';
import ROUTES from './routes';
import {Layout, Header, Nav, NavItem, Footer, Box} from './style.js';

function CONTACT() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage ] = useState('')

// function handleSubmit(event){
//     event.preventDefault();
// }
  return (
<Layout>
  <div id="notification" class="notification">Message bien envoyé</div>
  <Header>
    <h1>Contactez-moi</h1>
    <div class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Nav> 
          <NavItem to={ROUTES.HOME} isActive>Accueil</NavItem>
          <NavItem to={ROUTES.PROJETS}isActive>Projets</NavItem>
          <NavItem to={ROUTES.ABOUT}isActive>À propos</NavItem>
          <NavItem to={ROUTES.CONTACT}isActive>Contact</NavItem>
        </Nav>
    </Header>
    <Box>
      <form id="contact-form" method="POST">
        <label for="name">Nom :</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) =>setName(e.target.value)} required/>
  
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)} required/>
  
        <label for="message">Message :</label>
        <textarea id="message" name="message" rows="5" value={message} onChange={(e) =>setMessage(e.target.value)} required></textarea>
  
        <button type="submit">Envoyer</button>
      </form>
    </Box>
  <Footer>
      <p>&copy; 2024 Fabro Ludovic Portfolio</p>
    </Footer>
  <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
  <script src={ROUTES.SCRIPT}></script>
</Layout>
  );
}

export default CONTACT;
