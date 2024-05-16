import React from 'react';
import ROUTES from './routes';
import {Layout, Header, Nav, NavItem, Box, Footer} from './style.js';

function ABOUT() {
  return (
    <Layout>
    <Header>
      <h1>À propos de moi</h1>
      <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Nav> 
          <NavItem href={ROUTES.HOME} isActive>Accueil</NavItem>
          <NavItem href={ROUTES.PROJETS}isActive>Projets</NavItem>
          <NavItem href={ROUTES.ABOUT}isActive>À propos</NavItem>
          <NavItem href={ROUTES.CONTACT}isActive>Contact</NavItem>
        </Nav>
    </Header>
       {/* <section class = "about-img" >
        <img src="../img/moi.jpg" alt="Ludovic Fabro"/>
      </section>  */}
      <Box>
        <h2 className='descH2'>Profil professionnel</h2>
        <p className='descP'>Je suis Ludovic Fabro, actuellement en formation en développement <a href="https://www.udemy.com/join/login-popup/?next=/course/100-days-of-code/learn/lecture/23154980#overview" class = "descLink">Python</a> et les technologies de <a href="https://www.udemy.com/join/login-popup/?next=/course/the-complete-web-development-bootcamp/learn/lecture/12638830#overview"class = "descLink">développement web</a>, avec une forte inclination pour l’apprentissage pratique. Mon objectif est d'intégrer rapidement les compétences théoriques et pratiques pour exceller dans un environnement dynamique.</p>
        <p className='descP'>Enthousiaste à l'idée d'apprendre et de maîtriser de nouvelles technologies, je suis à la recherche d'opportunités qui me permettront de mettre en pratique mes connaissances actuelles tout en me préparant à adopter de nouveaux outils et méthodes de travail. Disponible immédiatement, je suis prêt à m'investir pour contribuer efficacement au sein de votre équipe.</p>
      </Box>

      <Box>
      <h2 className='descH2'>Formations & Diplômes</h2>
        <ul>
          <li><strong>Développeur Full Stack Titre RNCP niveau 6 –</strong> en contrat d’apprentissage
            09.2024 / 06.2025 – Campus Mewo, Metz</li>
          <br/>
          <li><strong>Formation RIPE BGP & IPv6 -</strong> 2023, Hunsdorf, Luxembourg</li>
          <br/>
          <li><strong>Juniper bases de la configuration -</strong> 2023, Dudelange, Luxembourg</li>
          <br/>
          <li><strong>Mikrotik CCNA -</strong> 2022, Steinsel, Luxembourg</li>
          <br/>
          <li><strong>BTS SNIR — </strong>Lycée Charles de Foucauld, 2021, Nancy, France</li>
          <br/>
          <li><strong>BAC STI2D — </strong>Lycée Labriquerie, 2017, Thionville, France</li>
        </ul>
      </Box>

      <Box>
      <h2 className='descH2'>Expériences professionnelles</h2>
        <ul>
          <li><strong>Auto-Entrepreneur</strong> — FABRO Ludovic Micro-Entreprise, depuis Juin 2023. Création de plusieurs boutiques en ligne et gestion du service client.</li>
          <br/>
          <li><strong>Administrateur réseaux</strong> — Mixvoip, Août 2021 à Septembre 2023. Responsable de la gestion et configuration du backbone (routeurs, switches, firewalls), et support helpdesk.</li>
        </ul>
      </Box>

      <Box>
      <h2 className='descH2'>Compétences</h2>
        <ul>
        <strong><li>Autonome</li>
          <li>Sérieux</li>
          <li>Adaptable</li></strong>
        </ul>
      </Box>
      
      <Box>
      <h2 className='descH2'>Centres d’intérêt</h2>
        <ul>
        <li>Sports : Musculation, Basketball</li>
        <br/>
        <li>Jeux vidéos</li>
      </ul>
      </Box>

    <Footer>
      <p>&copy; 2024 Fabro Ludovic Portfolio</p>
    </Footer>
    <script src={ROUTES.SCRIPT}></script>
  </Layout>
  );
}

export default ABOUT;
