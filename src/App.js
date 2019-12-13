import React, { useState } from 'react';
import Button from './Button';
import Select from './Select';
import TextInput from './TextInput';

import './app.scss';

import { NavigationPublishFavorite16px } from 'Icons';
import Checkbox from './Checkbox';

function App() {
	const [ text, setText ] = useState('sdfsdfsdf');
	const [ value, setValue ] = useState('test2');
	const [ full, setFull ] = useState(false);
	const onChange = (value, option) => {
		console.log('select change', value, option);
		setValue(value);
	};

	const options = [
		{ label: 'test1', value: 'test1' },
		{ label: 'test2', value: 'test2' },
		{ label: 'test3', value: 'test3' },
		{ label: 'test4', value: 'test4' },
	];

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
			<Button Icon={NavigationPublishFavorite16px}>dfsdfs</Button>
			<Button Icon={NavigationPublishFavorite16px} iconRight>
				dfsdfs
			</Button>
			<Button Icon={NavigationPublishFavorite16px} />
			<Select options={options} value={value} onChange={onChange} searchable />
			<Checkbox checked={full} onChange={setFull} />
			<TextInput value={text} onChange={setText} />
			<TextInput Icon={NavigationPublishFavorite16px} value={text} onChange={setText} />
		</div>
	);
}

export default App;
