import React from 'react';
import { Form } from 'semantic-ui-react';

import { getWeightClass } from '../../selectors/mechSelectors';

const MechDetails = ({ mech = {} }) => {
  const {
    id = '',
    name = '',
    type = '',
    weight = '',
  } = mech;

  const weightClass = getWeightClass(weight);

  return (
    <Form size='large'>
      <Form.Field name='id' width={16}>
        <label>ID</label>
        <input
          placeholer='ID'
          value={id}
        />
      </Form.Field>
      <Form.Field name='name' width={16}>
        <label>Name</label>
        <input
          placeholer='Name'
          value={name}
        />
      </Form.Field>
      <Form.Field name='model' width={6}>
        <label>Model</label>
        <input
          placeholer='Model'
          value={type}
        />
      </Form.Field>
      <Form.Field name='weight' width={6}>
        <label>Weight</label>
        <input
          value={weight}
        />
      </Form.Field>
      <Form.Field name='class' width={6}>
        <label>Class</label>
        <input
          value={weightClass}
        />
      </Form.Field>
    </Form>
  );
}

export default MechDetails;
