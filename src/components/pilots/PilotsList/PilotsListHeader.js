import React from 'react';
import { Table } from 'semantic-ui-react';

const PilotsListHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell width={5}>
        Name
      </Table.HeaderCell>
      <Table.HeaderCell width={5}>
        Rank
      </Table.HeaderCell>
      <Table.HeaderCell width={5}>
        Age
      </Table.HeaderCell>
      <Table.HeaderCell width={5}>
        Skills
      </Table.HeaderCell>
      <Table.HeaderCell width={5}>
        Mech
      </Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default PilotsListHeader;
