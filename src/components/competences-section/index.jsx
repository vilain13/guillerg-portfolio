// App.js
import React from 'react';
import TypewriterEffect from './type-writer';
import ProgressList from './progress-list';
import data from '../../data/competences-data.json';
import imgCompetences from '../../assets/cyber-4062449_1280.webp';



function CompetencesSection() {
  const filterDataByType = (type) => {
    return data.filter(item => item.type === type);
  };

  return (
    <section>
      <div className='competences-typewriter'>
        <h2 id="competences-title">MES COMPETENCES  :  </h2>
        <TypewriterEffect />
      </div>
   
    <div className="competences-section">

      <div className="technique">
        <h3>FRONT-END</h3>
        <ProgressList data={filterDataByType("FRONT-END")} />
        <h3>BACK-END</h3>
        <ProgressList data={filterDataByType("BACK-END")} />
        <h3>OUTILS DE DEVELOPPEMENT</h3>
        <ProgressList data={filterDataByType("OUTILS DE DEVELOPPEMENT")} />
      </div>  

      <div className="img-competences">
        <img className="hero_img" src={imgCompetences} alt="hero Matrix" />
      </div>

      <div className="etre">
        <h3 id="competences-title">SAVOIR ETRE</h3>
        <ProgressList data={filterDataByType("SAVOIR ETRE")} />

      </div>
    </div>
    </section>
  );
}

export default CompetencesSection;
