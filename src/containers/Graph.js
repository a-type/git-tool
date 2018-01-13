import { connect } from 'react-redux';
import actions from 'actions/git/log';
import bindRepoActionCreators from 'utils/bindRepoActionCreators';
import commitSelectors from 'selectors/git/commits';
import linkSelectors from 'selectors/git/links';
import Graph from 'components/Graph';

export default connect(
  (state, ownProps) => ({
    commits: commitSelectors.createCommitsNodeListSelector(ownProps.repoId)(state),
    edges: linkSelectors.createEdgesSelector(ownProps.repoId)(state),
  }),
  bindRepoActionCreators({
    refresh: actions.get.call,
  }),
)(Graph);
