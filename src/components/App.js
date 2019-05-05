import React, { Component } from 'react';
import {
  Header,
  Container,
  Menu
} from 'semantic-ui-react';

import TabBarContainer from './tabs/TabBarContainer';
import UnitInfo from './unitInfo/UnitInfo';
import Pilots from './pilots/Pilots';
import Mechs from './mechs/Mechs';
import UnitOrganization from './UnitOrganization/UnitOrganization';
import '../styles/App.css';

class App extends Component {
  render() {
    const tabs = [
      { name : 'unitInfo', label : 'Unit Info', component : UnitInfo },
      { name : 'pilots', label : 'Pilots', component : Pilots },
      { name : 'mechs', label : 'Mechs', component : Mechs },
      { name : 'unitOrganaization', label : 'Unit Organaization', component : UnitOrganization },
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
