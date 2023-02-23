import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../styles/index.css';
import StarMatch from "../components/App";

ReactDOM.hydrate(
  <StarMatch initialData={window.__R_DATA.initialData} />,
  document.getElementById('root'),
);
