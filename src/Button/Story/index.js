import React, { useState, useEffect } from 'react';
import Select from 'Select';
import TextInput from 'TextInput';
import Checkbox from 'Checkbox';
import Button from 'Button';

import './story.scss';

const variantOptions = [
	{ label: 'Primary', value: 'primary' },
	{ label: 'Primary-02', value: 'primary-02' },
	{ label: 'Neutral', value: 'neutral' },
	{ label: 'Danger', value: 'danger' },
];

const sizeOptions = [ { label: 'Small', value: 's' }, { label: 'Medium', value: 'm' }, { label: 'Large', value: 'l' } ];

const ButtonStory = () => {
	const [ variant, setVariant ] = useState('primary');
	const [ size, setSize ] = useState('m');
	const [ text, setText ] = useState('Sample text');
	const [ full, setFull ] = useState(false);
	const [ sample, setSample ] = useState('');

	useEffect(
		() => {
			const sample = `<Button variant="${variant}" size="${size}">${text}</Button>`;
			setSample(sample);
		},
		[ size, text, variant ]
	);

	return (
		<div className="button-story">
			<div className="settings">
				<Select options={variantOptions} value={variant} onChange={setVariant} />
				<Select options={sizeOptions} value={size} onChange={setSize} />
				<TextInput value={text} onChange={setText} />
				<Checkbox checked={full} onChange={setFull} name="full" />
			</div>
			<div className="sandbox">
				<Button {...{ variant, size, full }}>{text}</Button>
				<textarea value={sample} />
			</div>
		</div>
	);
};

export default ButtonStory;
