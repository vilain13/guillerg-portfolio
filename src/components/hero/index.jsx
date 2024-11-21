
import React, { useEffect } from 'react';
import imgHero from '../../assets/matrix-1735640_1280.webp';

function Hero() {
  // Ajout de l'effet de parallaxe avec useEffect
  useEffect(() => {
    const handleScroll = () => {
      const overlay = document.querySelector('.hero_overlay');
      if (overlay) {
        const scrollPosition = window.scrollY;
        overlay.style.transform = `translate(-45%, ${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <img className="hero_img" src={imgHero} alt="hero Matrix" />
      <div className="hero_overlay">
        <h1>GUILLERMIN GILL<br />Développeur Intégrateur Web</h1>
        <button
          className="hero_button"
          onClick={() => window.location.href='mailto:guillerg680@gmail.com'}
        >
          CONTACTEZ MOI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
        </button>
      </div>
    </section>
  );
}

export default Hero;
