import React from 'react';
import logo from './logo.svg';

import Button from './Button';

import './app.scss';

function App() {
	return (
		<div className="app">
			<Button>bonsoir</Button>
			<Button bordered>bonsoir</Button>
			<Button variant="primary-02">bonsoir</Button>
			<Button variant="neutral" className="button-test">bonsoir</Button>
			<Button variant="danger">bonsoir</Button>
		</div>
	);
}

export default App;
