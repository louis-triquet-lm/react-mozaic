import React, { useState } from 'react';
import Checkbox from 'Checkbox';
import Select from 'Select';

import './story.scss';

const options = [
	{ label: 'Option 1', value: 'option1' },
	{ label: 'Option 2', value: 'option2' },
	{ label: 'Option 3', value: 'option3' },
	{ label: 'Option 4', value: 'option4' },
	{ label: 'Option 5', value: 'option5' },
];

const SelectStory = () => {
	const [ valid, setValid ] = useState(false);
	const [ invalid, setInvalid ] = useState(false);
	const [ value, onChange ] = useState('Sample text');

	return (
		<div className="button-story">
			<div className="settings">
				<Checkbox checked={valid} onChange={setValid} name="Valid" />
				<Checkbox checked={invalid} onChange={setInvalid} name="Invalid" />
			</div>
			<div className="sandbox">
				<Select {...{ options, value, onChange }} />
			</div>
		</div>
	);
};

export default SelectStory;
