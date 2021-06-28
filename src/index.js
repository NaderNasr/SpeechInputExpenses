import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SpeechProvider} from '@speechly/react-client'

import {Provider} from './context/context' 

ReactDOM.render(
	<SpeechProvider appId='415433b2-9758-44f7-af0e-abb7798046ab' language='en-US'>
		<Provider>
		<App />
	</Provider>
	</SpeechProvider>,
	document.getElementById('root')
);
