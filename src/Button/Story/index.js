import React, { useState, useEffect } from 'react';
import Select from 'Select';
import TextInput from 'TextInput';
import Checkbox from 'Checkbox';
import Button from 'Button';
import { NavigationPublishFavorite16px } from 'Icons';

const variantOptions = [
	{ label: 'Primary', value: 'primary' },
	{ label: 'Primary-02', value: 'primary-02' },
	{ label: 'Neutral', value: 'neutral' },
	{ label: 'Danger', value: 'danger' }
];

const sizeOptions = [ { label: 'Small', value: 's' }, { label: 'Medium', value: 'm' }, { label: 'Large', value: 'l' } ];

const ButtonStory = () => {
	const [ variant, setVariant ] = useState('primary');
	const [ size, setSize ] = useState('m');
	const [ text, setText ] = useState('Sample text');
	const [ bordered, setBordered ] = useState(false);
	const [ icon, setIcon ] = useState(false);
	const [ iconRight, setIconRight ] = useState(false);
	const [ sample, setSample ] = useState('');

	useEffect(
		() => {
			const sample = `<Button variant="${variant}" size="${size}"${bordered ? ' bordered' : ''}${icon
				? ' Icon={NavigationPublishFavorite16px}'
				: ''}${iconRight ? ' iconRight' : ''}>${text}</Button>`;
			setSample(sample);
		},
		[ bordered, icon, iconRight, size, text, variant ]
	);

	return (
		<div className="story">
			<div className="settings">
				<Select options={variantOptions} value={variant} onChange={setVariant} />
				<Select options={sizeOptions} value={size} onChange={setSize} />
				<TextInput value={text} onChange={setText} />
				<Checkbox checked={bordered} onChange={setBordered} name="Bordered" />
				<Checkbox checked={icon} onChange={setIcon} name="With icon" />
				<Checkbox checked={iconRight} onChange={setIconRight} name="Icon on the right" />
			</div>
			<div className="sandbox">
				<Button {...{ variant, size, bordered, Icon: icon ? NavigationPublishFavorite16px : null, iconRight }}>
					{text}
				</Button>
				<textarea className="code" value={sample} />
			</div>
		</div>
	);
};

export default ButtonStory;
