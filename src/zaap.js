import React from 'react';
import zaapPresentation from './img/screen_zaap.png';
import ROUTES from './routes';
import {Footer, Header, Layout, Nav, NavItem, ProjectBox, ProjectDesc } from './style.js';

function ZAAP() {
  return (
<Layout>
    <Header>
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
        <ProjectBox>
            <img src={zaapPresentation}/>
        <ProjectDesc>
            <h2 className='projectH2'>Description du Projet Zaap</h2>
            <p>
                "Zaap" est une application conçue pour améliorer l'expérience utilisateur du jeu en ligne massivement multijoueur (MMO) Dofus, développé par Ankama. Dofus est un jeu qui combine un monde riche et coloré avec des combats stratégiques au tour par tour, et il est célèbre pour ses graphiques inspirés de l'animation et son système de jeu profondément tactique.
            </p>
            <br/>
            <p>
                L'application Zaap aborde une problématique fréquente chez les joueurs gérant plusieurs comptes ou personnages simultanément, un phénomène courant dans la communauté de Dofus. Traditionnellement, les joueurs qui utilisent plusieurs comptes doivent fréquemment basculer entre différents écrans et fenêtres, ce qui peut être fastidieux et inefficace. Zaap résout ce problème en permettant aux utilisateurs de configurer des raccourcis clavier pour naviguer rapidement et efficacement entre les fenêtres de jeu actives.
            </p>
            <br/>
            <p>
                En utilisant Zaap, les joueurs peuvent assigner des touches spécifiques pour activer les fenêtres de chaque personnage. Ce système améliore grandement la fluidité du jeu en réduisant le temps nécessaire pour changer d'activité et en augmentant l'efficacité des tâches répétitives, permettant ainsi une gestion plus aisée et plus rapide des multiples comptes. L'application fonctionne en arrière-plan et est conçue pour être intuitive et peu intrusive, ce qui permet aux joueurs de se concentrer pleinement sur l'expérience de jeu sans distraction supplémentaire.
            </p>
            <br/>
            <p>
                Zaap est le fruit d'une programmation avancée utilisant Python et Eel, une bibliothèque permettant de créer des applications légères en intégrant des technologies web pour l'interface utilisateur tout en utilisant Python comme backend. Cette approche permet une grande flexibilité et une portabilité accrue de l'application, faisant de Zaap une solution robuste et efficace pour la communauté des joueurs de Dofus.
            </p>
            <br/>
            <p>J'ai trouvé la limite de cette version de Zaap qui actuellement nécéssite un console pour son bon fonctionnement.
                La prochaine version de mon application sera réalisé grâce à Electron ce qui devrait résoudre ce problème.
            </p>
            </ProjectDesc>
            </ProjectBox>
            <Footer>
      <p>&copy; 2024 Fabro Ludovic Portfolio</p>
    </Footer>
        <script src={ROUTES.SCRIPT}></script>
</Layout>

  );
}

export default ZAAP;
