import React from 'react';
import './app.scss';

import ButtonStory from 'Button/Story';
import CheckboxStory from 'Checkbox/Story';
import TextInputStory from 'TextInput/Story';

function App() {
	return (
		<div className="app">
			<ButtonStory />
			<CheckboxStory />
			<TextInputStory />
			{/*
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
			<Checkbox checked={full} onChange={setFull} name="full" />
			<TextInput value={text} onChange={setText} />
			<TextInput Icon={NavigationPublishFavorite16px} value={text} onChange={setText} />
            */}
		</div>
	);
}

export default App;
