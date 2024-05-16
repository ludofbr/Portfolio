import React from 'react';
import ROUTES from './routes';
import {Layout, Header, Nav, NavItem, Footer, Box, Desc} from './style.js';

function PROJETS() {
  return (
    <Layout>
    <Header>
        <h1>Mes Projets</h1>
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

        <Box>
        <h2 className='descH2'>Zaap : Optimisation de l'expérience multi-compte pour Dofus</h2>
            
            <p className='descP'>
                Zaap est une application conçue pour simplifier la gestion de plusieurs comptes dans le jeu Dofus, permettant aux joueurs d'assigner et d'utiliser des raccourcis clavier pour basculer efficacement entre différents personnages. En intégrant des technologies web pour l'interface utilisateur et Python en backend, Zaap offre une solution robuste pour améliorer la fluidité et l'efficacité de l'expérience de jeu, en se concentrant sur une navigation rapide et intuitive entre les fenêtres de jeu.
            </p>
            
        <button className='descBtn'><a href={ROUTES.ZAAP} class="link">En savoir plus</a></button>
        </Box>

        <Box>
        <h2 className='descH2'>Carfind : Une application mobile pour retrouver sa voiture</h2>
            
            <p className='descP'>
                à venir
            </p>
        
        <button className='descBtn'><a href="#">En savoir plus</a></button>
         </Box>

        <Box>
        <h2 className='descH2'>Pomodoro : Timer digital basé sur la méthode de travail pomodoro</h2>
            
            <p className='descP'>
                à venir
            </p>
        
        <button className='descBtn'><a href="#">En savoir plus</a></button>
         </Box>

        <Box>
        <h2 className='descH2'>RoutineGest : Création d'un tableau pour gérer ses routine</h2> 
            <p className='descP'>
                à venir
            </p>

        <button className='descBtn'><a href="#">En savoir plus</a></button>
         </Box>

         <Box>
        <h2 className='descH2'>Orange Gambling : Un site de jeu en ligne</h2> 
        
            <p className='descP'>
                à venir
            </p>

        <button className='descBtn'><a href="#">En savoir plus</a></button>
         </Box>

    <Footer>
      <p>&copy; 2024 Fabro Ludovic Portfolio</p>
    </Footer>
    <script src={ROUTES.SCRIPT}></script>
</Layout>
  );
}

export default PROJETS;
