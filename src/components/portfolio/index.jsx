
import React, { useEffect, useState } from 'react';
import ProjectCard from './project-card';
import data from '../../data/projects-data.json';
import imgVoyage from '../../assets/voyage.png';

function PortfolioProjects() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Charger les données du fichier JSON
    setCards(data);
  }, []);

  return (
    <section className="portfolio">
      <div className='portfolio-title'>
        <h2>PROJETS REALISES</h2>
        <p> dans le cadre de ma formation Openclassrooms : </p>
        
        <div className='portfolio-img'>
            <img  src={imgVoyage} alt="Icone" />
        </div>
      </div>

      <div className="portfolio-list">
      {cards.map((card, index) => (
          <ProjectCard 
          key={index} 
          id={card.id}
          img={card.img} 
          title={card.title} 
          summary={card.summary} 
          />
      ))}
      </div>

    </section>
   
  );
}

export default PortfolioProjects;
