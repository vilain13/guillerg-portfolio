import React, { useState, useEffect, useRef } from 'react';


function ProgressBar({ title, percentage }) {
  const [width, setWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const currentRef = progressBarRef.current; // Copie la valeur initiale de ref

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setWidth(percentage);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [percentage]);

  return (
    <div className="progress-bar" ref={progressBarRef}>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${width}%` }}
        >
          <span className="progress-bar__title">{title}</span>
          <span className="progress-bar__percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;