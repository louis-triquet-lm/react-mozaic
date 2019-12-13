import React, { useState } from 'react';
import Button from 'Button';
import Select from '../Select';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';

export default { title: 'Button' };

const variantOptions = [
	{ label: 'Primary', value: 'primary' },
	{ label: 'Primary-02', value: 'primary-02' },
	{ label: 'Neutral', value: 'neutral' },
	{ label: 'Danger', value: 'danger' },
];

const sizeOptions = [ { label: 'Small', value: 's' }, { label: 'Medium', value: 'm' }, { label: 'Large', value: 'l' } ];

const Basic = () => {
	const [ variant, setVariant ] = useState('primary');
	const [ size, setSize ] = useState('m');
	const [ text, setText ] = useState('Sample text');
	const [ full, setFull ] = useState(false);

	return (
		<div className="button-story">
			<div className="settings">
				<Select options={variantOptions} value={variant} onChange={setVariant} />
				<Select options={sizeOptions} value={size} onChange={setSize} />
				<TextInput value={text} onChange={setText} />
				<Checkbox checked={full} onChange={setFull} name="full" />
			</div>
			<Button {...{ variant, size, full }}>{text}</Button>
		</div>
	);
};

export const basic = () => <Basic />;

export const neutral = () => <Button variant="neutral">Sample text</Button>;

export const danger = () => <Button variant="danger">Sample text</Button>;
