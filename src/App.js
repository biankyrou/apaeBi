import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './componentes/layout/Footer/Footer.js';
import MenuNav from './componentes/layout/MenuNav/MenuNav.js';
import Projeto from './paginas/1-Projeto/projeto';
import Turmas from './paginas/2-Turmas/turmas';
import Equipe from './paginas/3-Equipe/equipe';
import Acoes from './paginas/4-Acoes/acoes';
import Blog from './paginas/5-Blog/blog';
import Contato from './paginas/6-Contato/contato';
import Home from './paginas/Home/home';
import './App.css';

function App() {
  const menuNavRef = useRef(null);
  const [closedMenuHeight, setClosedMenuHeight] = useState(0);
  const [listState] = useState(false);

  useEffect(() => {
    if (!listState) {
      setClosedMenuHeight(menuNavRef.current.clientHeight);
    }
  }, [listState, menuNavRef]);


  const scrollToSection = (sectionId, closedMenuHeight) => {
    let element = document.getElementById(sectionId);

    //const windowHeight = window.innerHeight;
    const menuHeight = closedMenuHeight;
    //const elementHeight = element.clientHeight;

    //let yAdjust = - (windowHeight / 2) - menuHeight + (elementHeight / 2);
    //console.log("Alturas:\n Janela:",windowHeight,"Menu:",menuHeight,"Elemento:",elementHeight);
    //let ySet = element.offsetTop - yAdjust;
    let ySet = element.offsetTop - menuHeight;
    window.scroll({ top: ySet, behavior: 'smooth' });
  };

  return (
    <div>
      <div>
        <MenuNav
          scrollToSection={scrollToSection}
          menuNavRef={menuNavRef}
          closedMenuHeight={closedMenuHeight}
          listState={listState}
        />
      </div>

      <Router>
        <div id="ancoras">
          <section id="home">
          <Home scrollToSection={scrollToSection} closedMenuHeight={closedMenuHeight}/>
          </section>

          <section id="projeto">
            <Projeto />
          </section>

          <section id="turmas">
            <Turmas />
          </section>

          <section id="equipe">
            <Equipe />
          </section>

          <section id="acoes">
            <Acoes />
          </section>

          <section id="contato">
            <Contato />
          </section>

          <section id="blog">
            <Blog />
          </section>

        </div>

        <div id="footer">
        <Footer/>
        </div>

      </Router>
    </div>
  );
}

export default App;