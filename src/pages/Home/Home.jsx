import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import data from '../../data/projects.json';
import logo from '../../imgs/logo.png';

export default function Home() {
    const skills = ['html', 'css', 'sass', 'js', 'react', 'nodejs', 'github', 'mongodb'];
    const recentProjects = data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, Math.min(3, data.length));
    return (
        <>
            <section className="about-section">
                <img src={logo} alt="Elisa Bitmoji"/>
                <div className="context">
                    <h1>👋 Hey, c'est <span className="hover">Elisa</span> !</h1>
                    <div className="description">
                        <p>Passionnée par le code et l'univers de la tech. Mon aventure dans le web a commencé par une fascination pour la création de sites et l'envie de comprendre ce qui se cache derrière chaque page. Aujourd'hui en formation Bac+2 intégratrice web, chaque ligne de code est pour moi, une opportunité d'apprendre et de progresser.</p>
                        <img className="skills" src={`https://skillicons.dev/icons?i=${skills.join(',')}`} alt="Skills Icons"/>
                    </div>
                </div>
            </section>
            <section className="projects-feed-section">
                <h1>📅 Projets Récents</h1>
                <div className="context">
                    {recentProjects.map((project, i) => {
                        return <ProjectCard project={project}/>;
                    })}
                    <Link to="/projects" className="project">
                        <h2>Voir +</h2>
                    </Link>
                </div>
            </section>
        </>
    );
};