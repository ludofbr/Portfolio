import React from 'react';
import ROUTES from './routes';
import {Layout, Header, Nav, NavItem, Footer, PresentationCard, PresentationTitle} from './style.js';
import HEAD from './head.js';
import zaapLogo from './img/zaap-accueil.webp';
import carfindLogo from './img/carfind-accueil.webp';
import routinegestLogo from './img/routine-accueil.webp';
import pomodoroLogo from './img/pomodoro-accueil.webp';
import orangegamblingLogo from './img/orangeGambling-accueil.webp';

function HOME() {
  return (

    <Layout>
      <HEAD/>
    <Header>
      <h1>Fabro Ludovic Portfolio</h1>
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

      <section className="main flex flex-row gap-5 p-10">
      <section class="presentationContainer flex flex-wrap justify-center gap-3">
      <PresentationCard to={ROUTES.ZAAP}>
          <PresentationTitle>Zaap</PresentationTitle>
           <img src={zaapLogo} alt="Gestionnaire de fenêtre windows pour le jeu Dofus" className='presentationImg'/>
      </PresentationCard>

      <PresentationCard to="#">
      <PresentationTitle>CarFind</PresentationTitle>
            <img src={carfindLogo} alt="Retrouver sa voiture au dernier emplacement indiqué" className='presentationImg'/>
          </PresentationCard>

          <PresentationCard to="#">
          <PresentationTitle>Pomodoro</PresentationTitle>
            <img src={pomodoroLogo} alt="Application timer basé sur la méthode de travail pomodoro" className='presentationImg'/>
          </PresentationCard>

          <PresentationCard to="#">
          <PresentationTitle>RoutineGest</PresentationTitle>
            <img src={routinegestLogo} alt="Gestionnaire de routine" className='presentationImg'/>
          </PresentationCard>

          <PresentationCard to="#">
          <PresentationTitle>Orange Gambling</PresentationTitle>
            <img src={orangegamblingLogo} alt="Jeux en ligne" className='presentationImg'/>
          </PresentationCard>
          
      </section>
      </section>
  
    <Footer>
      <p>&copy; 2024 Fabro Ludovic Portfolio</p>
    </Footer>
    <script src={ROUTES.SCRIPT}></script>
  </Layout>
  );
}

export default HOME;
