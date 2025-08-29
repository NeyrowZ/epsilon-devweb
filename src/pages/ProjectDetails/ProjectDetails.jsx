import { useParams, Link } from 'react-router-dom';
import data from '../../data/projects.json';
import Error from '../Error/Error';

export default function Projects() {
    const { projectId } = useParams();
    const project = data.find((project) => project.id === projectId);
    if (!project) return <Error/>;
    return(
        <section className="project-section">
            <div className="banner">
                <img src={`${process.env.PUBLIC_URL}/imgs/projects/${project.id}.png`} alt={`${project.name} Project`}/>
            </div>
            <div className="context">
                <div className="title">
                    <h1>{project.name}</h1>
                    <Link to={project.repository} target="_blank"><i class="fa-brands fa-github"></i></Link>
                    {project.demo && <Link to={project.demo} target="_blank"><i class="fa-solid fa-link"></i></Link>}
                </div>
                <p>{project.description}</p>
                <div className="skills">
                    <h3>Compétences Développées:</h3>
                    <img src={`https://skillicons.dev/icons?i=${project.skills.join(',')}`} alt="Skills Icons"/>
                </div>
            </div>
        </section>
    );
};