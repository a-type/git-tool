import { connect } from 'react-redux';
import actions from 'actions/git/status';
import bindRepoActionCreators from 'utils/bindRepoActionCreators';
import selectStatus from 'selectors/git/status';

export default connect(
  (state, ownProps) => ({ status: selectStatus(ownProps.repoId)(state) }),
  bindRepoActionCreators({
    refresh: actions.get,
  }),
);
