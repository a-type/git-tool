import { connect } from 'react-redux';
import actions from 'actions/git/status';
import bindRepoActionCreators from 'utils/bindRepoActionCreators';
import selectors from 'selectors/git/status';
import Status from 'components/Status';

export default connect(
  (state, ownProps) => ({ status: selectors.selectStatus(ownProps.repoId)(state) }),
  bindRepoActionCreators({
    refresh: actions.get.call,
  }),
)(Status);
