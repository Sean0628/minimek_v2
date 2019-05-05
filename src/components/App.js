import React, { Component } from 'react';
import {
  Header,
  Container,
  Menu
} from 'semantic-ui-react';

import TabBarContainer from './tabs/TabBarContainer';
import '../styles/App.css';

class App extends Component {
  render() {
    const tabs = [
      { name : 'unitInfo', label : 'Unit Info' },
      { name : 'pilots', label : 'Pilots' },
      { name : 'mechs', label : 'Mechs' },
      { name : 'unitOrganaization', label : 'Unit Organaization' },
    ];

    return (
      <div className='App'>
        <div className='App-header'>
          <Header inverted as='h1'>Project Mini-Mek</Header>
        </div>
        <Container>
          <TabBarContainer tabs={tabs} size='massive' />
        </Container>
      </div>
    );
  }
}

export default App;
