import React, { Component } from 'react';
import logo from './logo.svg';
import cssClasses from './App.css';

class App extends Component {
	render() {
		return (
			<div className={cssClasses['App']}>
				<header className={cssClasses['App-header']}>
					<img src={logo} className={cssClasses['App-logo']} alt="logo" />
					<h1 className={cssClasses['App-title']}>Welcome to React</h1>
				</header>
				<p className={cssClasses['App-intro']}>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
