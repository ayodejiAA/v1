import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/index.scss';

import App from './App';

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept();
};
