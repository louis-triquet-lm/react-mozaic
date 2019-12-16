import React, { useState } from 'react';
import Checkbox from 'Checkbox';
import Select from 'Select';

const options = [
	{ label: 'Option 1', value: 'option1' },
	{ label: 'Option 2', value: 'option2' },
	{ label: 'Option 3', value: 'option3' },
	{ label: 'Option 4', value: 'option4' },
	{ label: 'Option 5', value: 'option5' }
];

const SelectStory = () => {
	const [ valid, setValid ] = useState(false);
	const [ invalid, setInvalid ] = useState(false);
	const [ value, onChange ] = useState('Sample text');
	const [ searchable, setSearchable ] = useState(false);
	const [ clearable, setClearable ] = useState(false);
	const [ disabled, setDisabled ] = useState(false);

	return (
		<div className="button-story">
			<div className="settings">
				<Checkbox checked={valid} onChange={setValid} name="Valid" />
				<Checkbox checked={invalid} onChange={setInvalid} name="Invalid" />
				<Checkbox checked={searchable} onChange={setSearchable} name="Searchable" />
				<Checkbox checked={clearable} onChange={setClearable} name="Clearable" />
				<Checkbox checked={disabled} onChange={setDisabled} name="Disabled" />
			</div>
			<div className="sandbox">
				<Select {...{ options, value, onChange, searchable, clearable, valid, invalid, disabled }} />
			</div>
		</div>
	);
};

export default SelectStory;