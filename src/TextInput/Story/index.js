import React, { useState } from 'react';
import TextInput from 'TextInput';
import Checkbox from 'Checkbox';

import './textinputstory.scss';

const ButtonStory = () => {
	const [ valid, setValid ] = useState(false);
	const [ invalid, setInvalid ] = useState(false);
	const [ disabled, setDisabled ] = useState(false);
	const [ text, setText ] = useState('Sample text');

	return (
		<div className="story text-input">
			<div className="settings">
				<Checkbox checked={valid} onChange={setValid} name="Valid" />
				<Checkbox checked={invalid} onChange={setInvalid} name="Invalid" />
				<Checkbox checked={disabled} onChange={setDisabled} name="Disabled" />
			</div>
			<div className="sandbox">
				<TextInput value={text} onChange={setText} {...{ valid, invalid, disabled }} />
			</div>
		</div>
	);
};

export default ButtonStory;
