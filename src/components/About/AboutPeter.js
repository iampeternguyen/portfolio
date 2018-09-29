import React from 'react';
import chibi from '../../media/Peter.png';
import cssClasses from './AboutPeter.css';

const AboutPeter = () => {
	return (
		<div className={cssClasses.container}>
			<div className={cssClasses.mainImageContainer}>
				<img className={cssClasses.mainImage} src={chibi} alt="cartoon of Peter" />
			</div>
			<p>
				<span className={cssClasses.iamText}>I am</span> <span className={cssClasses.name}>Peter Nguyen</span>
				<span className={cssClasses.period}>.</span>
			</p>
			<p className={cssClasses.subtitle}>
				I like <span className={cssClasses.emphasis}>solving </span> problems,
				<br />
				<span className={cssClasses.emphasis}>designing </span> beautiful interfaces, <br /> and{' '}
				<span className={cssClasses.emphasis}>building </span> meaningful projects.
			</p>
			<a href="#Projects">
				<div className={cssClasses.triangle} />
			</a>
		</div>
	);
};

export default AboutPeter;
