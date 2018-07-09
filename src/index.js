import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Video from './Video';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Video />, document.getElementById('root'));
registerServiceWorker();
