import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import Tab from './Tab';
import ToggleDisplay from '../common/ToggleDisplay';
import { selectCurrentTab } from '../../selectors/tabsSelectors';
import { selectTab } from '../../actions/tabsActions';

const mapStateToProps = state => {
  const currentTab = selectCurrentTab(state);

  return { currentTab };
}

const actions = { onTabClick : selectTab };

export const TabBar = props => {
  const { tabs, currentTab, onTabClick, ...otherProps } = props;

  const tabItems = tabs.map(tabInfo => {
    const { name, label } = tabInfo;

    return (
      <Tab
        key={name}
        name={name}
        label={label}
        active={currentTab === name }
        onClick={onTabClick}
      />
    );
  });

  const tabPanels = tabs.map(tabInfo => {
    const { name, component : TabComponent } = tabInfo;

    return (
      <ToggleDisplay show={name === currentTab} key={name}>
        <TabComponent />
      </ToggleDisplay>
    )
  })

  return (
    <div>
      <Menu tabular attached='top' {...otherProps}>
        {tabItems}
      </Menu>
      {tabPanels}
    </div>
  )
};

export default connect(mapStateToProps, actions)(TabBar);
