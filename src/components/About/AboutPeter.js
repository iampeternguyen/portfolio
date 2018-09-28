import React from 'react';
import chibi from '../../media/Peter.png';
import cssClasses from './AboutPeter.css';

const AboutPeter = () => {
	return (
		<div className={cssClasses.container}>
			<img className={cssClasses.mainImage} src={chibi} alt="cartoon of Peter" />
			<p>
				<span className={cssClasses.iamText}>I am</span> <span className={cssClasses.name}>Peter Nguyen</span>.
			</p>
			<p className={cssClasses.subtitle}>
				I like <span className={cssClasses.emphasis}>solving </span> problems,
				<br />
				<span className={cssClasses.emphasis}>designing </span> beautiful interfaces, <br /> and{' '}
				<span className={cssClasses.emphasis}>building </span> meaningful projects.
			</p>
		</div>
	);
};

export default AboutPeter;
