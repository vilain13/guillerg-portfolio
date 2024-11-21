import imgPunaise from '../../assets/punaise.png';


function Introducing() {

    return (
        <section className='introducing'>

            <h2>POUR PARLER DE MOI ....</h2>
            <div className='introducing-img'>
                <img  src={imgPunaise} alt="Icone punaise" />
            </div>
            <div className='introducing-text'>
                <p>Issu d'un cursus Comptabilité et Gestion d'Entreprise, et du domaine d'activités de la Santé à Domicile, je suis en pleine reconversion professionnelle.</p>
                <p>Ayant commencé une formation d'intégrateur - développeur Web avec Openclassrooms depuis février 2024, j'ai découvert cet univers passionnant de la création de sites Web, et je peux dire  aujourd'hui que je suis devenu addict.</p>          
                <p>Cette formation m'a permis d'acquérir les techniques nécesaires pour créer, améliorer et maintenir un site Web fonctionnel et performant.</p>
                <p>Si vous avez la bonne idée de me confier votre projet,  je mettrai toute mon attention,  mon énergie et mes connaissances pour répondre à vos attentes.</p>
                <p>Ainsi, nous évoluerons ensemble !</p>
            </div>
             
         </section>
        
    )
}

export default Introducing;