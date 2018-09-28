import React from 'react';
import cssClasses from './Project.css';
const Project = props => {
	return (
		<div className={cssClasses.container}>
			<img src={props.imgLink} alt={props.imgAlt} />
			<h2>{props.title}</h2>
			<h3>{props.subtitle}</h3>
			<p>{props.description}</p>
			<p>
				<a href={props.githubLink}>Github</a> | <a href={props.liveDemoLink}>Live Demo</a>
			</p>
		</div>
	);
};

export default Project;
