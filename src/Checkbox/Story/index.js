import React, { useState, useEffect } from 'react';
import TextInput from 'TextInput';
import Checkbox from 'Checkbox';

const ButtonStory = () => {
	const [ invalid, setInvalid ] = useState(false);
	const [ disabled, setDisabled ] = useState(false);
	const [ name, setName ] = useState('Sample label');
	const [ checked, onChange ] = useState(false);
	const [ sample, setSample ] = useState('');

	useEffect(
		() => {
			const sample = `<Checkbox name="${name}"${invalid ? ' invalid' : ''}${disabled ? ' disabled' : ''}/>`;
			setSample(sample);
		},
		[ disabled, invalid, name ]
	);

	return (
		<div className="button-story">
			<div className="settings">
				<Checkbox checked={invalid} onChange={setInvalid} name="Invalid" />
				<Checkbox checked={disabled} onChange={setDisabled} name="Disabled" />
				<TextInput value={name} onChange={setName} />
			</div>
			<div className="sandbox">
				<Checkbox {...{ disabled, invalid, name, checked, onChange }} />
				<textarea className="code" value={sample} />
			</div>
		</div>
	);
};

export default ButtonStory;
