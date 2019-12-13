import React from 'react';
import logo from './logo.svg';

import Button from './Button';

import './app.scss';

//import { NavigationPublishFavorite16px } from '@mozaic-ds/icons/react';

function App() {
	return (
		<div className="app">
			<Button>bonsoir</Button>
			<Button bordered>bonsoir</Button>
			<Button bordered variant="primary-02">
				bonsoir
			</Button>
			<Button variant="neutral">bonsoir</Button>
			<Button variant="danger">bonsoir</Button>
			<Button size="s">bonsoir</Button>
			<Button size="l">bonsoir</Button>
			<Button full>bonsoir</Button>
			{/*<Button icon={NavigationPublishFavorite16px}>dfsdfs</Button>*/}
		</div>
	);
}

export default App;
