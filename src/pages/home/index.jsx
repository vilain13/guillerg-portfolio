
import Hero from '../../components/hero';
import Introducing from '../../components/introducing';
import CompetencesSection from '../../components/competences-section';
import PortfolioProjects from '../../components/portfolio';

 
function Home() {

    return (
        <main>
            <Hero />
            <Introducing />
            <CompetencesSection />
            <PortfolioProjects />
        </main>     
    
    )

}

export default Home