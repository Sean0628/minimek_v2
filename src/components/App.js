import React, { Component } from 'react';
import {
  Header,
  Container,
  Menu
} from 'semantic-ui-react';

import SampleComponent from '../components/SampleComponent';
import '../styles/App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <Header inverted as='h1'>Project Mini-Mek</Header>
      </div>
      <Container>
        <Menu tabular size='massive'>
          <Menu.Item name='unitInfo' active={true}>Unit Info</Menu.Item>
          <Menu.Item name='pilots' active={false}>Pilots</Menu.Item>
          <Menu.Item name='mechs' active={false}>Mechs</Menu.Item>
          <Menu.Item name='unitOrganization' active={false}>Unit Organaization</Menu.Item>
        </Menu>
      </Container>
    </div>
  );
}

export default App;
