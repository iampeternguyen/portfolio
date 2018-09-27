import React, { Component } from 'react';
import cssClasses from './App.css';
import Main from './containers/Main/Main';

class App extends Component {
	render() {
		return (
			<div className={cssClasses['App']}>
				<header />
				<Main />
				<footer>Footer</footer>
			</div>
		);
	}
}

export default App;
