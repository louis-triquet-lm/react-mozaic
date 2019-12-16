import React, { useState } from 'react';
import TextInput from 'TextInput';
import Checkbox from 'Checkbox';
import { NavigationPublishFavorite16px } from 'Icons';

const ButtonStory = () => {
	const [ valid, setValid ] = useState(false);
	const [ invalid, setInvalid ] = useState(false);
	const [ text, setText ] = useState('Sample text');

	return (
		<div className="button-story">
			<div className="settings">
				<Checkbox checked={valid} onChange={setValid} name="Valid" />
				<Checkbox checked={invalid} onChange={setInvalid} name="Invalid" />
			</div>
			<div className="sandbox">
				<TextInput value={text} onChange={setText} {...{ valid, invalid }} />
				<TextInput value={text} onChange={setText} Icon={NavigationPublishFavorite16px} />
			</div>
		</div>
	);
};

export default ButtonStory;
