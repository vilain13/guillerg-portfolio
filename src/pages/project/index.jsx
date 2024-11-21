
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects-data.json'; 

const Project = () => {
    const { id } = useParams(); // Récupération de l'id depuis l'URL
    const project = projectsData.find((project) => project.id === id); // Recherche du projet correspondant via l'id
  
    return (
        <main>
            <section className='project'>
                <div className='project-img'>
                    {project.img && <img src={project.img} alt={`Illustration de ${project.title}`} />}
                </div>
                

                <h2>{project.title}</h2> 

                {project.github && (
                        <a className='project-button'
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" /* mesure de sécurité lorsqu'un lien pointe vers une nouvelle page ( target blanck ) */
                        >
                            Voir sur GitHub
                        </a>
                    )}

                <h3>Contexte du projet</h3>   
                <p>{project.context}</p> 

                <h3>Compétences acquises</h3>   
                <div className='project-competences'>
                    {project.competences && project.competences.map((competence, index) => (
                                <p key={index}>{competence}</p>
                            ))}
                </div>
            </section>
        </main>
       
    );
  };
  
  export default Project;
