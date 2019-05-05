import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import SampleComponent from '../components/SampleComponent';
import '../styles/App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <Header inverted as='h1'>Project Mini-Mek</Header>
      </div>
    </div>
  );
}

export default App;
