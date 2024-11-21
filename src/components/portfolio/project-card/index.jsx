import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProjectCards({ img, title, summary, id }) {
  const [isVisible, setIsVisible] = useState(false); // État pour savoir si l'élément est visible

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Quand la carte devient visible, on active l'animation
            observer.unobserve(entry.target); // On arrête d'observer l'élément
          }
        });
      },
      {
        threshold: 0.5, // L'élément doit être à 50% visible pour déclencher l'animation
      }
    );

    const card = document.querySelector('.card');
    if (card) {
      observer.observe(card); // On commence à observer l'élément
    }

    return () => {
      if (card) {
        observer.unobserve(card); // Nettoyage de l'observateur à la destruction du composant
      }
    };
  }, []);

  return (
    <article className={`card ${isVisible ? 'active' : ''}`}>
      <div className="card-img">
        {/* Ajout du lien autour de l'image */}
        <Link to={`/project/${id}`}>
          <img src={img} alt={title} />
          <div className="overlay"></div>
        </Link>
      </div>

      <div className="card__text">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </article>
  );
}

ProjectCards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired, // Ajout de la validation pour la prop `id`
};

export default ProjectCards;

