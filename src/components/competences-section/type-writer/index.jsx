import React, { useState, useEffect } from 'react';
import titlesData from '../../../data/acquis-data.json'; // Import direct du JSON

const TypewriterEffect = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (titlesData.length === 0) return; // Vérifie que les titres sont chargés

    const currentTitle = titlesData[index].title;
    
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Vitesse de l'effet "machine à écrire"

      return () => clearTimeout(timeout);
    } else {
      // Une fois le titre affiché, on passe au suivant après une pause
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedTitle('');
        setIndex((prevIndex) => (prevIndex + 1) % titlesData.length);
      }, 1000); // Pause avant le titre suivant

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <div className="competence-item">
      {displayedTitle}
    </div>
  );
};

export default TypewriterEffect;
