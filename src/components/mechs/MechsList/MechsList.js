import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import MechsListHeader from './MechsListHeader';
import MechListRow from './MechsListRow';

export default class MechsList extends Component {
  render() {
    const { mechs = [] } = this.props;

    const mechRows = mechs.map(mech => (
      <MechListRow mech={mech} key={mech.id} />
    ));

    return (
      <Table>
        <MechsListHeader />
        <Table.Body>
          {mechRows}
        </Table.Body>
      </Table>
    );
  }
}
