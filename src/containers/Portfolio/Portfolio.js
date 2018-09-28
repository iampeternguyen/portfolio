import React, { Component } from 'react';
import Project from '../../components/Portfolio/Project';
import currentProjects from '../../components/Portfolio/currentProjects';

export default class Portfolio extends Component {
	state = {
		numChildren: 0,
	};

	scrollEventHandler = event => {
		if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 100) {
			console.log('Load more data');
			this.addChild();
		} else {
		}
	};

	componentDidMount() {
		window.addEventListener('scroll', this.scrollEventHandler);
		this.setState({ currentProjects });
	}

	render() {
		const children = [];

		for (var i = 0; i < this.state.numChildren; i += 1) {
			children.push(<Project key={i} number={i} {...this.state.currentProjects[i]} />);
		}

		return (
			<div>
				<h1>Projects</h1>
				{children}
			</div>
		);
	}

	addChild = () => {
		if (this.state.numChildren < this.state.currentProjects.length) {
			this.setState({
				numChildren: this.state.numChildren + 1,
			});
		}
	};
}
