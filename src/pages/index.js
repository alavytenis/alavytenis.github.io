import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic8 from '../assets/images/pic08.jpg';
import linas from '../assets/images/Linas.jpg';
import andrius from '../assets/images/Andrius.jpg';
import vytautas from '../assets/images/Vytautas.jpg';
import evaldas from '../assets/images/Evaldas.png';
import lightningOne from "../assets/images/onelightning.png"
import Scroll from '../components/Scroll';
import sixLightningHorizontal from '../assets/images/six-lightning-horizontal.png'
import goalhub from '../assets/images/projects/goalhub.png'
import orca from '../assets/images/projects/orca.png'
import coart from '../assets/images/projects/coart.png'
import depo from '../assets/images/projects/depo.png'
import fishcoin from '../assets/images/projects/fishcoin.png'
import lietuvosbankas from '../assets/images/projects/lietuvos-bankas.png'
import pickvibe from '../assets/images/projects/pickvibe.png'
import fixNetwork from '../assets/images/projects/fix-network.png'


const sections = [
  { id: 'top', name: 'INTRO'},
  { id: 'portfolio', name: 'WHO WE ARE'},
  { id: 'projects', name: 'PROJECTS'},
  { id: 'team', name: 'TEAM'},
  { id: 'career', name: 'CAREER'},
  { id: 'contact', name: 'CONTACT'},
];

const projects = [
  {id: 'goalhub', image: ''},
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">

        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>| WHO WE ARE</h2>
          </header>

          <p>SUPER HOW is a visionary research and development (R&D) company committed to harnessing the power of blockchain for the advancement of society with next-generation solutions.  SUPER HOW has grown to become Lithuania’s leading private research and development lab focusing on DARQ (Blockchain and Distributed ledger technologies, Artificial Intelligence, extended reality and quantum computing) technologies. These future technologies are the next big technology catalysts for change, and SUPER HOW mission is to be at the horizon of innovations and the R&D engine that transforms future technologies into practical applications for business and everyday life. </p>
          <p>
          Moreover, as a revolutionary technology, blockchain provides a practical solution that allows data and transactions to be recorded in a reliable and verifiable way via the mechanism of the secure and decentralised ledger. The team of SUPER HOW strongly believe that blockchain in convergence with other technologies such as Artificial intelligence is the backbone of almost all the prominent infrastructure with vast potentials in many domains. It can be envisaged that in the near future blockchain technology will be widely used in domains such as healthcare, government, finance, education, manufacturing, transportation, and logistics. Therefore, SUPER HOW aims to deliver strong DARQ research outcomes and help the industry to grow. Our research covers a wide range of areas such as applied sciences, aimed at the development and evaluation of new generic blockchain concepts, and application-driven, motivated by important application areas, such as transaction processing, e-health, digital identity protection, supply chain and more. Much of it is experimental, validating the proposed new concepts by means of implementation and deployment in prototypes that are used in the real world.
          </p>
          <p>
          SUPER HOW collaborates with the major stakeholders (local universities, institutes and research labs) in the blockchain and artificial intelligence ecosystem and provides key R&D capabilities in the field. SUPER HOW offers internships for students and researchers the opportunity to gain practical knowledge, by participating in the end-to-end lifecycle of Analysis, Research, Design and Implementation of innovative solutions.
          </p>
          <div className="row">

          </div>
        </div>
      </section>

      <section id="projects" className="three">
        <div className="container">
          <header>
            <h2>| PROJECTS</h2>
          </header>
          <p>Here are some all-stars we've worked with over the years: </p>
        </div>
        <div className="project-container row">
          <div className="project-card col-3">
            <a href="https://www.goalhub.net/">
              <img src={goalhub} alt="goalhub"/>
            </a>
          </div>
          <div className="project-card col-3">
            <a href="#">
              <img src={pickvibe} alt="goalhub"/>
            </a>
          </div>
          <div className="project-card col-3">
            <a href="https://coart.biz/">
              <img src={coart} alt="goalhub"/>
            </a>
          </div>
          <div className="project-card col-3">
            <a href="https://fishcoin.co/">
              <img src={fishcoin} alt="goalhub"/>
            </a>
          </div>
        </div>
        <div className="project-container row">
          <div className="project-card ">
            <a href="https://fix.network/">
              <img src={fixNetwork} alt="goalhub"/>
            </a>
          </div>
          <div className="project-card ">
            <a href="https://myorca.io/">
              <img src={orca} alt="goalhub"/>
            </a>
          </div>
          <div className="project-card">
            <a href="https://www.lb.lt/en/">
              <img src={lietuvosbankas} alt="goalhub"/>
            </a>
          </div>
          <div className="project-card ">
            <a href="https://depository.center/">
              <img src={depo} alt="goalhub"/>
            </a>
          </div>
        </div>
        <div className="bottom-lightning">
          <img src={sixLightningHorizontal} />
        </div>
      </section>

      <section id="team" className="four">
        <div className="container">
          <header>
            <h2>| CORE TEAM</h2>
          </header>

          <p>
            SUPER HOW is a team that has a passion for developing and delivering enterprise-grade solutions. The Core team echoes SUPER HOWs' motto of ‘Empowered by Innovation’ and knows how to take custom software application ideas from concept to delivery.
          </p>
          <div className="row image-line">
            <a href="https://www.linkedin.com/in/ministras/?originalSubdomain=lt" className="col image featured">
                <img src={vytautas} alt="Vytautas Kašėta" />
                <div class="text">Vytautas Kašėta</div>
            </a>
            <a href="https://www.linkedin.com/in/andrius-bartminas/?originalSubdomain=lt" className="col image featured">
                <img src={andrius} alt="Andrius Bartminas" />
                <div class="text">Andrius Bartminas</div>
            </a>
            <a href="https://www.linkedin.com/in/linas-butenas/?originalSubdomain=lt" className="col image featured">
                <img src={linas} alt="Linas Būtėnas" />
                <div class="text">Linas Būtėnas</div>
            </a>
            <a href="https://www.linkedin.com/in/evaldas-bruze-a007b81a/" className="col image featured">
                <img src={evaldas} alt="Evaldas Bružė" />
                <div class="text">Evaldas Bružė</div>
            </a>
          </div>
        </div>
      </section>

      <section id="career" className="five">
        <div className="container">
          <header>
            <h2>| CAREER</h2>
          </header>
          <p> We are hiring! </p>
          <div className="career-container">
            <div className="career-card">
              BLOCKCHAIN DEVELOPER
              <a href="#" className="button career-button">See more</a>
            </div>
            <div className="career-card">
              C++ DEVELOPER
            </div>
            <div className="career-card">
              FULL STACK DEVELOPER
            </div>
            <div className="career-card">
              UI/UX DESIGNER
            </div>
          </div>
        </div>
        <div className="bottom-lightning">
          <img src={sixLightningHorizontal} />
        </div>
      </section>

      <section id="contact" className="six">
        <div className="container">

          <div className="contact-container">
          <div className="row">
            <div className="col-10">
            <header>
              <h2>| CONTACT US</h2>
            </header>
            </div>
            <div className="col-2">
              <img src={lightningOne} />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <p className="address">15 Latviu str. Vilnius Lithuania</p>
              <p>info@superhow.io</p>
              <p>LT  +370 (6) 1283971</p>
              <p>UK +44 (7) 520644322</p>
              <p>IL   +972 (55) 9997606</p>
            </div>
            <div className="col-2">
              <p className="web-link"> superhow.io </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
