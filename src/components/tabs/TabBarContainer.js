import { connect } from 'react-redux';

import TabBar from './TabBar';
import { selectCurrentTab } from '../../selectors/tabsselectors';
import { selectTab } from '../../actions/tabsActions';

const mapStateToProps = state => {
  const currentTab = selectCurrentTab(state);

  return { currentTab };
};

const actions = { onTabClick : selectTab };

export default connect(mapStateToProps, actions)(TabBar);
