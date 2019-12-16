import React, { useState } from 'react';
import TextInput from 'TextInput';
import Checkbox from 'Checkbox';

const ButtonStory = () => {
	const [ invalid, setInvalid ] = useState(false);
	const [ name, setName ] = useState('Sample label');
	const [ checked, onChange ] = useState(false);

	return (
		<div className="button-story">
			<div className="settings">
				<Checkbox checked={invalid} onChange={setInvalid} name="Invalid" />
				<TextInput value={name} onChange={setName} />
			</div>
			<div className="sandbox">
				<Checkbox {...{ invalid, name, checked, onChange }} />
			</div>
		</div>
	);
};

export default ButtonStory;
