import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
    return(
        <Link to={`/project/${props.project.id}`} className="project">
            <h2>{props.project.name}</h2>
            <img src={`${process.env.PUBLIC_URL}/imgs/projects/${props.project.id}.png`} alt={`${props.project.name} Project`}/>
        </Link>
    );
};